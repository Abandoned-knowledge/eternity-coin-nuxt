import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { category_id } = getRouterParams(event);

  await client.from("transactions").delete().eq("category_id", category_id);
  const response = await client.from("categories").delete().eq("id", category_id);

  return response;
});
