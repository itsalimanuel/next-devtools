export const ToggleButton = ({ isVisible, onClick }: { isVisible: boolean; onClick: () => void }) => (
  <button
    onClick={onClick}
    className="fixed bottom-4 right-4 z-50 bg-gray-800 text-gray-200 px-4 py-2 rounded-full shadow-lg border border-gray-700 hover:bg-gray-700 focus:ring-4 focus:ring-gray-600"
  >
    {isVisible ? 'Close DevTools' : 'Open DevTools'}
  </button>
);
