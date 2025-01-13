export const TabButton = ({ icon, tooltip, isActive, onClick }: { icon: React.ReactNode; tooltip: string; isActive: boolean; onClick: () => void }) => (
  <div className="relative group flex-1">
    <button
      onClick={onClick}
      className={`flex items-center justify-center w-full py-3 transition ${isActive
        ? 'bg-gray-700 text-indigo-400 font-semibold'
        : 'hover:bg-gray-800 text-gray-400'
        }`}
    >
      {icon}
    </button>
    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-gray-100 text-xs px-2 py-1 rounded shadow-md">
      {tooltip}
    </div>
  </div>
);
