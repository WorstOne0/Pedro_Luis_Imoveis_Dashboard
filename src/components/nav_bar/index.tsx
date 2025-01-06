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

  return (
    <nav className="min-h-[6.2rem] w-full bg-background flex justify-center items-center px-[4rem] border-b-2 border-gray-200">
      {/* Logo */}
      <div className="h-full w-[20rem] bg-red-500"></div>

      <div className="h-full min-w-0 grow flex items-center justify-end px-[5rem]">
        {/* Links */}
        <div className="flex items-center mr-[5rem]">{buttons.map((route, index) => createButton({ route, index }))}</div>
        <div className="h-[4rem] border-l-2 border-grey-300 mr-[5rem]"></div>
        {/* Buttons */}
        <div className="h-full flex items-center">
          <MdOutlineDarkMode className="mr-[2rem]" size={26} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
          <FaRegBookmark size={20} />
        </div>
      </div>
    </nav>
  );
}
