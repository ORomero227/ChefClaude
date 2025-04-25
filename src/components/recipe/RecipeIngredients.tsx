export default function RecipeIngredients({
  ingredients,
}: {
  ingredients: string[];
}) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h4 className="font-semibold text-lg text-gray-800 border-b border-gray-200 pb-3 mb-4">
        Ingredients
      </h4>
      <ul className="space-y-2 text-gray-600">
        {ingredients.map((ingredient, index) => (
          <li key={index} className="flex items-start">
            <span className="text-[#22c55e] mr-2 font-bold">•</span>
            {ingredient.charAt(0).toUpperCase() +
              ingredient.slice(1).toLowerCase()}
          </li>
        ))}
      </ul>
    </div>
  );
}
