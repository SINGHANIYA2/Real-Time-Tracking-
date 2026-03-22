"use client";

import { Marker } from "@react-google-maps/api";

export default function VehicleMarker({ lat, lng, status }) {
  const colors = {
    onTime: "#22c55e",
    slightDelay: "#3b82f6",
    majorDelay: "#ef4444",
    express: "#a855f7",
  };

  return (
    <Marker position={{ lat, lng }}
      icon={{ path: google.maps.SymbolPath.CIRCLE,scale: 8, fillColor: colors[status], fillOpacity: 1,
        strokeWeight: 2, strokeColor: "#fff",
      }}
    />
  );
}
