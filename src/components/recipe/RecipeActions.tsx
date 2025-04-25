import RecipeButtonAction from "@/components/recipe/RecipeButtonAction";
import { Clipboard } from "lucide-react";

const actions = [{ icon: <Clipboard className="size-5" /> }];

export default function RecipeActions() {
  return (
    <div className="flex gap-2">
      {actions.map((action, index) => (
        <RecipeButtonAction key={index}>{action.icon}</RecipeButtonAction>
      ))}
    </div>
  );
}
