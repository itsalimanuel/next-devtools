'use client'
import { TabContent } from "@/core/Tabs/TabContent";
import { useEffect, useState } from "react";

export const ComponentsTab = ({ setHighlightedComponent, highlightedComponent }: { setHighlightedComponent: (component: string | null) => void; highlightedComponent: string | null }) => {
  const [components, setComponents] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/devtools/components')
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error || 'Failed to fetch components');
          });
        }
        return res.json();
      })
      .then((data) => {
        setComponents(data.components || []);
        setError(null);
      })
      .catch((err) => {
        console.error('Error fetching components:', err);
        setError(err.message);
      });
  }, []);

  return (
    <TabContent title="Available Components">
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <ul className="space-y-2">
          {components.length > 0 ? (
            components.map((component) => (
              <li
                key={component}
                className={`bg-gray-800 px-3 py-2 rounded-md shadow-sm hover:bg-indigo-600 cursor-pointer ${highlightedComponent === `.${component}`
                  ? 'bg-indigo-500 text-gray-100'
                  : 'text-gray-300'
                  }`}
                onMouseEnter={() => setHighlightedComponent(`.${component}`)}
                onMouseLeave={() => setHighlightedComponent(null)}
              >
                {component}
              </li>
            ))
          ) : (
            <p className="text-gray-500">No components found.</p>
          )}
        </ul>
      )}
    </TabContent>
  );
};
