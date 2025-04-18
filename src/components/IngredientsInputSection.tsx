export default function IngredientsInputSection() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xs">
      <h2 className="text-xl font-semibold text-black">Ingredients on hand</h2>
      <span className="text-sm text-gray-600">
        Enter the ingredients you have on hand, and Chef Claude will suggest a
        recipe for you. For best results, add at least 3 ingredients.
      </span>
      <div className="space-y-4">
        <div className="flex gap-2"></div>
      </div>
    </div>
  );
}
