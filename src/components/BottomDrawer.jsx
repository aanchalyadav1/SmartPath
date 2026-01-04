import React, { useState } from "react";
import {
  ArrowRight,
  Clock,
  Ruler,
  ThumbsUp,
  MonitorSmartphone,
  Accessibility,
  ShieldCheck,
} from "lucide-react";

const ROUTE_STYLES = {
  teal: {
    border: "border-teal-500",
    bg: "bg-teal-50",
    dot: "bg-teal-500",
    badge: "bg-teal-100 text-teal-700",
  },
  blue: {
    border: "border-blue-500",
    bg: "bg-blue-50",
    dot: "bg-blue-500",
    badge: "bg-blue-100 text-blue-700",
  },
  orange: {
    border: "border-orange-500",
    bg: "bg-orange-50",
    dot: "bg-orange-500",
    badge: "bg-orange-100 text-orange-700",
  },
};

const BottomDrawer = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(0);

  const routes = [
    {
      id: 0,
      time: "8 min",
      dist: "0.3 km",
      access: "98%",
      tag: "Recommended",
      reason: "No stairs, elevators available, wide walkways",
      color: "teal",
    },
    {
      id: 1,
      time: "12 min",
      dist: "0.4 km",
      access: "92%",
      tag: "Less Crowded",
      reason: "Longer but quieter paths",
      color: "blue",
    },
    {
      id: 2,
      time: "6 min",
      dist: "0.25 km",
      access: "40%",
      tag: "Has Stairs",
      reason: "Includes staircases",
      color: "orange",
    },
  ];

  return (
    <div
      className={`fixed bottom-0 left-96 right-0 bg-white z-30 border-t border-gray-200 rounded-t-2xl transition-all duration-300 shadow-[0_-6px_24px_-6px_rgba(0,0,0,0.15)]
      ${expanded ? "h-[26rem]" : "h-24"}`}
    >
      {/* Handle */}
      <div
        onClick={() => setExpanded(!expanded)}
        className="h-8 flex items-center justify-center cursor-pointer hover:bg-gray-50"
      >
        <div className="w-12 h-1.5 bg-gray-300 rounded-full" />
      </div>

      {/* Content */}
      <div className="px-8 pb-6 h-full flex flex-col">
        {/* COLLAPSED HEADER */}
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <div>
              <div className="text-xs text-gray-500 uppercase font-semibold">
                From
              </div>
              <div className="font-medium text-gray-900">
                Current Location
              </div>
            </div>

            <ArrowRight className="w-5 h-5 text-gray-400" />

            <div>
              <div className="text-xs text-gray-500 uppercase font-semibold">
                To
              </div>
              <div className="font-medium text-gray-900">
                Library Entrance
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:block text-right">
              <div className="text-lg font-bold text-teal-700">
                {routes[selectedRoute].time}
              </div>
              <div className="text-xs text-gray-500">
                Most accessible option
              </div>
            </div>

            <button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2.5 rounded-xl font-semibold shadow-lg shadow-teal-200 flex items-center gap-2">
              <MonitorSmartphone className="w-5 h-5" />
              Start Navigation
            </button>
          </div>
        </div>

        {/* ACCESSIBILITY SUMMARY */}
        {expanded && (
          <>
            <div className="mt-3 bg-teal-50 border border-teal-200 rounded-xl p-4 flex items-start gap-3">
              <Accessibility className="w-6 h-6 text-teal-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-teal-800 text-sm">
                  Accessibility Optimized Route
                </h4>
                <p className="text-sm text-teal-700">
                  This route matches your accessibility preferences and avoids
                  barriers such as stairs or narrow paths.
                </p>
              </div>
            </div>

            {/* ROUTE OPTIONS */}
            <div className="mt-4 grid grid-cols-3 gap-4">
              {routes.map((route, idx) => {
                const style = ROUTE_STYLES[route.color];
                const isActive = selectedRoute === idx;

                return (
                  <div
                    key={route.id}
                    onClick={() => setSelectedRoute(idx)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all
                    ${
                      isActive
                        ? `${style.border} ${style.bg}`
                        : "border-gray-200 hover:border-gray-400 bg-white"
                    }`}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-bold ${style.badge}`}
                      >
                        {route.tag}
                      </span>
                      {isActive && (
                        <div
                          className={`w-4 h-4 rounded-full ${style.dot} flex items-center justify-center`}
                        >
                          <div className="w-2 h-2 bg-white rounded-full" />
                        </div>
                      )}
                    </div>

                    <div className="text-2xl font-bold text-gray-900">
                      {route.time}
                    </div>

                    <div className="mt-2 text-sm text-gray-600 flex flex-col gap-1">
                      <span className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" /> {route.dist}
                      </span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4" /> {route.access} score
                      </span>
                    </div>

                    <p className="mt-2 text-xs text-gray-500">
                      {route.reason}
                    </p>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BottomDrawer;
