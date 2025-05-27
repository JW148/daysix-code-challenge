export type Gender = "male" | "female";

export type Category =
  | "average"
  | "aboveAverage"
  | "belowAverage"
  | "uncategorised";

export type Test = {
  id: number;
  date: Date;
  score: number;
  category: Category;
};
