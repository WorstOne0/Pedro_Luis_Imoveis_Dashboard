/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/* eslint-disable @next/next/no-img-element */
"use client";

// Store
import { RealEstate } from "@/store/useRealEstateStore";
import { useRealEstateStore } from "@/store";
// Components
import { Card } from "@/components/ui/card";
// Icons
import { FaBed, FaBath } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiGarage } from "react-icons/pi";
import { GiExpand } from "react-icons/gi";

export default function RealEstateCard({ realEstate, onClickCallback }: { realEstate: RealEstate; onClickCallback?: Function }) {
  const { setRealEstateSelected } = useRealEstateStore((state) => state);

  const handleCardClick = () => {
    if (onClickCallback) onClickCallback();
    setRealEstateSelected(realEstate);
  };

  return (
    <Card className={`pb-3 flex flex-col select-none cursor-pointer rounded-[0.8rem] mt-4 relative`} onClick={handleCardClick}>
      {/* Imagem */}
      <div className={`h-[22rem] w-full rounded-[0.8rem] relative`}>
        <img className={`h-[100%] w-[100%] rounded-[0.8rem] object-cover object-center`} src={realEstate.thumbnail} alt="" />
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
