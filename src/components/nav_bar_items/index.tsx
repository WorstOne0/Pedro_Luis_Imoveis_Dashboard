//
import { useHotkeys } from "react-hotkeys-hook";
//
import { useSearchStore } from "@/store";
//
import { Card } from "@/components";
//
import { MdNotifications, MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function NavBarItems() {
  const { setModal, toggleModal } = useSearchStore((state) => state);
  useHotkeys("ctrl+k", () => toggleModal());

  return (
    <div className="h-full w-[25rem] mr-[1rem] flex justify-end items-center px-[1rem] gap-4">
      <Card className="h-[3rem] w-[3rem] flex justify-center items-center cursor-pointer">
        <MdNotifications color="gray" />
      </Card>
      <Card className="h-[3rem] w-[3rem] flex justify-center items-center cursor-pointer">
        <MdOutlineDarkMode color="gray" />
      </Card>

      <Card className="h-[3rem] w-[15rem] flex items-center px-2 select-none cursor-pointer" onClick={() => setModal(true)}>
        <IoIosSearch color="gray" />
        <span className="min-w-0 grow ml-2 text-[1.4rem] text-gray-500">Search</span>
        <span className="text-[1.1rem] text-gray-500">CTRL-K</span>
      </Card>
    </div>
  );
}
