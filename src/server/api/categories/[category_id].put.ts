import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  console.log("PUT request received");
  const client = await serverSupabaseClient(event);

  const { category_id } = getRouterParams(event);
  const { label, color } = await readBody(event);

  const response = await client
    .from("categories")
    .update({
      label: label,
      color: color,
    })
    .eq("id", category_id);

  return response;
});
