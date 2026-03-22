"use client";

import ArrivalCard from "./ArrivalCard";

export default function UpcomingArrivals() {
  return (
    <div className="space-y-4 ">
      <ArrivalCard
        route="42A"
        from="Central"
        to="Downtown"
        time="3 min"
        status="On Time"
        color="green"
        confidence="95%"
        crowd="Medium"
      />

      <ArrivalCard
        route="15B"
        from="Harbor"
        to="University"
        time="8 min"
        status="Slight Delay"
        color="blue"
        confidence="87%"
        crowd="Low"
      />

      <ArrivalCard
        route="7C"
        from="Airport"
        to="Center"
        time="15 min"
        status="Delayed"
        color="red"
        crowd="High"
      />
    </div>
  );
}
