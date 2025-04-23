"use client";

// Next
import { useFormContext } from "react-hook-form";
import { useEffect } from "react";
// Components
import { FormControl, FormField, FormItem, FormMessage, Input } from "@/components";
//
import { cn } from "@/lib/utils";

interface InputWithLabelProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function InputWithLabel({
  name,
  label,
  type = "text",
  placeholder = "",
  className,
  autoFocus = false,
  startIcon,
  endIcon,
  ...props
}: InputWithLabelProps) {
  const { control, setFocus } = useFormContext();

  useEffect(() => {
    if (autoFocus) setFocus(name);
  }, [autoFocus, name, setFocus]);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            {/*https://flowbite.com/docs/forms/floating-label/*/}
            <div className="w-full relative">
              {startIcon && (
                <div className="h-[80%] w-[4rem] ml-[0.4rem] top-[10%] left-0 absolute flex justify-center items-center">{startIcon}</div>
              )}

              <Input
                id={name}
                className={cn(
                  "md:text-[1.8rem] block px-[1.5rem] py-[1rem] border-[0.1rem] border-blue-600 rounded-[0.8rem] block w-full text-sm text-gray-900 bg-transparent border-gray-400 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
                  className
                )}
                type={type}
                placeholder={placeholder}
                hasStartIcon={startIcon ? true : false}
                hasEndIcon={endIcon ? true : false}
                {...field}
                {...props}
              />
              <label
                htmlFor={name}
                className={cn(
                  "ml-[1rem] absolute text-[1.6rem] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-[1.7rem] scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.7rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1",
                  startIcon ? "peer-placeholder-shown:ml-[4rem] peer-focus:ml-[1rem]" : ""
                )}
              >
                {label}
              </label>

              {endIcon && <div className="h-[80%] w-[4rem] mr-[0.4rem] top-[10%] right-0 absolute flex justify-center items-center">{endIcon}</div>}
            </div>
          </FormControl>
          <FormMessage className="text-[1.4rem] px-[1rem]" />
        </FormItem>
      )}
    />
  );
}
