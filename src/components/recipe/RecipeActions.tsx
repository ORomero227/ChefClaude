import RecipeButtonAction from "@/components/recipe/RecipeButtonAction";
import { Bookmark, Share2 } from "lucide-react";

const actions = [
  { icon: <Share2 className="h-4 w-4" /> },
  { icon: <Bookmark className="h-4 w-4" /> },
];

export default function RecipeActions() {
  return (
    <div className="flex gap-2">
      {actions.map((action, index) => (
        <RecipeButtonAction key={index}>{action.icon}</RecipeButtonAction>
      ))}
    </div>
  );
}
