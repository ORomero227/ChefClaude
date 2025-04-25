import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type NavbarLinkProps = {
  to: string;
  name: string;
  Icon?: React.ElementType;
};

export default function NavbarLink(props: NavbarLinkProps) {
  const { to, name, Icon } = props;

  return (
    <Button variant={"ghost"} className="hover:text-[#22c55e]">
      <Link to={to} className="flex items-center gap-2">
        {Icon && <Icon className="size-5" />}
        <span className="font-semibold">{name}</span>
      </Link>
    </Button>
  );
}
