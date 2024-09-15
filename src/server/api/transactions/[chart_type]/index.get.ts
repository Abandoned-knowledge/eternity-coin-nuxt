import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const client = await serverSupabaseClient(event);
  const { chart_type } = getRouterParams(event);
  const { transaction_type, start_date, end_date, user_id } = getQuery(event);

  if (chart_type === "donut") {
    if (start_date && end_date) {
      const { data, error } = await client.rpc("get_transactions_donut_by_date", {
        type_input: transaction_type,
        start_date: start_date,
        end_date: end_date,
        user_id_input: user_id,
      });

      return error ? [] : data;
    }
    const { data, error } = await client.rpc("get_transactions_donut", {
      type_input: transaction_type,
      user_id_input: user_id,
    });
    return error ? [] : data;
  } else {
    if (start_date && end_date) {
      const { data, error } = await client.rpc("get_transactions_line_by_date", {
        type_input: transaction_type,
        start_date: start_date,
        end_date: end_date,
        user_id_input: user_id,
      });
      return error ? [] : data;
    }
    const { data, error } = await client.rpc("get_transactions_line", {
      type_input: transaction_type,
      user_id_input: user_id,
    });
    return error ? [] : data;
  }
});
