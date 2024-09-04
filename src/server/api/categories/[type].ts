import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event);
  const { type } = getRouterParams(event);
  const { user_id } = getQuery(event);

  return await supabase.from("categories").select("*").eq("type", type).eq("user_id", user_id);
});
