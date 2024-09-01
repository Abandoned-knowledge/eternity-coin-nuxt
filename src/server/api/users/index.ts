import { serverSupabaseClient } from "#supabase/server";

export default defineEventHandler(async (event) => {
  const { login, name, password, password_confirm } = await readBody(event);

  const supabase = await serverSupabaseClient(event);

  if (password !== password_confirm) {
    return "Passwords must match";
  } else {
    const { error } = await supabase.from("users").insert({
      name: name,
      login: login,
      password: password,
    });
    if (error?.code === "23505") {
      return "Login already exists";
    }
    return "User created";
  }
});
