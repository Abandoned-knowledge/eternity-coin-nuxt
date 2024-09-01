import { object, string, ref } from "yup";

export const FormLoginSchema = object({
  login: string().required().email().label("Email address"),
  password: string().required().label("Password"),
});

export const FormRegisterSchema = object({
  name: string().required().label("Name"),
  login: string().required().email().label("Email address"),
  password: string().required().label("Password"),
  password_confirm: string()
    .required()
    .label("Password confirm")
    .oneOf([ref("password")], "Password must match"),
});
