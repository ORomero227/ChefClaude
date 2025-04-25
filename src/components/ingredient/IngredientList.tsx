import { Dispatch, SetStateAction } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

type IngredientsListProps = {
  ingredients: string[];
  setIngredients: Dispatch<SetStateAction<string[]>>;
};

export default function IngredientsList(props: IngredientsListProps) {
  const { setIngredients, ingredients } = props;

  return (
    <div className="flex flex-wrap gap-2">
      {ingredients.map((ingredient, index) => (
        <Badge
          key={ingredient}
          variant={"secondary"}
          className="text-sm flex items-center gap-1 pr-1"
        >
          {ingredient}
          <Button
            variant={"ghost"}
            size="icon"
            aria-label={`Remove ${ingredient}`}
            className="w-4 h-4"
            onClick={() =>
              setIngredients((prev) => prev.filter((_, i) => i !== index))
            }
          >
            <X className="w-3 h-3" />
          </Button>
        </Badge>
      ))}
    </div>
  );
}
