'use client'
import { TabContent } from "@/core/Tabs/TabContent";
import { useEffect, useState } from "react";

export const AssetsTab = () => {
  const [assets, setAssets] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/devtools/assets')
      .then((res) => res.json())
      .then((data) => setAssets(data.assets || []));
  }, []);

  return (
    <TabContent title="Assets">
      <div className="grid grid-cols-2 gap-4">
        {assets.length > 0 ? (
          assets.filter((asset) => /\.(png|jpg|jpeg|gif|webp|svg)$/.test(asset)).map((asset) => (
            <div key={asset} className="bg-gray-800 p-2 rounded-md shadow-sm hover:bg-gray-700">
              <img
                src={asset}
                alt={asset}
                className="w-full h-auto object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <p className="col-span-2 text-gray-500">No image assets found.</p>
        )}
      </div>
    </TabContent>
  );
};
