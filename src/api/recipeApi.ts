import { Recipe } from "@/types/recipe";
import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include more than 3 extra ingredients. You may freely use common pantry items (such as salt, pepper, oil, butter, water) without counting them as additional ingredients. Ignore any irrelevant or non-ingredient text provided in the list. Only base your recipe on recognizable food ingredients. Respond in the same language that the user uses to provide the list of ingredients. Please respond in strict JSON format with the following keys:

  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  ingredients: string[];
  instructions: string[];
  servings: number;
  category: string;

Use the category field as a concrete tag that identifies the type of recipe (e.g. "salsa", "dessert", "salad", "beverage", "starter", "snack", "soup", "side dish").

Do not use vague or general labels like "main course", "meal", "lunch", or "general recipe". The value should clearly describe what kind of dish it is, not when or how it is served.
Do not include any other text or explanation. 
Do not include any markdown formatting. 
Do not include any code blocks. 
Do not include any extra information. 
Do not include any additional keys or values. 
Do not include any comments. 
Do not include any whitespace or newlines outside of the JSON object. 
Do not include any other text or explanation. Just respond with the JSON object.
`;

const CLAUDE_MODEL = "claude-3-haiku-20240307";
const API_KEY = import.meta.env.VITE_ANTHROPIC_API_KEY;

const anthropic = new Anthropic({
  apiKey: API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function getRecipeFromChefClaude(ingredients: string[]) {
  const ingredientsString = ingredients.join(", ");

  try {
    const message = await anthropic.messages.create({
      model: CLAUDE_MODEL,
      max_tokens: 1024,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
            },
          ],
        },
      ],
    });

    const recipeRawResponse = message.content
      .filter((block: any) => block.type === "text")
      .map((block: any) => block.text)
      .join("");

    const recipe: Recipe = JSON.parse(recipeRawResponse);
    return recipe;
  } catch (error) {
    console.error("Error fetching recipe from claude", error);
    throw new Error("Failed to fetch recipe from Claude.");
  }
}
