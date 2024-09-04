import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event);

  const supabase = await serverSupabaseClient(event);

  const { data, error } = await supabase.auth.signInWithPassword({
    email: login,
    password: password,
  });

  return { error, data };
});
