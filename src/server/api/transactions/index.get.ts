import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { type } = getRouterParams(event);
  const { user_id } = getQuery(event);

  const { data, error } = await client
    .from("transactions")
    .select(`id, date, value, categories(id, type, label, color)`)
    .eq("categories.user_id", user_id);

  return error ? [] : data;
});
