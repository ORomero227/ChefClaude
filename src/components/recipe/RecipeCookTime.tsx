import { Clock, Users } from "lucide-react";

type Props = {
  cookTime: string;
  servings: number;
};

export default function (props: Props) {
  const { cookTime, servings } = props;

  return (
    <div className="flex gap-6 mt-6">
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
        <Clock className="size-4 text-[#22c55e]" />
        <span>{cookTime} cook</span>
      </div>
      <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
        <Users className="size-4 text-[#22c55e]" />
        <span>{servings} servings</span>
      </div>
    </div>
  );
}
