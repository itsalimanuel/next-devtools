import { readdirSync, statSync } from 'fs';
import { join } from 'path';

function getRoutes(directory: string, basePath = ''): string[] {
  const entries = readdirSync(directory);

  let routes: string[] = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry);
    const isDirectory = statSync(fullPath).isDirectory();

    if (isDirectory) {
      routes = routes.concat(getRoutes(fullPath, `${basePath}/${entry}`));
    } else if (entry === 'page.tsx' || entry === 'page.jsx') {
      routes.push(basePath || '/');
    }
  }

  return routes;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(_req: Request) {
  const appPath = join(process.cwd(), 'app');
  const routes = getRoutes(appPath);

  return new Response(JSON.stringify({ routes }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
