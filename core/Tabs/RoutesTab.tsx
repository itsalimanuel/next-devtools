'use client'
import { TabContent } from "@/core/Tabs/TabContent";
import { useEffect, useState } from "react";

export const RoutesTab = () => {
  const [routes, setRoutes] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/devtools/pages')
      .then((res) => res.json())
      .then((data) => setRoutes(data.routes || []));
  }, []);

  return (
    <TabContent title="Available Routes">
      <ul className="space-y-2">
        {routes.length > 0 ? (
          routes.map((route) => (
            <li key={route} className="bg-gray-800 px-3 py-2 rounded-md shadow-sm hover:bg-gray-700">
              {route}
            </li>
          ))
        ) : (
          <p className="text-gray-500">No routes found.</p>
        )}
      </ul>
    </TabContent>
  );
};
