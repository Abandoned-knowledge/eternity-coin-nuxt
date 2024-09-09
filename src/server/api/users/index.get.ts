import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const { login, password } = getQuery(event);

  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: String(login),
    password: String(password),
  });

  return { error, data };
});
