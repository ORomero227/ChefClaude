import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page`;

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

    const recipeMarkdown = message.content
      .filter((block: any) => block.type === "text")
      .map((block: any) => block.text)
      .join("\n");

    return recipeMarkdown;
  } catch (error) {
    console.error("Error fetching recipe from claude", error);
    throw error;
  }
}
