import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Header() {
  return (
    <header className="py-3 flex items-center bg-[#D17557] text-white justify-between">
      <Link to={"/"}>
        <div className="flex items-center">
          <img src="/src/assets/chef-icon.svg" className="size-8" />
          <h1 className="font-inter font-semibold text-xl">ChefClaude</h1>
        </div>
      </Link>
      <nav className="flex items-center gap-2 px-2">
        <Button variant={"ghost"} className="bg-white text-black">
          <Link to={"/register"}>Register</Link>
        </Button>
        <Button variant={"ghost"} className="bg-white text-black">
          <Link to={"/login"} className="bg-white text-black">
            Login
          </Link>
        </Button>
      </nav>
    </header>
  );
}

export default Header;
