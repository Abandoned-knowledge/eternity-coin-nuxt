import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { type } = getRouterParams(event);
  const { user_id, start_date, end_date } = getQuery(event);

  const { data, error } = await client
    .from("transactions")
    .select(`id, date, value, categories(id, type, label, color)`)
    .gte("date", start_date)
    .lte("date", end_date)
    .eq("categories.user_id", user_id);
  return error ? [] : data;
});
