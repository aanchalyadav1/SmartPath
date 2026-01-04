import React from "react";
import { Navigation, MapPin, Accessibility, ShieldCheck } from "lucide-react";


const MapArea = () => {
  return (
    <div className="flex-1 bg-gray-50 relative overflow-hidden h-full">

      {/* Subtle Grid Background (Map Feel) */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(#64748b 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* IIT Delhi – Context Label */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 bg-white/90 backdrop-blur px-4 py-2 rounded-full shadow text-sm font-semibold text-gray-700">
        IIT Delhi Campus • Accessibility View
      </div>

      {/* Mock Campus Structures */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-36 h-28 bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
          Academic Block
        </div>

        <div className="absolute top-1/3 left-1/2 w-52 h-28 bg-gray-200 rounded-xl border border-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
          Central Library
        </div>

        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-gray-200 rounded-full border border-gray-300 flex items-center justify-center text-xs font-semibold text-gray-600">
          Stadium
        </div>
      </div>

      {/* Accessible Route */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path
          d="M 300 220 Q 460 320 620 260 T 800 420"
          fill="none"
          stroke="#0d9488"
          strokeWidth="7"
          strokeLinecap="round"
          strokeDasharray="14 6"
          className="drop-shadow-md"
        />

        {/* Route Start */}
        <circle cx="300" cy="220" r="8" fill="#0d9488" />

        {/* Route End */}
        <circle cx="800" cy="420" r="8" fill="#ef4444" />
      </svg>

      {/* Route Explanation Card */}
      <div className="absolute top-20 left-6 z-20 bg-white rounded-2xl shadow-lg p-4 w-64">
        <div className="flex items-center gap-2 mb-2">
          <Accessibility className="w-5 h-5 text-teal-600" />
          <h3 className="font-semibold text-gray-900 text-sm">
            Most Accessible Route
          </h3>
        </div>

        <p className="text-xs text-gray-600 leading-relaxed mb-3">
          This route avoids stairs completely and uses elevators and wide
          walkways suitable for wheelchair users.
        </p>

        <div className="flex justify-between text-xs font-medium text-gray-700">
          <span>⏱ 8 min</span>
          <span>🚫 Stairs</span>
          <span>🛗 Elevators</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-teal-700 bg-teal-50 px-3 py-1 rounded-full w-fit">
          <ShieldCheck className="w-4 h-4" />
          Accessibility Score: 98 / 100
        </div>
      </div>

      {/* User Location */}
      <div className="absolute top-[220px] left-[300px] -translate-x-1/2 -translate-y-1/2 z-20">
        <div className="relative">
          <div className="w-14 h-14 bg-teal-500/20 rounded-full animate-ping absolute inset-0" />
          <div className="w-9 h-9 bg-white rounded-full shadow-lg flex items-center justify-center relative z-10">
            <Navigation className="w-5 h-5 text-teal-600 fill-teal-600 rotate-45" />
          </div>
        </div>
        <span className="block mt-1 text-xs font-semibold text-gray-700 text-center">
          You are here
        </span>
      </div>

      {/* Destination Marker */}
      <div className="absolute top-[420px] left-[800px] -translate-x-1/2 -translate-y-full z-20 text-center">
        <MapPin className="w-10 h-10 text-red-500 fill-red-100 drop-shadow" />
        <span className="block text-xs font-semibold text-gray-700 mt-1">
          Library Entrance
        </span>
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-8 right-8 flex flex-col gap-2 z-20">
        <button className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center text-gray-700 hover:bg-gray-50 text-xl font-bold">
          +
        </button>
        <button className="w-10 h-10 bg-white rounded-xl shadow flex items-center justify-center text-gray-700 hover:bg-gray-50 text-xl font-bold">
          −
        </button>
      </div>
    </div>
  );
};

export default MapArea;
