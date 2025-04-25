import { Recipe } from "@/types/recipe";
export async function getRecipeFromChefClaude(
  ingredients: string[]
): Promise<Recipe> {
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

  return response.json();
}
