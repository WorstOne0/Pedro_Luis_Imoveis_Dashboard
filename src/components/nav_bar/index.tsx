"use client";

// Next
import { use, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, useAnimate } from "framer-motion";
//
import { Card } from "@/components";
// Icons
import { MdSpaceDashboard, MdApartment, MdAnalytics, MdNotifications, MdOutlineSettings } from "react-icons/md";
import { FiLogOut, FiSidebar } from "react-icons/fi";

import logo from "@/../public/logo/logo.png";
import textLogo from "@/../public/logo/text_logo.png";

export default function NavBar() {
  const pathname = usePathname();
  const [scope, animate] = useAnimate();

  const [isNavOpen, setIsNavOpen] = useState(true);

  const buttons = [
    { value: "/dashboard", name: "Dashboard", icon: (props: any) => <MdSpaceDashboard {...props} /> },
    { value: "/real_estate", name: "Imóveis", icon: (props: any) => <MdApartment {...props} /> },
    { value: "/analytics", name: "Análises", icon: (props: any) => <MdAnalytics {...props} /> },
    { value: "/notifications", name: "Notificações", icon: (props: any) => <MdNotifications {...props} /> },
    { value: "/settings", name: "Configurações", icon: (props: any) => <MdOutlineSettings {...props} /> },
  ];

  const createButton = ({ route, index }: { route: any; index: number }) => {
    return (
      <Card key={`nav_button_${index}`} className="w-full mb-[1rem] last:mb-0" onClick={(e) => e.stopPropagation()}>
        <Link
          href={route.value}
          className={`w-full flex justify-start items-center gap-3 p-4 cursor-pointer select-none ${
            pathname === route.value ? "text-primary dark:text-white " : "text-gray-400 dark:text-gray-400"
          }`}
        >
          {route.icon({ size: 20 })}
          {isNavOpen && <span className="text-[1.4rem] font-bold">{route.name}</span>}
        </Link>
      </Card>
    );
  };

  const handleNavBarSize = () => {
    if (isNavOpen) {
      setIsNavOpen(false);
      animate(scope.current, { width: "6.5rem" });

      return;
    }

    if (!isNavOpen) {
      setIsNavOpen(true);
      animate(scope.current, { width: "22rem" });
      return;
    }
  };

  return (
    <motion.nav
      ref={scope}
      initial={{ width: "22rem" }}
      className="h-full flex flex-col bg-gray-100 border-r border-gray-300 px-[1rem] py-[1rem]"
      onClick={handleNavBarSize}
    >
      {/* Logo */}
      <div className="h-[10rem] w-full flex items-start justify-center">
        <div className="w-full flex justify-between items-center">
          <img className="h-[4.5rem] w-[4.5rem] " src={logo.src} alt="" />
          <img className="min-w-0 grow" src={textLogo.src} alt="" />
        </div>
      </div>
      {/* Buttons */}
      <div className="min-h-0 grow w-full flex flex-col items-center justify-center">
        {buttons.map((route, index) => createButton({ route, index }))}
      </div>
      {/* Footer */}
      <div className="h-[10rem] flex items-end pb-[1rem]">
        <div className={`w-full flex items-center ${isNavOpen ? "flex-row-reverse" : "flex-col justify-center"}`}>
          <FiLogOut size={22} className={`cursor-pointer ${isNavOpen ? "" : "mb-[1.5rem]"}`} />

          {isNavOpen && (
            <div className="min-w-0 grow ml-[1rem] flex flex-col">
              <span className="text-[1.6rem] font-bold">Lucca G.</span>
              <span className="text-[1.2rem]">_divideByZero</span>
            </div>
          )}
          <img className="w-[4.3rem] h-[4.3rem] rounded-full" src="https://avatars.githubusercontent.com/u/31835808?v=4" alt="" />
        </div>
      </div>
    </motion.nav>
  );
}
