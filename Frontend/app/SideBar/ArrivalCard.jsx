"use client";

const colorMap = {
  green: {
    bg: "bg-green-100",
    text: "text-green-700",
    bar: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-700",
    bar: "bg-blue-500",
  },
  red: {
    bg: "bg-red-100",
    text: "text-red-700",
    bar: "bg-red-500",
  },
};

export default function ArrivalCard({
  route,
  from,
  to,
  time,
  status,
  color,
  confidence,
  crowd,
}) {
  return (
    <div className={`p-4 rounded-xl ${colorMap[color]?.bg}`}>
      <div className="flex justify-between items-center">
        <span className="font-semibold">{route}</span>
        <span
          className={`text-xs px-2 py-1 rounded-full ${colorMap[color]?.text}`}
        >
          {status}
        </span>
      </div>

      <p className="text-sm mt-1">
        {from} → {to}
      </p>

      <p className="text-3xl font-bold mt-2">{time}</p>

      {/* Progress bar */}
      <div className="w-full h-2 bg-white rounded-full mt-2">
        <div
          className={`h-2 rounded-full ${colorMap[color]?.bar}`}
          style={{ width: "70%" }}
        />
      </div>

      <div className="flex justify-between text-xs mt-2">
        {confidence && <span>AI Confidence: {confidence}</span>}
        {crowd && <span>{crowd} crowd</span>}
      </div>
    </div>
  );
}
