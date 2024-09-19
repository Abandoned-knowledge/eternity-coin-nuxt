import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { type } = getRouterParams(event);
  const { user_id, start_date, end_date } = getQuery(event);

  const { data, error } = await client
    .from("transactions")
    .select(`id, date, value, description, categories(id, type, label, color)`)
    .eq("categories.type", type)
    .eq("categories.user_id", user_id)
    .gte("date", start_date)
    .lte("date", end_date)
    .not("categories", "is", null);

  return error ? [] : data;
});
