import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const user = await serverSupabaseUser(event);

  const { date, value, description, category_id } = await readBody(event);

  let response;

  response = await client.from("transactions").insert({
    value: value,
    date: date,
    description: description,
    category_id: category_id,
    user_id: user?.id,
  });

  return response;
});
