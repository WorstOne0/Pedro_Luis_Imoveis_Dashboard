"use client";

// Next
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
// Icons

export default function NavBar() {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();

  const [isNavOpen, setIsNavOpen] = useState(true);

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

  const handleNavBarSize = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      animate(scope.current, { width: "5rem" });

      return;
    }

    if (!isNavOpen) {
      setIsNavOpen(true);
      animate(scope.current, { width: "18rem" });
      return;
    }
  };

  return (
    <motion.nav ref={scope} initial={{ width: "18rem" }} className="h-full bg-primary flex flex-col" onClick={handleNavBarSize}>
      <span className="text-white">{isNavOpen ? "Open" : "Abrir"}</span>
    </motion.nav>
  );
}
