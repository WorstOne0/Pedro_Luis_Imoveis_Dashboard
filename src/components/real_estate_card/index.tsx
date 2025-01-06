"use client";

// Next
import { useState } from "react";
import { useRouter } from "next/navigation";
// Store
import { RealEstate } from "@/store/real_estate";
import { useRealEstateStore } from "@/store";
// Components
import { Card } from "@/components/ui/card";
// Icons
import { FaBed, FaBath, FaBookmark, FaRegBookmark } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiGarage } from "react-icons/pi";
import { GiExpand } from "react-icons/gi";
import { MdVerified } from "react-icons/md";

export default function RealEstateCard({ realEstate, onClickCallback }: { realEstate: RealEstate; onClickCallback?: Function }) {
  const router = useRouter();

  const { realEstateSelected, setRealEstateSelected } = useRealEstateStore((state) => state);
  const [isFavorited, setIsFavorited] = useState(false);

  const isSelected = realEstateSelected?._id === realEstate._id;

  const handleCardClick = () => {
    if (onClickCallback) onClickCallback();

    if (realEstateSelected?._id === realEstate._id) {
      return router.push(`/real_estate/${realEstate._id}`);
    }

    setRealEstateSelected(realEstate);
  };

  const handleFavoriteClick = (event: any) => {
    event.stopPropagation();
    setIsFavorited(!isFavorited);
  };

  return (
    <Card className={`pb-3 flex flex-col select-none cursor-pointer rounded-[0.8rem] mt-4 relative`} onClick={handleCardClick}>
      {/* Selected */}
      {isSelected && (
        <div
          className="absolute top-0 left-0 h-[4rem] w-[4rem] bg-primary z-10"
          style={{ clipPath: "polygon(0 0,100% 0,0 100%)", borderTopLeftRadius: "0.8rem" }}
        >
          <MdVerified size={18} color="white" className="ml-1 mt-1" />
        </div>
      )}

      {/* Imagem */}
      <div
        className={`h-[19rem] w-full rounded-[0.8rem] bg-cover bg-no-repeat bg-center relative`}
        style={{ backgroundImage: `url(${realEstate.thumbnail})` }}
      >
        <div className="absolute bottom-4 right-4" onClick={handleFavoriteClick}>
          {isFavorited ? <FaBookmark color="red" /> : <FaRegBookmark color="red" />}
        </div>
      </div>
      <div className="grow px-5 pt-3 pb-2 bg-white">
        {/* Title */}
        <div className="flex justify-between items-center">
          <span className="text-[2.6rem] font-extrabold">R$ {realEstate.price.toLocaleString()}</span>
          <span className="text-[1.4rem] italic text-gray-600">{realEstate.type}</span>
        </div>
        {/* Body */}
        <div className="flex justify-between text-[1.6rem]">
          <div className="flex items-center">
            <FaBed size={16} color="text-foreground" className="mr-2" />
            <span className="font-bold text-[1.6rem] mr-1 ">{realEstate.rooms}</span>
            <span className="">quartos</span>
          </div>
          <div className="flex items-center">
            <FaBath size={16} color="text-foreground" className="mr-2" />
            <span className="font-bold text-[1.6rem] mr-1">{realEstate.bathrooms}</span>
            <span className="">banheiros</span>
          </div>
          <div className="flex items-center">
            <PiGarage size={16} color="text-foreground" className="mr-2" />
            <span className="font-bold text-[1.6rem] mr-1">{realEstate.garages}</span>
            <span>garagem</span>
          </div>
          <div className="flex items-center">
            <GiExpand size={16} color="text-foreground" className="mr-2" />
            <span className="font-bold text-[1.6rem] mr-1">{realEstate.area}</span>
            <span>
              m<sup>2</sup>
            </span>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center select-text mt-4">
          <FaLocationDot size={14} color="red" className="mr-2" />
          <span className="text-[1.4rem] italic leading-6">Rua Travessa Pio XII, 34, Cancelli, Cascavel, PR</span>
        </div>
      </div>
    </Card>
  );
}
