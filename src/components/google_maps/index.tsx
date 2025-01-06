"use client";

// Next
import { useCallback } from "react";
import { GoogleMap } from "@react-google-maps/api";

interface GoogleMapsProps {
  children?: React.ReactNode;
  setMap?: Function;
  height?: string;
  width?: string;
}

export default function GoogleMaps({ children, setMap = () => {}, height = "100%", width = "100%" }: GoogleMapsProps) {
  const defaultMapZoom = 13;
  const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: "auto",
    mapTypeId: "hybrid",
  };

  const onLoad = useCallback(
    (map: google.maps.Map) => {
      map.moveCamera({
        center: {
          lat: -24.960731,
          lng: -53.519697,
        },
      });

      setMap(map);
    },
    [setMap]
  );

  return (
    <div className="h-full w-full relative">
      <GoogleMap onLoad={onLoad} mapContainerStyle={{ height, width }} zoom={defaultMapZoom} options={defaultMapOptions}>
        {children}
      </GoogleMap>

      <div className="h-[5rem] w-[5rem] bg-blue-500 absolute top-[1rem] right-[1rem]"></div>
    </div>
  );
}
