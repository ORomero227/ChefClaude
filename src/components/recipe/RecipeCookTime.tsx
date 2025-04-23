import { Clock, Users } from "lucide-react";

type Props = {
  prepTime: string;
  cookTime: string;
  servings: number;
};

export default function (props: Props) {
  const { prepTime, cookTime, servings } = props;

  return (
    <div className="flex gap-4 mt-4">
      <div className="flex items-center gap-1 text-sm">
        <Clock className="size-4" />
        <span>
          {prepTime} prep | {cookTime} cook
        </span>
      </div>
      <div className="flex items-center gap-1 text-sm">
        <Users className="size-4" />
        <span>{servings} servings</span>
      </div>
    </div>
  );
}
