-- Care Bot conversation logs: capture each user turn + assistant reply so
-- Master can review and tune responses over time. Insert-only from the edge
-- function via service_role; admins read via their own role check.

create table if not exists public.care_bot_logs (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  session_id text,
  ip_hash text,
  user_agent text,
  user_message text not null,
  assistant_reply text,
  tool_titles text[] default '{}',
  turn_count int default 0,
  latency_ms int,
  model text,
  error text
);

create index if not exists care_bot_logs_created_at_idx on public.care_bot_logs (created_at desc);

grant select, insert on public.care_bot_logs to authenticated;
grant all on public.care_bot_logs to service_role;

alter table public.care_bot_logs enable row level security;

-- Only admins can read logs (uses existing has_role helper if present).
do $$
begin
  if exists (
    select 1 from pg_proc p
    join pg_namespace n on n.oid = p.pronamespace
    where n.nspname = 'public' and p.proname = 'has_role'
  ) then
    execute $POL$
      create policy "Admins read care bot logs"
        on public.care_bot_logs
        for select
        to authenticated
        using (public.has_role(auth.uid(), 'admin'));
    $POL$;
  end if;
end$$;
