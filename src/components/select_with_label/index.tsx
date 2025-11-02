"use client";

import { useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

// Next

interface SelectWithLabelProps {
  value?: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

export default function SelectWithLabel({ value, name, label, placeholder = "", className, startIcon, endIcon, ...props }: SelectWithLabelProps) {
  const { control, setFocus } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
              <SelectTrigger className={className}>
                <SelectValue placeholder={label} className="text-[1.6rem]" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="apartment" className="text-[1.4rem]">
                    Apartamento
                  </SelectItem>
                  <SelectItem value="banana" className="text-[1.4rem]">
                    Banana
                  </SelectItem>
                  <SelectItem value="blueberry" className="text-[1.4rem]">
                    Blueberry
                  </SelectItem>
                  <SelectItem value="grapes" className="text-[1.4rem]">
                    Grapes
                  </SelectItem>
                  <SelectItem value="pineapple" className="text-[1.4rem]">
                    Pineapple
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage className="text-[1.4rem] px-[1rem]" />
        </FormItem>
      )}
    />
  );
}
