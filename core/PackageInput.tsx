

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PackageInput = ({ packageName, isDevDependency, setPackageName, setIsDevDependency, handleInstall, installMessage }: any) => (
  <div className="mb-6">
    <label className="block text-sm font-medium mb-2">Install a New Package</label>
    <input
      type="text"
      value={packageName}
      onChange={(e) => setPackageName(e.target.value)}
      placeholder="Enter package name"
      className="w-full px-3 py-2 mb-2 border border-gray-700 rounded bg-gray-800 text-gray-200 focus:ring-2 focus:ring-indigo-500"
    />
    <div className="flex items-center space-x-2">
      <label className="text-sm">
        <input
          type="checkbox"
          checked={isDevDependency}
          onChange={() => setIsDevDependency(!isDevDependency)}
          className="mr-2"
        />
        Install as Dev Dependency
      </label>
      <button
        onClick={handleInstall}
        className="px-3 py-1 bg-indigo-600 text-gray-100 rounded text-sm hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400"
      >
        Install
      </button>
    </div>
    {installMessage && <p className="mt-2 text-sm text-gray-400">{installMessage}</p>}
  </div>
);
