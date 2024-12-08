# Chef Claude 🧑🏻‍🍳

**Chef Claude** is an interactive web application built with **React** and styled using **Tailwind CSS**, featuring integration with the **Claude AI API** to generate recipes based on user-provided ingredients.

## 🌟 Features

- Input at least 4 ingredients, and the AI suggests a recipe that includes those ingredients and optional additions.
- Recipes are formatted in **Markdown** for easy readability on the web.
- **Skeleton Loader** displays during API processing to enhance the user experience.
- Clean and responsive UI design for seamless usability.

## 🛠️ Built With

- **React**: For a dynamic and component-based user interface.
- **Tailwind CSS**: Ensures a modern, responsive design.
- **Claude AI API**: Powers recipe generation with AI intelligence.
- **Vite**: Streamlines the development and build processes.

## 📦 Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/ORomero227/ChefClaude.git
   cd claude-ai-recipe-generator
   ```

2. Install Dependencies

```bash
npm install
```

3. Configure the .env file with your Anthropic API Key

```bash
VITE_ANTHROPIC_API_KEY=your_api_key
```

4. Start the development server

```bash
npm run dev
```

## 💻 Usage

1. Add at least four ingredients to the input list.
2. Click the **Get Recipe** button.
3. The AI, powered by Claude AI, will generate a recipe based on the provided ingredients.
4. The recipe will include:
   - Ingredients List
   - Instructions.
