/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import { filesize } from "filesize";
//
import imgAccept from "@/../public/test/kawaii-kawaiianime-anime-girl-animegirl-animekawaii-menhera-chan-ok-1156328445749rjgc7qz0-removebg-preview.png";
import imgReject from "@/../public/test/unnamed-removebg-preview.png";
//
import { AiOutlineCloudUpload, AiOutlineDelete } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

type DropzoneProps = {
  files: any[];
  setFiles: any;
  multiple?: boolean;
  text?: string;
  accept?: string;
};

export default function Dropzone({
  files,
  setFiles,
  multiple = false,
  text = "Arraste e solte seu arquivo aqui para carregar",
  accept = "image/*",
}: DropzoneProps) {
  const id = React.useId();

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length == 0) return;

      setFiles([
        ...files,
        ...acceptedFiles.map((file) => ({
          file,
          size: filesize(file.size),
          preview: URL.createObjectURL(file),
        })),
      ]);
    },
    [setFiles, files]
  );

  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    accept: { "image/*": [], "video/*": [] },
    multiple,
  });

  const removeFile = (file: any, index: number) => {
    if (!multiple) return setFiles([]);

    const newFiles = [...files];
    newFiles.splice(index, 1);
    setFiles(newFiles);
  };

  if (files.length > 0 && !multiple) {
    return (
      <div className="h-full w-full flex relative p-2 bg-gray-100">
        <div
          className="h-full w-full bg-cover bg-no-repeat bg-center relative rounded-[0.8rem]"
          style={{ backgroundImage: `url(${files[0].preview})` }}
        />

        <div
          className="flex items-center bg-red-800 px-[1.5rem] py-[0.5rem] rounded-[0.8rem] gap-[0.8rem] absolute top-[1rem] right-[1rem] select-none cursor-pointer"
          onClick={() => removeFile(null, 0)}
        >
          <AiOutlineDelete color="white" size={16} />
          <span className="text-white text-[1.2rem]">Remover</span>
        </div>
      </div>
    );
  }

  if (files.length > 0 && multiple) {
    return (
      <div className="h-full w-full flex flex-col p-2">
        <div className="min-h-0 grow w-full grid grid-cols-6 auto-rows-[10rem] gap-3 overflow-y-auto bg-gray-100 rounded-[0.8rem]">
          {files.map((file, index) => (
            <div
              key={`file_${index}`}
              className="bg-cover bg-no-repeat bg-center relative rounded-[0.8rem] cursor-pointer"
              style={{ backgroundImage: `url(${file.preview})` }}
              onClick={() => {}}
            >
              <div
                className="flex items-center bg-red-800 px-[0.5rem] py-[0.5rem] rounded-[0.8rem] absolute top-[0.3rem] right-[0.3rem] select-none cursor-pointer"
                onClick={() => removeFile(file, index)}
              >
                <AiOutlineDelete color="white" size={16} />
              </div>
            </div>
          ))}
        </div>

        <div className="min-h-[7rem] h-[7rem] w-full mt-[1rem]">
          <div className="h-full w-full" {...getRootProps({})}>
            <input {...getInputProps()} style={{ display: "none" }} type="file" />

            <div
              className={`h-full w-full flex flex-col items-center justify-center border-dashed border-2 rounded-[0.8rem] ${
                isDragAccept ? "border-green-500" : isDragReject ? "border-red-500" : "border-primary"
              }`}
            >
              <div className="h-full w-full flex items-center justify-center gap-[1rem]">
                <AiOutlineCloudUpload className="Icon" size={28} />
                <span>Arraste e solte seus arquivos aqui</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
