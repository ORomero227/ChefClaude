import { Recipe, RecipeSchema } from "@/types/recipe";
export async function getRecipeFromChefClaude(
  ingredients: string[]
): Promise<Recipe | null> {
  const response = await fetch("/api/getRecipe", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ingredients }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch recipe from Chef Claude");
  }

  const data = await response.json();

  try {
    const recipe = RecipeSchema.parse(data);
    return recipe;
  } catch (e) {
    console.error("Failed to parse recipe data", e);
    return null;
  }
}
