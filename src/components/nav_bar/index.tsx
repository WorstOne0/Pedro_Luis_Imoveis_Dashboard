"use client";

// Next
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useTheme } from "next-themes";
// Icons
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";

export default function NavBar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const buttons = [
    { value: "/", name: "Home" },
    { value: "/about", name: "Sobre" },
    { value: "/contact", name: "Contato" },
  ];

  const createButton = ({ route, index }: { route: any; index: number }) => {
    return (
      <div key={`nav_button_${index}`} className="mr-[4rem] last:mr-0">
        <Link
          href={route.value}
          className={`px-3 cursor-pointer select-none font-bold ${
            pathname === route.value ? "text-primary dark:text-white " : "text-gray-500 dark:text-gray-400"
          }`}
        >
          {route.name}
        </Link>
      </div>
    );
  };

  return <nav className="h-full min-w-[6.2rem] w-[6.2rem] bg-primary flex flex-col"></nav>;
}
