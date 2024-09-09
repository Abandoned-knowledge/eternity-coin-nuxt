export type transactionType = "income" | "expense";

export interface ITransactionData {
  transaction_id: string;
  date: string;
  value: number;
  categories: CategoryItem;
}
