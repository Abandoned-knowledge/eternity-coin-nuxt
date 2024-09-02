import { serverSupabaseClient } from "#supabase/server";
import { IUser } from "~/shared/types/user";

export default defineEventHandler(async (event) => {
  const { login, password } = await readBody(event);

  const supabase = await serverSupabaseClient(event);

  const { data: response } = await supabase
    .from("users")
    .select("*")
    .eq("login", login)
    .eq("password", password);

  return response?.length ? (response[0] as IUser) : "User is not find";
});
