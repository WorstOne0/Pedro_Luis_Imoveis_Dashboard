"use client";

// Next
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Components
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from "@/components";

const FormSchema = z.object({
  email: z.string().min(2, {
    message: "",
  }),
  password: z.string().min(2, {
    message: "",
  }),
});

export default function Login() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: z.infer<typeof FormSchema>) => {};

  return (
    <div className="h-full w-full flex">
      {/* Left */}
      <div className="h-full w-1/2 p-[1rem]">
        <div className="h-full w-full bg-primary rounded-[0.8rem]"></div>
      </div>
      {/* Right */}
      <div className="h-full w-1/2 flex flex-col justify-center items-center">
        {/* Logo */}
        <div className="flex flex-col justify-center items-center">
          <div className="h-[7rem] w-[7rem] bg-red-500 rounded-[0.8rem] mb-[2rem]"></div>
          <span className="font-bold text-[2.2rem]">Welcome Back to the App</span>
          <span className="italic text-gray-500 text-[1.6rem]">Enter your username and password to continue</span>
        </div>
        {/* Login */}
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="shadcn" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        {/* Singup */}
        <div></div>
      </div>
    </div>
  );
}
