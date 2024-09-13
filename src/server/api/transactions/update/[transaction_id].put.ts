import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);

  const { transaction_id } = getRouterParams(event);
  const { categoryId, value, description, date } = await readBody(event);

  const { error } = await client
    .from("transactions")
    .update({
      category_id: categoryId,
      value: value,
      description: description,
      date: date,
    })
    .eq("id", transaction_id);

  return error;
});
