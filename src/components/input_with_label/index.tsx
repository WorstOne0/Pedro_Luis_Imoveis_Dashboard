"use client";

// Next
import { useFormContext } from "react-hook-form";
// Components
import { FormControl, FormField, FormItem, FormMessage, Input } from "@/components";

interface InputWithLabelProps {
  name: string;
  label: string;
  type?: string;
}

export default function InputWithLabel({ name, label, type = "text", ...props }: InputWithLabelProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {/*https://flowbite.com/docs/forms/floating-label/*/}
            <div className="relative">
              <Input
                id={name}
                className="md:text-[1.8rem] block px-[1.5rem] py-[1rem] border-[0.1rem] border-blue-600 rounded-[0.8rem]  block w-full text-sm text-gray-900 bg-transparent border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                type={type}
                placeholder=""
                {...field}
                {...props}
              />
              <label
                htmlFor={name}
                className="ml-[1rem]  absolute text-[1.6rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-[1.7rem] scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.7rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                {label}
              </label>
            </div>
          </FormControl>
          <FormMessage className="text-[1.4rem] px-[1rem]" />
        </FormItem>
      )}
    />
  );
}
