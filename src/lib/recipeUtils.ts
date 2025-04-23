import { getRecipeFromChefClaude } from "@/api/recipeApi";
import { Recipe } from "@/types/recipe";

export async function generateRecipe(
  ingredients: string[],
  setLoading: (val: boolean) => void,
  setProgress: (val: number) => void,
  setRecipe: (val: Recipe) => void
) {
  setLoading(true);
  setRecipe({} as Recipe);

  // Progress simulation
  let current = 0;
  const interval = setInterval(() => {
    current += 10;
    setProgress(current);
  }, 200);

  try {
    const recipe = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipe);
  } finally {
    clearInterval(interval);
    setProgress(100);
    setTimeout(() => setLoading(false), 1000);
  }
}
