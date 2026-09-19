create extension if not exists pg_cron with schema extensions;
create extension if not exists pg_net with schema extensions;

select cron.unschedule('chat-watchdog-hourly') where exists (select 1 from cron.job where jobname = 'chat-watchdog-hourly');

select cron.schedule(
  'chat-watchdog-hourly',
  '15 * * * *',
  $$
  select net.http_post(
    url := 'https://huupailptzvcykyqdkar.supabase.co/functions/v1/chat-watchdog',
    headers := jsonb_build_object('Content-Type','application/json','x-cron-secret', current_setting('app.digest_cron_secret', true)),
    body := jsonb_build_object('windowMinutes', 60)
  );
  $$
);