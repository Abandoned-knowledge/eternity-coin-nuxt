import { object, string, ref, number, type ObjectShape } from "yup";

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

export const FormAddTransactionSchema = object({
  value: number().required().label("Value"),
  description: string().label("Description"),
  type: string().required().label("Transaction type"),
});
