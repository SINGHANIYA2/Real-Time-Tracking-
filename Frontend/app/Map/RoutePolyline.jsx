"use client";

import { Polyline } from "@react-google-maps/api";

export default function RoutePolyline({ path, status }) {
  const colors = {
    onTime: "#22c55e",
    slightDelay: "#3b82f6",
    majorDelay: "#ef4444",
    express: "#a855f7",
  };

  return (
    <Polyline
      path={path}
      options={{
        strokeColor: colors[status],
        strokeOpacity: 0.9,
        strokeWeight: 4,
      }}
    />
  );
}
