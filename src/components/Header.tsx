import Navbar from "@/components/navbar/Navbar";
import { Home, LayoutDashboard, ChefHat } from "lucide-react";

const links = [
  { to: "/", name: "Home", Icon: Home },
  { to: "/dashboard", name: "Dashboard", Icon: LayoutDashboard },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full px-6 backdrop-blur-md bg-white/80 border-b border-gray-100">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-1 font-bold text-xl text-gray-800">
          <ChefHat />
          <span className="hidden sm:inline-block">
            Chef<span className="text-[#22c55e]">Claude</span>
          </span>
        </div>
        <Navbar links={links} />
      </div>
    </header>
  );
}

export default Header;
