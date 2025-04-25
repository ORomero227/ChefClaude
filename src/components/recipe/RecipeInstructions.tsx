export default function RecipeInstructions({
  instructions,
}: {
  instructions: string[];
}) {
  return (
    <div>
      <h4 className="font-semibold text-lg text-gray-800 border-b border-gray-200 pb-3 mb-4">
        Instructions
      </h4>
      <ol className="space-y-4 text-gray-600">
        {instructions.map((step, index) => (
          <li key={index} className="flex">
            <span className="flex-shrink-0 flex items-center justify-center size-6 rounded-full bg-[#22c55e]/10 text-[#22c55e] font-semibold text-sm mr-3">
              {index + 1}.
            </span>
            <span className="mt-0.5">{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
