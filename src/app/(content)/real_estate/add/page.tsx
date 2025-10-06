"use client";

// Next
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Services
import { withAuth, withHydration } from "@/services";
import { Card, Form, InputWithLabel, Dropzone } from "@/components";
//
import { MdOutlineDescription, MdOutlineApartment, MdExposurePlus1, MdExposureNeg1 } from "react-icons/md";
import { FaBed, FaBath } from "react-icons/fa";
import { FaLocationDot, FaDollarSign } from "react-icons/fa6";
import { PiGarage } from "react-icons/pi";
import { GiExpand } from "react-icons/gi";
import { useRef, useState } from "react";

const FormSchema = z.object({
  description: z.string(),
  type: z.string(),
  //
  price: z.string(),
  area: z.string(),
  rooms: z.string(),
  bathrooms: z.string(),
  garages: z.string(),
  //
  cep: z.string(),
  street: z.string(),
  district: z.string(),
  city: z.string(),
  state: z.string(),
  complement: z.string(),
  number: z.string(),
});

// export default withAuth(Add, "all");
export default function Add() {
  const ref = useRef<HTMLDivElement>(null);

  const [images, setImages] = useState([]);
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      description: "",
      type: "",
      //
      price: "",
      area: "",
      rooms: "",
      bathrooms: "",
      garages: "",
      //
      cep: "",
      street: "",
      district: "",
      city: "",
      state: "",
      complement: "",
      number: "",
    },
  });

  return (
    <div className="h-full w-full flex">
      <Form {...form}>
        <form
          className="h-[calc(100%-1.5rem)] min-w-0 grow flex flex-col overflow-y-auto scrollbar p-[1.5rem] mt-[1.5rem]"
          onSubmit={form.handleSubmit(() => {})}
        >
          {/* Thumbnail */}
          <div className="min-h-[30rem] h-[30rem] w-full bg-blue-200"></div>

          {/* Details */}
          <div className="w-full flex flex-col mt-[2rem]">
            {/* Title */}
            <div className="w-full flex justify-between px-[1rem]">
              <span className="text-[2.4rem] font-bold">Detalhes</span>
              <span></span>
            </div>

            {/* Fields */}
            <InputWithLabel name="description" label="Descrição" className="h-[15rem] w-full mt-[1rem]" startIcon={<MdOutlineDescription />} />
            <div className="w-full grid grid-cols-2 gap-[1rem] mt-[1rem]">
              <InputWithLabel name="type" label="Tipo" className="h-[5rem] w-full" startIcon={<MdOutlineApartment />} />
              <InputWithLabel name="price" label="Preço" type="number" className="h-[5rem] w-full" startIcon={<FaDollarSign />} />
              <InputWithLabel name="area" label="Area" type="number" className="h-[5rem] w-full" startIcon={<GiExpand />} />
              <div className="w-full flex gap-[1rem]">
                <div className="h-[5rem] min-w-0 grow">
                  <InputWithLabel name="rooms" label="Quartos" type="number" className="h-[5rem] w-full" startIcon={<FaBed />} />
                </div>
                <div className="h-[5rem] flex gap-[1rem] select-none">
                  <Card className="h-full min-w-[8rem] w-[8rem] flex justify-center items-center cursor-pointer">
                    <MdExposureNeg1 size={20} />
                  </Card>
                  <Card className="h-full min-w-[8rem] w-[8rem] flex justify-center items-center cursor-pointer">
                    <MdExposurePlus1 size={20} />
                  </Card>
                </div>
              </div>
              <div className="w-full flex gap-[1rem]">
                <div className="h-[5rem] min-w-0 grow">
                  <InputWithLabel name="bathrooms" label="Banheiros" type="number" className="h-[5rem] w-full" startIcon={<FaBath />} />
                </div>
                <div className="h-[5rem] flex gap-[1rem] select-none">
                  <Card className="h-full min-w-[8rem] w-[8rem] flex justify-center items-center cursor-pointer">
                    <MdExposureNeg1 size={20} />
                  </Card>
                  <Card className="h-full min-w-[8rem] w-[8rem] flex justify-center items-center cursor-pointer">
                    <MdExposurePlus1 size={20} />
                  </Card>
                </div>
              </div>
              <div className="w-full flex gap-[1rem]">
                <div className="h-[5rem] min-w-0 grow">
                  <InputWithLabel name="garages" label="Garagens" type="number" className="h-[5rem] w-full" startIcon={<PiGarage />} />
                </div>
                <div className="h-[5rem] flex gap-[1rem] select-none">
                  <Card className="h-full min-w-[8rem] w-[8rem] flex justify-center items-center cursor-pointer">
                    <MdExposureNeg1 size={20} />
                  </Card>
                  <Card className="h-full min-w-[8rem] w-[8rem] flex justify-center items-center cursor-pointer">
                    <MdExposurePlus1 size={20} />
                  </Card>
                </div>
              </div>
            </div>
          </div>

          {/* Address */}
          <div className="w-full flex flex-col mt-[2rem]">
            {/* Title */}
            <div className="w-full flex justify-between px-[1rem]">
              <span className="text-[2.4rem] font-bold">Localização</span>
              <span></span>
            </div>

            {/* Fields */}
            <div className="w-full grid grid-cols-2 gap-[1rem] mt-[1rem]">
              <InputWithLabel name="cep" label="CEP" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
              <InputWithLabel name="street" label="Rua" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
              <InputWithLabel name="district" label="Bairro" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
              <InputWithLabel name="city" label="Cidade" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
              <InputWithLabel name="state" label="Estado" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
              <InputWithLabel name="complement" label="Complemento" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
              <InputWithLabel name="number" label="Numero" className="h-[5rem] w-full" startIcon={<FaLocationDot />} />
            </div>
          </div>

          {/* Images */}
          <div className="w-full flex flex-col mt-[2rem]">
            {/* Title */}
            <div className="w-full flex justify-between px-[1rem]">
              <span className="text-[2.4rem] font-bold">Imagens</span>
              <span></span>
            </div>

            {/* Dropzone */}
            <div className="h-[40rem] w-full mt-[1rem]">
              <Dropzone uploadedFiles={images} setUploadedFiles={setImages} />
            </div>
          </div>

          {/* Map */}
          <div className="w-full flex flex-col mt-[2rem]">
            {/* Title */}
            <div className="w-full flex justify-between px-[1rem]">
              <span className="text-[2.4rem] font-bold">Mapa</span>
              <span></span>
            </div>

            {/* Google Map */}
            <div className="h-[25rem] w-full bg-red-200 mt-[1rem]"></div>
          </div>
        </form>
      </Form>

      {/* Sidebar */}
      <div className="h-[calc(100%-1.5rem)] min-w-[45rem] w-[45rem] flex flex-col justify-between bg-gray-200 p-[1.5rem] mt-[1.5rem]">
        {/* Preview */}
        <div className="h-[25rem] w-full bg-red-200"></div>

        <div className="h-[6rem] w-full bg-primary rounded-[0.8rem] flex justify-center items-center">
          <span className="text-[2.4rem] text-white font-bold">Salvar</span>
        </div>
      </div>
    </div>
  );
}
