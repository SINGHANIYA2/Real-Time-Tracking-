"use client";

import { GoogleMap, LoadScript } from "@react-google-maps/api";
import RoutePolyline from "./RoutePolyline";
import VehicleMarker from "./VehicleMarker";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = { lat: 28.6139, lng: 77.209 };

const routes = [
  {
    id: 1,
    status: "onTime",
    path: [
      { lat: 28.61, lng: 77.20 },
      { lat: 28.62, lng: 77.22 },
      { lat: 28.63, lng: 77.24 },
    ],
  },
];

const vehicles = [
  { id: 1, lat: 28.615, lng: 77.21, status: "onTime" },
  { id: 2, lat: 28.62, lng: 77.23, status: "delayed" },
];

export default function LiveMap() {
  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ""}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={12}
        options={{ disableDefaultUI: true }}
      >
     
        {routes.map((r) => (
          <RoutePolyline
            key={r.id}
            path={r.path}
            status={r.status}
          />
        ))}

 
        {vehicles.map((v) => (
          <VehicleMarker
            key={v.id}
            lat={v.lat}
            lng={v.lng}
            status={v.status}
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
}
