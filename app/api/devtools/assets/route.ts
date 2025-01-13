import { readdirSync } from 'fs';
import { join } from 'path';

function getAssets(directory: string, basePath: string): string[] {
  const entries = readdirSync(directory, { withFileTypes: true });
  let assets: string[] = [];

  for (const entry of entries) {
    const fullPath = join(directory, entry.name);
    if (entry.isDirectory()) {
      assets = assets.concat(getAssets(fullPath, `${basePath}/${entry.name}`));
    } else {
      assets.push(`${basePath}/${entry.name}`);
    }
  }

  return assets;
}

export async function GET() {
  try {
    const assetDirs = [
      join(process.cwd(), 'public'),
      join(process.cwd(), 'assets'),
    ];

    let allAssets: string[] = [];

    for (const dir of assetDirs) {
      try {
        allAssets = allAssets.concat(getAssets(dir, ''));
      } catch (error) {
        console.error(`Error reading directory "${dir}":`, error);
      }
    }

    return new Response(
      JSON.stringify({ assets: allAssets }),
      {
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error in /api/devtools/assets:', error);

    return new Response(
      JSON.stringify({ error: 'Failed to fetch assets' }),
      {
        headers: { 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
}
