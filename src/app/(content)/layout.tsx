"use client";

// Components
import { Breadcrumb, Input, NavBar } from "@/components";
// Services
import { MapProvider } from "@/services";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`h-full w-full flex`}>
      <NavBar />
      <div className="h-full min-w-0 grow flex flex-col">
        <div className="h-[4rem] w-full flex">
          <div className="min-w-0 grow">
            <Breadcrumb />
          </div>

          <div className="h-full w-[25rem] flex items-center px-[1rem]">
            <Input className="h-[70%] w-full md:text-[1.4rem]" placeholder="Pesquisar" />
          </div>
        </div>

        <div className="min-h-0 min-w-0 grow">
          <MapProvider>{children}</MapProvider>
        </div>
      </div>
    </body>
  );
}
