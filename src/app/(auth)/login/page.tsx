"use client";

// Next
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// Components
import { Form, InputWithLabel } from "@/components";

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
        <div className="w-[60%] mt-[3rem]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <InputWithLabel name="email" label="Email" />
              <div className="h-[2rem]"></div>
              <InputWithLabel name="password" label="Password" />
            </form>
          </Form>
        </div>
        {/* Singup */}
        <div></div>
      </div>
    </div>
  );
}
