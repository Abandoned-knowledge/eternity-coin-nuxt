import { object, string } from "yup";

export const FormLoginSchema = object({
  login: string().required().email().label("Email address"),
  password: string().required().label("Password"),
});
