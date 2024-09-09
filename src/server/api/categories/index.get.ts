import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { type, user_id } = getQuery(event);

  const response = await client
    .from("categories")
    .select("*")
    .eq("type", type)
    .eq("user_id", user_id);

return response;
});
