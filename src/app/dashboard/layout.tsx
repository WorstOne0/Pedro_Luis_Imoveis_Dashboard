"use client";

// Components
import { Breadcrumb, NavBar } from "@/components";
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
        <div className="h-[5rem]">
          <Breadcrumb />
        </div>

        <div className="min-h-0 min-w-0 grow">
          <MapProvider>{children}</MapProvider>
        </div>
      </div>
    </body>
  );
}
