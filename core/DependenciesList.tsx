
export const DependenciesList = ({ title, dependencies }: { title: string; dependencies: string[] }) => (
  <div className="mb-6">
    <h4 className="text-md font-semibold mb-2">{title}</h4>
    <ul className="space-y-2">
      {dependencies.length > 0 ? (
        dependencies.map((dep) => (
          <li key={dep} className="bg-gray-800 px-3 py-2 rounded-md shadow-sm hover:bg-gray-700">
            {dep}
          </li>
        ))
      ) : (
        <p className="text-gray-500">No {title.toLowerCase()} found.</p>
      )}
    </ul>
  </div>
);
