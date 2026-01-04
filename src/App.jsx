import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MapArea from "./components/MapArea";
import BottomDrawer from "./components/BottomDrawer";
import AIGuide from "./components/AIGuide";

function App() {
  return (
    <div className="h-screen w-full bg-gray-50 font-sans overflow-hidden">
      {/* Fixed Header */}
      <Header />

      {/* Main Layout */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Map Container */}
        <div className="flex-1 relative overflow-hidden">
          <MapArea />
        </div>
      </div>

      {/* Global Overlays */}
      <BottomDrawer />
      <AIGuide />
    </div>
  );
}

export default App;
