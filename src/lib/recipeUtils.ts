import { getRecipeFromChefClaude } from "@/services/getRecipeFromChefClaude";
import { Recipe, RecipeSchema } from "@/types/recipe";

export async function generateRecipe(
  ingredients: string[],
  setLoading: (val: boolean) => void,
  setProgress: (val: number) => void,
  setRecipe: (val: Recipe | null) => void,
  navigate: (path: string) => void
) {
  setLoading(true);
  setRecipe(null);

  // Progress simulation
  let current = 0;
  const interval = setInterval(() => {
    current += 10;
    setProgress(current);
  }, 200);

  try {
    const rawResponse = await getRecipeFromChefClaude(ingredients);

    const parsedResponse = RecipeSchema.safeParse(rawResponse);
    if (!parsedResponse.success) {
      console.error("Error parsing response:", parsedResponse.error.flatten());
      navigate("/error");
      return;
    }
    setRecipe(parsedResponse.data);
  } catch (error) {
    console.error("Error fetching recipe:", error);
    navigate("/error");
  } finally {
    clearInterval(interval);
    setProgress(100);
    setTimeout(() => setLoading(false), 1000);
  }
}
