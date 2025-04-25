import Anthropic from "@anthropic-ai/sdk";

const SYSTEM_PROMPT = `You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include more than 3 extra ingredients. You may freely use common pantry items (such as salt, pepper, oil, butter, water) without counting them as additional ingredients. Ignore any irrelevant or non-ingredient text provided in the list. Only base your recipe on recognizable food ingredients. Respond in the same language that the user uses to provide the list of ingredients. Please respond in strict JSON format with the following keys:

  title: string;
  description: string;
  cookTime: string;
  ingredients: string[]; // Each ingredient should include quantity and unit (e.g., "2 cups of flour", "1 tsp salt")
  instructions: string[];
  servings: number;

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

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { ingredients } = req.body;

  try {
    const message = await anthropic.messages.create({
      model: "claude-3-haiku-20240307",
      max_tokens: 1024,
      temperature: 0,
      system: SYSTEM_PROMPT,
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: `I have ${ingredients.join(
                ", "
              )}. Please give me a recipe you'd recommend I make!`,
            },
          ],
        },
      ],
    });

    const recipeRawResponse = message.content
      .filter((block: any) => block.type === "text")
      .map((block: any) => block.text)
      .join("");

    const recipe = JSON.parse(recipeRawResponse);
    res.status(200).json(recipe);
  } catch (error) {
    console.error("Error from Claude API", error);
    res.status(500).json({ error: "Failed to fetch recipe" });
  }
}
