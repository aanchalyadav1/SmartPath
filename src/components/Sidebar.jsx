import React from "react";
import {
  Search,
  Filter,
  Warehouse,
  Utensils,
  Zap,
  Accessibility,
  Check,
} from "lucide-react";

const Sidebar = () => {
  const categories = [
    { icon: Warehouse, label: "Classrooms" },
    { icon: Utensils, label: "Dining" },
    { icon: Zap, label: "Restrooms" },
    { icon: Accessibility, label: "Accessible Entrances" },
  ];

  const accessibilityFilters = [
    { label: "Show wheelchair-accessible routes only", checked: true },
    { label: "Avoid stairs completely", checked: true },
    { label: "Prefer elevators over ramps", checked: false },
    { label: "Covered routes (rain protection)", checked: false },
  ];

  return (
    <aside className="w-96 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto flex flex-col">
      {/* SEARCH */}
      <div className="p-4 border-b border-gray-100 sticky top-0 bg-white z-10">
        <label className="sr-only">Search campus locations</label>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search buildings, hostels, or facilities"
            className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
          />
        </div>
      </div>

      {/* QUICK CATEGORIES */}
      <section className="p-4">
        <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
          Quick Categories
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex items-center gap-3 p-3 rounded-xl bg-gray-50 border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors text-gray-700"
            >
              <cat.icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-medium">{cat.label}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ACCESSIBILITY FILTERS */}
      <section className="p-4 border-t border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Accessibility Preferences
          </h3>
          <button className="text-xs text-teal-600 hover:underline font-medium">
            Reset
          </button>
        </div>

        <div className="space-y-3">
          {accessibilityFilters.map((filter, idx) => (
            <label
              key={idx}
              className="flex items-start justify-between gap-4 cursor-pointer p-2 rounded-lg hover:bg-gray-50"
            >
              <span className="text-sm text-gray-700 leading-snug">
                {filter.label}
              </span>
              <div
                className={`w-5 h-5 mt-0.5 rounded border flex items-center justify-center ${
                  filter.checked
                    ? "bg-teal-600 border-teal-600"
                    : "bg-white border-gray-300"
                }`}
              >
                {filter.checked && (
                  <Check className="w-3.5 h-3.5 text-white" />
                )}
              </div>
            </label>
          ))}
        </div>
      </section>

      {/* SUGGESTED NEARBY */}
      <section className="p-4 border-t border-gray-100 flex-1">
        <h3 className="text-sm font-semibold text-gray-900 mb-3">
          Suggested Nearby Places
        </h3>

        <div className="space-y-3">
          {[
            {
              name: "Student Activity Center",
              dist: "0.2 km",
              access: "High",
              type: "Building",
            },
            {
              name: "Main Library – East Entrance",
              dist: "0.4 km",
              access: "High",
              type: "Accessible Entrance",
            },
            {
              name: "Science Block C",
              dist: "0.6 km",
              access: "Medium",
              type: "Academic Block",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-3 bg-white border border-gray-200 rounded-xl hover:border-teal-500 hover:shadow-sm transition-all cursor-pointer"
            >
              <div className="flex justify-between items-start gap-3">
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-0.5">
                    {item.type} • {item.dist}
                  </p>
                </div>
                <span
                  className={`px-2 py-1 rounded-md text-xs font-semibold ${
                    item.access === "High"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {item.access} Access
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
};

export default Sidebar;
