export type transactionType = "income" | "expense";

export interface ITransactionData {
  transaction_id: number;
  user_id: number;
  date: string;
  value: number;
  category: CategoryItem;
}
