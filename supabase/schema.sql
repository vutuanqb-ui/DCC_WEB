-- Deutsch Connect Center Supabase schema + Row Level Security baseline.
-- Run in Supabase SQL Editor. Keep service_role key only on server/Edge Functions.

create extension if not exists pgcrypto;

create type public.app_role as enum ('admin','manager','staff','teacher','partner','student','customer');
create type public.case_status as enum ('Khách mới đăng ký','Đã tư vấn','Đang học tiếng','Đang hoàn thiện hồ sơ','Đã gửi đối tác','Chờ phỏng vấn','Đã có hợp đồng','Đang xử lý visa','Đã có visa','Đã bay','Đang hỗ trợ sau bay');

drop table if exists public.notifications cascade;
drop table if exists public.uploaded_files cascade;
drop table if exists public.activity_logs cascade;
drop table if exists public.notes cascade;
drop table if exists public.tasks cascade;
drop table if exists public.partner_students cascade;
drop table if exists public.partners cascade;
drop table if exists public.class_students cascade;
drop table if exists public.language_classes cascade;
drop table if exists public.visa_cases cascade;
drop table if exists public.document_checklists cascade;
drop table if exists public.documents cascade;
drop table if exists public.applications cascade;
drop table if exists public.job_orders cascade;
drop table if exists public.programs cascade;
drop table if exists public.customers cascade;
drop table if exists public.leads cascade;
drop table if exists public.profiles cascade;

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text not null,
  phone text,
  email text,
  role public.app_role not null default 'student',
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.partners (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid references public.profiles(id),
  partner_code text unique not null,
  name text not null,
  contact_name text,
  phone text,
  email text,
  status text not null default 'active',
  created_at timestamptz not null default now()
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  birth_date date,
  phone text not null,
  email text,
  province text,
  social_contact text,
  program_interest text,
  german_level text,
  highest_education text,
  current_career text,
  work_experience text,
  passport_status text,
  document_status text,
  desired_departure text,
  desired_career text,
  desired_location text,
  note text,
  source text not null default 'Website',
  status public.case_status not null default 'Khách mới đăng ký',
  lookup_code text unique default ('DCC-' || upper(substr(gen_random_uuid()::text, 1, 8))),
  partner_id uuid references public.partners(id),
  assign_to uuid references public.profiles(id),
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.customers (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id),
  lead_id uuid references public.leads(id),
  partner_id uuid references public.partners(id),
  full_name text not null,
  phone text,
  email text,
  program_interest text,
  status public.case_status not null default 'Khách mới đăng ký',
  assign_to uuid references public.profiles(id),
  sensitive_note text,
  created_at timestamptz not null default now()
);

create table public.programs (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  description text,
  is_public boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.job_orders (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references public.programs(id),
  title text not null,
  program_type text,
  career text,
  location text,
  seats_total int default 0,
  seats_available int default 0,
  salary_support text,
  german_requirement text,
  intake_time text,
  status text default 'Còn tuyển',
  overview text,
  benefits text[],
  requirements text[],
  required_documents text[],
  risks text[],
  costs text,
  is_public boolean not null default false,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.applications (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  job_order_id uuid references public.job_orders(id),
  status public.case_status not null default 'Khách mới đăng ký',
  assign_to uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.documents (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  document_type text not null,
  status text not null default 'missing',
  deadline date,
  is_sensitive boolean not null default true,
  updated_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.document_checklists (
  id uuid primary key default gen_random_uuid(),
  program_id uuid references public.programs(id),
  document_type text not null,
  description text,
  required boolean not null default true,
  created_at timestamptz not null default now()
);

create table public.visa_cases (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid not null references public.customers(id) on delete cascade,
  visa_type text,
  submitted_at date,
  appointment_at timestamptz,
  status text default 'draft',
  result text,
  assign_to uuid references public.profiles(id),
  sensitive_note text,
  created_at timestamptz not null default now()
);

create table public.language_classes (
  id uuid primary key default gen_random_uuid(),
  class_name text not null,
  level text not null,
  teacher_id uuid references public.profiles(id),
  start_date date,
  target_exam_date date,
  created_at timestamptz not null default now()
);

create table public.class_students (
  id uuid primary key default gen_random_uuid(),
  class_id uuid not null references public.language_classes(id) on delete cascade,
  customer_id uuid not null references public.customers(id) on delete cascade,
  attendance_rate numeric,
  test_result text,
  learning_note text,
  created_at timestamptz not null default now(),
  unique(class_id, customer_id)
);

create table public.partner_students (
  id uuid primary key default gen_random_uuid(),
  partner_id uuid not null references public.partners(id) on delete cascade,
  customer_id uuid references public.customers(id) on delete cascade,
  student_name text not null,
  phone text,
  email text,
  birth_date date,
  program_interest text,
  german_level text,
  education text,
  note text,
  status public.case_status not null default 'Khách mới đăng ký',
  created_at timestamptz not null default now()
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  customer_id uuid references public.customers(id) on delete cascade,
  assigned_to uuid references public.profiles(id),
  priority text default 'normal',
  status text default 'open',
  deadline timestamptz,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.notes (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete cascade,
  body text not null,
  is_public_to_student boolean not null default false,
  is_sensitive boolean not null default false,
  created_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.activity_logs (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references public.profiles(id),
  entity_type text not null,
  entity_id uuid,
  action text not null,
  metadata jsonb default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table public.uploaded_files (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references public.customers(id) on delete cascade,
  document_id uuid references public.documents(id) on delete set null,
  bucket text not null default 'dcc-files',
  storage_path text not null,
  file_name text,
  mime_type text,
  is_sensitive boolean not null default true,
  uploaded_by uuid references public.profiles(id),
  created_at timestamptz not null default now()
);

create table public.notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  title text not null,
  body text,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create or replace function public.current_role()
returns public.app_role language sql stable security definer set search_path = public as $$
  select role from public.profiles where id = auth.uid() and is_active = true
$$;

create or replace function public.is_admin_or_manager()
returns boolean language sql stable security definer set search_path = public as $$
  select coalesce(public.current_role() in ('admin','manager'), false)
$$;

create or replace function public.my_partner_id()
returns uuid language sql stable security definer set search_path = public as $$
  select id from public.partners where profile_id = auth.uid() limit 1
$$;

alter table public.profiles enable row level security;
alter table public.leads enable row level security;
alter table public.customers enable row level security;
alter table public.programs enable row level security;
alter table public.job_orders enable row level security;
alter table public.applications enable row level security;
alter table public.documents enable row level security;
alter table public.document_checklists enable row level security;
alter table public.visa_cases enable row level security;
alter table public.language_classes enable row level security;
alter table public.class_students enable row level security;
alter table public.partners enable row level security;
alter table public.partner_students enable row level security;
alter table public.tasks enable row level security;
alter table public.notes enable row level security;
alter table public.activity_logs enable row level security;
alter table public.uploaded_files enable row level security;
alter table public.notifications enable row level security;

create policy profiles_self_or_admin on public.profiles for select to authenticated using (id = auth.uid() or public.is_admin_or_manager());
create policy profiles_admin_manage on public.profiles for all to authenticated using (public.current_role() = 'admin') with check (public.current_role() = 'admin');

create policy public_can_insert_leads on public.leads for insert to anon, authenticated with check (source = 'Website' or auth.role() = 'authenticated');
create policy leads_role_select on public.leads for select to authenticated using (public.is_admin_or_manager() or assign_to = auth.uid() or created_by = auth.uid() or partner_id = public.my_partner_id());
create policy leads_staff_update on public.leads for update to authenticated using (public.is_admin_or_manager() or assign_to = auth.uid()) with check (public.is_admin_or_manager() or assign_to = auth.uid());

create policy customers_select_by_role on public.customers for select to authenticated using (
  public.is_admin_or_manager()
  or user_id = auth.uid()
  or assign_to = auth.uid()
  or partner_id = public.my_partner_id()
  or exists (select 1 from public.class_students cs join public.language_classes lc on lc.id = cs.class_id where cs.customer_id = customers.id and lc.teacher_id = auth.uid())
);
create policy customers_staff_manage on public.customers for all to authenticated using (public.is_admin_or_manager() or assign_to = auth.uid()) with check (public.is_admin_or_manager() or assign_to = auth.uid());

create policy programs_public_read on public.programs for select to anon, authenticated using (is_public or public.is_admin_or_manager());
create policy programs_admin_manage on public.programs for all to authenticated using (public.is_admin_or_manager()) with check (public.is_admin_or_manager());

create policy job_orders_public_read on public.job_orders for select to anon, authenticated using (is_public or public.is_admin_or_manager());
create policy job_orders_staff_manage on public.job_orders for all to authenticated using (public.is_admin_or_manager() or public.current_role() = 'staff') with check (public.is_admin_or_manager() or public.current_role() = 'staff');

create policy applications_select_by_customer_or_staff on public.applications for select to authenticated using (
  public.is_admin_or_manager() or assign_to = auth.uid() or exists (select 1 from public.customers c where c.id = applications.customer_id and (c.user_id = auth.uid() or c.partner_id = public.my_partner_id()))
);
create policy applications_staff_manage on public.applications for all to authenticated using (public.is_admin_or_manager() or assign_to = auth.uid()) with check (public.is_admin_or_manager() or assign_to = auth.uid());

create policy documents_select_limited on public.documents for select to authenticated using (
  public.is_admin_or_manager() or updated_by = auth.uid() or exists (select 1 from public.customers c where c.id = documents.customer_id and (c.user_id = auth.uid() or c.assign_to = auth.uid() or c.partner_id = public.my_partner_id()))
);
create policy documents_staff_manage on public.documents for all to authenticated using (public.is_admin_or_manager() or updated_by = auth.uid()) with check (public.is_admin_or_manager() or updated_by = auth.uid());

create policy checklist_read on public.document_checklists for select to authenticated using (true);
create policy checklist_admin_manage on public.document_checklists for all to authenticated using (public.is_admin_or_manager()) with check (public.is_admin_or_manager());

create policy visa_select_limited on public.visa_cases for select to authenticated using (public.is_admin_or_manager() or assign_to = auth.uid() or exists (select 1 from public.customers c where c.id = visa_cases.customer_id and c.user_id = auth.uid()));
create policy visa_staff_manage on public.visa_cases for all to authenticated using (public.is_admin_or_manager() or assign_to = auth.uid()) with check (public.is_admin_or_manager() or assign_to = auth.uid());

create policy classes_teacher_or_admin on public.language_classes for select to authenticated using (public.is_admin_or_manager() or teacher_id = auth.uid());
create policy classes_admin_manage on public.language_classes for all to authenticated using (public.is_admin_or_manager()) with check (public.is_admin_or_manager());
create policy class_students_teacher_student on public.class_students for select to authenticated using (public.is_admin_or_manager() or exists (select 1 from public.language_classes lc where lc.id = class_students.class_id and lc.teacher_id = auth.uid()) or exists (select 1 from public.customers c where c.id = class_students.customer_id and c.user_id = auth.uid()));
create policy class_students_teacher_manage on public.class_students for all to authenticated using (public.is_admin_or_manager() or exists (select 1 from public.language_classes lc where lc.id = class_students.class_id and lc.teacher_id = auth.uid())) with check (public.is_admin_or_manager() or exists (select 1 from public.language_classes lc where lc.id = class_students.class_id and lc.teacher_id = auth.uid()));

create policy partners_self_or_admin on public.partners for select to authenticated using (public.is_admin_or_manager() or profile_id = auth.uid());
create policy partners_admin_manage on public.partners for all to authenticated using (public.is_admin_or_manager()) with check (public.is_admin_or_manager());
create policy partner_students_partner_select on public.partner_students for select to authenticated using (public.is_admin_or_manager() or partner_id = public.my_partner_id());
create policy partner_students_partner_insert on public.partner_students for insert to authenticated with check (public.is_admin_or_manager() or partner_id = public.my_partner_id());
create policy partner_students_staff_update on public.partner_students for update to authenticated using (public.is_admin_or_manager()) with check (public.is_admin_or_manager());

create policy tasks_assignee_or_admin on public.tasks for select to authenticated using (public.is_admin_or_manager() or assigned_to = auth.uid() or created_by = auth.uid());
create policy tasks_staff_manage on public.tasks for all to authenticated using (public.is_admin_or_manager() or assigned_to = auth.uid() or created_by = auth.uid()) with check (public.is_admin_or_manager() or assigned_to = auth.uid() or created_by = auth.uid());

create policy notes_select_by_role on public.notes for select to authenticated using (
  public.is_admin_or_manager()
  or created_by = auth.uid()
  or (is_public_to_student and exists (select 1 from public.customers c where c.id = notes.customer_id and c.user_id = auth.uid()))
  or exists (select 1 from public.customers c where c.id = notes.customer_id and c.assign_to = auth.uid())
);
create policy notes_staff_manage on public.notes for all to authenticated using (public.is_admin_or_manager() or created_by = auth.uid()) with check (public.is_admin_or_manager() or created_by = auth.uid());

create policy logs_admin_read on public.activity_logs for select to authenticated using (public.is_admin_or_manager());
create policy logs_authenticated_insert on public.activity_logs for insert to authenticated with check (actor_id = auth.uid());

create policy files_select_limited on public.uploaded_files for select to authenticated using (public.is_admin_or_manager() or uploaded_by = auth.uid() or exists (select 1 from public.customers c where c.id = uploaded_files.customer_id and (c.user_id = auth.uid() or c.assign_to = auth.uid() or c.partner_id = public.my_partner_id())));
create policy files_uploader_insert on public.uploaded_files for insert to authenticated with check (uploaded_by = auth.uid() or public.is_admin_or_manager());

create policy notifications_self on public.notifications for select to authenticated using (user_id = auth.uid() or public.is_admin_or_manager());
create policy notifications_admin_insert on public.notifications for insert to authenticated with check (public.is_admin_or_manager());

insert into public.programs (slug, title, description, is_public) values
('du-hoc-nghe-duc','Du học nghề Đức','Tuyển sinh, học tiếng, hồ sơ và visa du học nghề Đức.', true),
('18b-18a','Chuyển đổi văn bằng 18B/18A','Kiểm tra điều kiện công nhận/chuyển đổi văn bằng và việc làm tại Đức.', true),
('au-pair-duc','Au-pair Đức','Trải nghiệm văn hóa, học tiếng và sống cùng gia đình bản xứ.', true),
('thoi-vu-8-thang','Thời vụ Đức 8 tháng','Chương trình làm việc ngắn hạn theo mùa vụ tại Đức.', true),
('hoc-tieng-duc','Học tiếng Đức','Lớp A1, A2, B1, B2 có theo dõi tiến độ.', true)
on conflict (slug) do nothing;
