create table if not exists public.care_bot_logs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text,
  ip_hash text,
  user_agent text,
  user_message text not null,
  assistant_reply text,
  tool_titles text[] default '{}',
  turn_count integer default 0,
  latency_ms integer,
  model text,
  error text
);

grant select on public.care_bot_logs to authenticated;
grant all on public.care_bot_logs to service_role;

alter table public.care_bot_logs enable row level security;

create index if not exists care_bot_logs_created_at_idx on public.care_bot_logs (created_at desc);

create policy "Admins can view care bot logs"
on public.care_bot_logs
for select
to authenticated
using (public.has_role(auth.uid(), 'admin'::app_role));