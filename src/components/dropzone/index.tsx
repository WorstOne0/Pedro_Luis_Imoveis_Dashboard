import React, { useCallback, useState } from "react";
import Image from "next/image";
import { DropEvent, FileRejection, useDropzone } from "react-dropzone";
import { filesize } from "filesize";

import imgAccept from "@/../public/test/kawaii-kawaiianime-anime-girl-animegirl-animekawaii-menhera-chan-ok-1156328445749rjgc7qz0-removebg-preview.png";
import imgReject from "@/../public/test/unnamed-removebg-preview.png";

import { AiOutlineCloudUpload, AiOutlinePlus } from "react-icons/ai";

type DropzoneProps = {
  uploadedFiles: any[];
  setUploadedFiles: any;
  multiple?: boolean;
  text?: string;
  accept?: string;
};

export default function Dropzone({
  uploadedFiles,
  setUploadedFiles,
  multiple = false,
  text = "Arraste e solte seu arquivo aqui para carregar",
  accept = "image/*",
}: DropzoneProps) {
  const id = React.useId();

  const onDrop = useCallback((acceptedFiles: File[], rejectedFiles: FileRejection[], event: DropEvent) => {
    console.log("acceptedFiles", acceptedFiles, event);
    if (acceptedFiles.length == 0) return;

    setUploadedFiles([
      ...uploadedFiles,
      ...acceptedFiles.map((file) => ({
        file,
        size: filesize(file.size),
        preview: URL.createObjectURL(file),
      })),
    ]);
  }, []);

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [] },
    multiple,
  });

  if (uploadedFiles.length > 0 && !multiple) {
    return <Image src={""} alt="" />;
  }

  return (
    <div className="h-full w-full" {...getRootProps({})}>
      <input {...getInputProps()} style={{ display: "none" }} type="file" />

      <div
        className={`h-full w-full flex flex-col items-center justify-center border-dashed border-2 rounded-[0.8rem] ${
          isDragAccept ? "border-green-500" : isDragReject ? "border-red-500" : "border-primary"
        }`}
      >
        {!isDragActive && (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <AiOutlineCloudUpload className="Icon" size={60} />
            <span className="font-bold text-[2rem]">{text}</span>
            <div className="flex items-center text-[1.4rem]">
              <span className="italic text-gray-600">Tamanho máximo 10MB</span>
              <div className="h-[0.4rem] w-[0.4rem] mx-[1rem] bg-gray-400 rounded-full "></div>
              <span className="italic text-gray-600">Formato suportado PNG, JPEG e MP4</span>
            </div>
            <label
              className="h-[4.5rem] w-[20rem] mt-[2.5rem] flex items-center justify-center bg-primary rounded-[0.8rem] cursor-pointer text-white"
              htmlFor={`fileUpload${id}`}
            >
              Selecionar arquivo
            </label>
          </div>
        )}

        {isDragActive && isDragAccept && (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <Image className="h-[20rem] w-[20rem]" src={imgAccept} alt="" />
            <span className="text-[1.6rem] font-bold mt-[1rem]">Arquivo valído, pode soltar!</span>
          </div>
        )}

        {isDragActive && !isDragAccept && (
          <div className="h-full w-full flex flex-col items-center justify-center">
            <Image className="h-[20rem] w-[20rem]" src={imgReject} alt="" />
            <span className="text-[1.6rem] font-bold mt-[1rem]">Arquivo inválido, selecione outro arquivo</span>
          </div>
        )}
      </div>
    </div>
  );
}
