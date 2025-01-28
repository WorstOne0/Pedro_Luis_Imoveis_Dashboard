// Store
import { useSearchStore } from "@/store";

export default function SearchModal() {
  const { isModalOpen, setModal } = useSearchStore((state) => state);

  if (!isModalOpen) return <></>;

  return (
    <div className="absolute top-0 left-0 h-full w-full bg-gray-500/[0.5] backdrop-blur-sm z-[100]" onClick={() => setModal(false)}>
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-[65rem] w-[75rem] bg-primary rounded-[0.8rem]" onClick={(e) => e.stopPropagation()}></div>
      </div>
    </div>
  );
}
