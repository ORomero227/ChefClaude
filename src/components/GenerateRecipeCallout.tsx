import { Button } from "@/components/ui/button";

type Props = {
  onClick: () => void;
};

export default function GenerateRecipeCallout({ onClick }: Props) {
  return (
    <div className="mt-4">
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between rounded-lg bg-[#f0efeb] p-7">
        <div>
          <h3 className="text-lg font-medium font-inter leading-6">
            Ready for a recipe?
          </h3>
          <p className="text-sm leading-5 text-[#6b7280]">
            Generate a recipe from your list of ingredients
          </p>
        </div>
        <Button className="bg-[#22c55e] w-full md:w-auto" onClick={onClick}>
          Generate Recipe
        </Button>
      </div>
    </div>
  );
}
