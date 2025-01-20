"use client";

// Components
import { NavBar } from "@/components";
// Services
import { MapProvider } from "@/services";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className={`h-full w-full flex`}>
      {/* <NavBar /> */}
      <div className="h-full min-w-0 grow">
        <MapProvider>{children}</MapProvider>
      </div>
    </body>
  );
}
