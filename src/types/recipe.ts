export type Recipe = {
  id?: number;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
  category: string;
  savedDate?: string;
};
