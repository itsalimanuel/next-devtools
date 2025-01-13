'use client'
import React, { useEffect, useState } from 'react';

const DevTools = () => {
  const [routes, setRoutes] = useState<string[]>([]);

  useEffect(() => {
    fetch('/api/devtools')
      .then((res) => res.json())
      .then((data) => setRoutes(data.routes));
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Next.js DevTools</h1>
      <h2>Available Routes</h2>
      <ul>
        {routes.map((route) => (
          <li key={route}>{route}</li>
        ))}
      </ul>
    </div>
  );
};

export default DevTools;
