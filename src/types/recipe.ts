import { z } from "zod";

export const RecipeSchema = z.object({
  id: z.number().optional(),
  title: z.string(),
  description: z.string(),
  cookTime: z.string(),
  ingredients: z.array(z.string()),
  instructions: z.array(z.string()),
  servings: z.number(),
});

export type Recipe = z.infer<typeof RecipeSchema>;
