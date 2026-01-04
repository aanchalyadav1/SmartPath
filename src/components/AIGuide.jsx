import React, { useState } from "react";
import { Sparkles, X } from "lucide-react";

const AIGuide = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 bg-teal-600 hover:bg-teal-700 text-white px-4 py-3 rounded-full shadow-lg shadow-teal-300 flex items-center gap-2 text-sm font-semibold"
        aria-label="Open AI Navigation Guide"
      >
        <Sparkles className="w-5 h-5" />
        AI Guide
      </button>

      {/* Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex justify-end">
          {/* Panel */}
          <div className="w-full max-w-md h-full bg-white shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-teal-600" />
                <h2 className="font-semibold text-gray-900">
                  SmartPath AI Guide
                </h2>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Close AI Guide"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 flex-1 overflow-y-auto">
              <p className="text-sm text-gray-700 mb-4">
                I can help you find the most accessible and convenient routes
                across campus.
              </p>

              <div className="space-y-3">
                <div className="p-3 bg-gray-50 rounded-xl border">
                  <p className="text-xs text-gray-500 mb-1">Try asking:</p>
                  <p className="text-sm font-medium text-gray-800">
                    “How do I reach the library without stairs?”
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border">
                  <p className="text-xs text-gray-500 mb-1">Or:</p>
                  <p className="text-sm font-medium text-gray-800">
                    “Find a wheelchair-friendly route to the hostel.”
                  </p>
                </div>

                <div className="p-3 bg-gray-50 rounded-xl border">
                  <p className="text-xs text-gray-500 mb-1">You can also ask:</p>
                  <p className="text-sm font-medium text-gray-800">
                    “Are there elevators available on this route?”
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-teal-50 border border-teal-200 rounded-xl">
                <p className="text-sm text-teal-800 font-semibold mb-1">
                  Accessibility-first guidance
                </p>
                <p className="text-sm text-teal-700">
                  SmartPath prioritizes routes that avoid stairs, use elevators,
                  and provide safer paths based on your needs.
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 border-t text-xs text-gray-500">
              AI responses will adapt to your accessibility preferences.
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIGuide;
