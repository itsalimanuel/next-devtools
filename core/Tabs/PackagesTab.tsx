'use client'
import { DependenciesList } from "@/core/DependenciesList";
import { PackageInput } from "@/core/PackageInput";
import { TabContent } from "@/core/Tabs/TabContent";
import { useEffect, useState } from "react";

export const PackagesTab = () => {
  const [dependencies, setDependencies] = useState<string[]>([]);
  const [devDependencies, setDevDependencies] = useState<string[]>([]);
  const [packageName, setPackageName] = useState('');
  const [isDevDependency, setIsDevDependency] = useState(false);
  const [installMessage, setInstallMessage] = useState('');

  useEffect(() => {
    fetch('/api/devtools/packages')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch packages.');
        }
        return res.json();
      })
      .then((data) => {
        setDependencies(data.dependencies || []);
        setDevDependencies(data.devDependencies || []);
      })
      .catch((err) => {
        console.error('Error fetching packages:', err);
        setDependencies([]);
        setDevDependencies([]);
      });
  }, []);

  const handleInstall = async () => {
    if (!packageName.trim()) {
      setInstallMessage('Package name cannot be empty.');
      return;
    }

    const response = await fetch('/api/devtools/install', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ packageName, dev: isDevDependency }),
    });

    const result = await response.json();
    if (result.success) {
      setInstallMessage(`Package "${packageName}" installed successfully.`);
      setPackageName('');
      fetch('/api/devtools/packages')
        .then((res) => res.json())
        .then((data) => {
          setDependencies(data.dependencies || []);
          setDevDependencies(data.devDependencies || []);
        });
    } else {
      setInstallMessage(`Failed to install package: ${result.message}`);
    }
  };

  return (
    <TabContent title="Installed Packages">
      <PackageInput
        packageName={packageName}
        isDevDependency={isDevDependency}
        setPackageName={setPackageName}
        setIsDevDependency={setIsDevDependency}
        handleInstall={handleInstall}
        installMessage={installMessage}
      />
      <DependenciesList title="Dependencies" dependencies={dependencies} />
      <DependenciesList title="Dev Dependencies" dependencies={devDependencies} />
    </TabContent>
  );
};
