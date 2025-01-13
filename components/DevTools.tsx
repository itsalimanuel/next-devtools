'use client';
import React, { useState } from "react";
import { ToggleButton } from "@/core/ToggleButton";
import { TabNavigation } from "@/core/Tabs/TabNavigation";
import { AssetsTab } from "@/core/Tabs/AssetsTab";
import { ComponentsTab } from "@/core/Tabs/ComponentsTab";
import { PackagesTab } from "@/core/Tabs/PackagesTab";
import { RoutesTab } from "@/core/Tabs/RoutesTab";

const DevTools = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("routes");
  const [highlightedComponent, setHighlightedComponent] = useState<string | null>(null);

  return (
    <div>
      <ToggleButton isVisible={isVisible} onClick={() => setIsVisible(!isVisible)} />

      {isVisible && (
        <div className="fixed top-0 right-0 w-96 h-screen bg-gray-900 text-gray-200 shadow-lg z-40 flex flex-col">
          <div className="bg-gray-800 px-4 py-3 font-semibold text-lg border-b border-gray-700 text-center">
            DevTools
          </div>
          <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="flex-1 overflow-y-auto p-4">
            {activeTab === "routes" && <RoutesTab />}
            {activeTab === "packages" && <PackagesTab />}
            {activeTab === "assets" && <AssetsTab />}
            {activeTab === "components" && (
              <ComponentsTab
                setHighlightedComponent={setHighlightedComponent}
                highlightedComponent={highlightedComponent}
              />
            )}
          </div>
        </div>
      )}

      {highlightedComponent && (
        <style>
          {`
            ${highlightedComponent} {
              outline: 2px dashed #4F46E5;
              outline-offset: -2px;
            }
          `}
        </style>
      )}
    </div>
  );
};

export default DevTools;
