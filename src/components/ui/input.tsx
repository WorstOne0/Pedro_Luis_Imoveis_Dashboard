import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, hasStartIcon, hasEndIcon, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full rounded-md border border-input bg-transparent px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
        hasStartIcon ? "pl-[4.4rem]" : "",
        hasEndIcon ? "pr-[4.4rem]" : ""
      )}
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";
export { Input };
