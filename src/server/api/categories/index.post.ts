import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const { label, color, type } = await readBody(event);
  const { user_id } = getQuery(event);

  const response = await client.from("categories").insert({
    user_id: user_id,
    label: label,
    color: `#${color}`,
    type: type,
  });

  return response;
});
