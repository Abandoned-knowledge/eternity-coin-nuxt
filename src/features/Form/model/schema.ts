import { object, string, ref, number, date } from "yup";

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
  date: date().required().label("Date"),
});

export const FormChangePasswordSchema = object({
  password: string().required().label("Password"),
  password_new: string().required().label("New Password"),
});

export const FormChangeNameSchema = object({
  name: string().required().label("Name"),
});

export const FormCreateCategorySchema = object({
  label: string().required().label("Label"),
  color: string().required().label("Color"),
  type: string().required().label("Transaction type"),
});
