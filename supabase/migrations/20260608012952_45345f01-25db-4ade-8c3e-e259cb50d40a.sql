
-- Enforce edge-function validation rules at the DB level so direct PostgREST inserts cannot bypass them.
CREATE OR REPLACE FUNCTION public.validate_tool_submission()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  IF NEW.name IS NULL OR char_length(NEW.name) = 0 OR char_length(NEW.name) > 200 THEN
    RAISE EXCEPTION 'Invalid name length (1-200 chars required)';
  END IF;
  IF NEW.description IS NULL OR char_length(NEW.description) = 0 OR char_length(NEW.description) > 2000 THEN
    RAISE EXCEPTION 'Invalid description length (1-2000 chars required)';
  END IF;
  IF NEW.category IS NULL OR char_length(NEW.category) > 100 THEN
    RAISE EXCEPTION 'Invalid category length (max 100 chars)';
  END IF;
  IF NEW.url IS NULL OR char_length(NEW.url) > 2048 THEN
    RAISE EXCEPTION 'Invalid url length (max 2048 chars)';
  END IF;
  IF NEW.url !~* '^https?://' THEN
    RAISE EXCEPTION 'url must start with http:// or https://';
  END IF;
  IF NEW.submitter_email IS NULL
     OR char_length(NEW.submitter_email) > 320
     OR NEW.submitter_email !~* '^[^\s@]+@[^\s@]+\.[^\s@]+$' THEN
    RAISE EXCEPTION 'Invalid submitter_email';
  END IF;
  IF NEW.submitter_name IS NOT NULL AND char_length(NEW.submitter_name) > 200 THEN
    RAISE EXCEPTION 'Invalid submitter_name length (max 200 chars)';
  END IF;
  IF NEW.video_url IS NOT NULL AND char_length(NEW.video_url) > 2048 THEN
    RAISE EXCEPTION 'Invalid video_url length (max 2048 chars)';
  END IF;
  IF NEW.image_url IS NOT NULL AND char_length(NEW.image_url) > 2048 THEN
    RAISE EXCEPTION 'Invalid image_url length (max 2048 chars)';
  END IF;

  -- Rate limit: max 5 anonymous submissions per email per hour at DB layer
  IF NEW.submitter_user_id IS NULL THEN
    IF (
      SELECT count(*) FROM public.tool_submissions
      WHERE submitter_email = NEW.submitter_email
        AND created_at > now() - interval '1 hour'
    ) >= 5 THEN
      RAISE EXCEPTION 'Rate limit exceeded for this email (max 5/hour)';
    END IF;
  END IF;

  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS validate_tool_submission_trigger ON public.tool_submissions;
CREATE TRIGGER validate_tool_submission_trigger
BEFORE INSERT OR UPDATE ON public.tool_submissions
FOR EACH ROW EXECUTE FUNCTION public.validate_tool_submission();
