import { TabButton } from "@/core/Tabs/TabButton";
import { FiGlobe, FiPackage, FiImage, FiLayers } from 'react-icons/fi';

export const TabNavigation = ({ activeTab, setActiveTab }: { activeTab: string; setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => (
  <div className="flex border-b border-gray-700">
    {[
      { icon: <FiGlobe />, tooltip: 'Routes', tab: 'routes' },
      { icon: <FiPackage />, tooltip: 'Packages', tab: 'packages' },
      { icon: <FiImage />, tooltip: 'Assets', tab: 'assets' },
      { icon: <FiLayers />, tooltip: 'Components', tab: 'components' },
    ].map(({ icon, tooltip, tab }) => (
      <TabButton
        key={tab}
        icon={icon}
        tooltip={tooltip}
        isActive={activeTab === tab}
        onClick={() => setActiveTab(tab)}
      />
    ))}
  </div>
);
