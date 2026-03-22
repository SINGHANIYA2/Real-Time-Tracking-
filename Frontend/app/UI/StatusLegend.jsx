export default function StatusLegend() {
  return (
    <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow">
      <p className="font-semibold mb-2">Vehicle Status</p>
      <ul className="space-y-1 text-sm">
        <li className="text-green-600">● On Time</li>
        <li className="text-blue-600">● Slight Delay (&lt;5 min)</li>
        <li className="text-red-600">● Major Delay (&gt;10 min)</li>
        <li className="text-purple-600">● Express Route</li>
      </ul>
    </div>
  );
}
