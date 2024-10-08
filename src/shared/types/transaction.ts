export type transactionType = "income" | "expense";

export interface ITransactionData {
  id: string;
  date: string;
  value: number;
  description: string;
  categories: CategoryItem;
}
