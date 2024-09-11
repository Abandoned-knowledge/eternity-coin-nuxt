import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { id } = getRouterParams(event);

  const { error } = await client.from("transactions").delete().eq("id", id);

  return error;
});
