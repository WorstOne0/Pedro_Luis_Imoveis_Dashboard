"use client";

// Next
import { usePathname } from "next/navigation";
//
import { IoArrowBack } from "react-icons/io5";
import { MdOutlineKeyboardArrowRight, MdSpaceDashboard, MdApartment, MdAnalytics, MdNotifications, MdOutlineSettings } from "react-icons/md";
import { IoAdd } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaIdCard } from "react-icons/fa6";
import { JSX } from "react";

type RouteNames = {
  name: string;
  route: string;
  icon: (props: any) => JSX.Element;
};

const routesNames = [
  { name: "Dashboard", route: "dashboard", icon: (props: any) => <MdSpaceDashboard {...props} /> },
  { name: "Imóveis", route: "real_estate", icon: (props: any) => <MdApartment {...props} /> },
  { name: "Análises", route: "analytics", icon: (props: any) => <MdAnalytics {...props} /> },
  { name: "Notificações", route: "notifications", icon: (props: any) => <MdNotifications {...props} /> },
  { name: "Configurações", route: "settings", icon: (props: any) => <MdOutlineSettings {...props} /> },
  //
  { name: "Adicionar", route: "add", icon: (props: any) => <IoAdd {...props} /> },
  { name: "Editar", route: "edit", icon: (props: any) => <FaEdit {...props} /> },
] as RouteNames[];

export default function Breadcrumb() {
  const pathName = usePathname();

  const routes = pathName.split("/").filter((route) => route !== "");

  const buildBreadcrumb = ({ route }: { route: string }) => {
    const isCurrentRoute = route === pathName;
    const routeIcon = routesNames.find((r) => r.route === route)?.icon || ((props: any) => (<FaIdCard {...props} />) as any);

    return (
      <div className="flex items-center select-none">
        {routeIcon({ size: 16, color: isCurrentRoute ? "black" : "grey" })}
        <span className={`ml-[1rem] text-[1.4rem] ${isCurrentRoute ? "text-black" : "text-gray-500"}	`}>
          {routesNames.find((r) => r.route === route)?.name || route}
        </span>
      </div>
    );
  };

  return (
    <div className="h-full w-full flex items-center">
      {routes.length > 1 && (
        <>
          <div className="h-full w-[5rem] flex items-center justify-center cursor-pointer" onClick={() => history.back()}>
            <IoArrowBack size={18} />
          </div>
          <div className="h-[40%] w-[0.1rem] bg-gray-300"></div>
        </>
      )}

      <div className="h-full min-w-0 grow flex items-center px-[1.5rem]">
        {routes.map((route, index) => {
          return (
            <div key={`breadcrumb_${index}`} className="flex items-center">
              {buildBreadcrumb({ route })}
              {index < routes.length - 1 && <MdOutlineKeyboardArrowRight size={20} color="grey" className="ml-[1rem] mr-[1rem]" />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
