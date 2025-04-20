import { getRecipeFromChefClaude } from "@/api/recipeApi";

export async function generateRecipe(
  ingredients: string[],
  setLoading: (val: boolean) => void,
  setProgress: (val: number) => void,
  setRecipe: (val: string) => void
) {
  setLoading(true);
  setRecipe("");

  // Progress simulation
  let current = 0;
  const interval = setInterval(() => {
    current += 10;
    setProgress(current);
  }, 200);

  try {
    const recipeMarkdown = await getRecipeFromChefClaude(ingredients);
    setRecipe(recipeMarkdown);
  } finally {
    clearInterval(interval);
    setProgress(100);
    setTimeout(() => setLoading(false), 1000);
  }
}
