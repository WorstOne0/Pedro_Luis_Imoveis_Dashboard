"use client";

// Components
import { Breadcrumb, NavBar, NavBarItems, SearchModal } from "@/components";
// Services
import { MapProvider } from "@/services";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`h-full w-full flex relative`}>
      <NavBar />
      <div className="h-full min-w-0 grow flex flex-col">
        <div className="h-[4rem] w-full flex mt-[0.8rem]">
          <div className="min-w-0 grow">
            <Breadcrumb />
          </div>

          <NavBarItems />
        </div>

        <div className="min-h-0 min-w-0 grow">
          <MapProvider>{children}</MapProvider>
        </div>
      </div>

      <SearchModal />
    </body>
  );
}
