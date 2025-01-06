"use client";

// Next
import { ReactNode } from "react";
import { Libraries, useJsApiLoader } from "@react-google-maps/api";

const libraries = ["places", "drawing", "geometry"];

// Define a function component called MapProvider that takes a children prop
export function MapProvider({ children }: { children: ReactNode }) {
  const { isLoaded, loadError } = useJsApiLoader({
    nonce: "random-nonce",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API as string,
    libraries: libraries as Libraries,
  });

  if (loadError) return <p>Encountered error while loading google maps</p>;

  if (!isLoaded) return <p>Map Script is loading ...</p>;

  return children;
}
