import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
  const packageJsonPath = join(process.cwd(), 'package.json');
  const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'));

  const dependencies = Object.keys(packageJson.dependencies || {}).filter(
    (pkg) => !['next', 'react', 'react-dom'].includes(pkg)
  );

  const devDependencies = Object.keys(packageJson.devDependencies || {}).filter(
    (pkg) => !['next', 'react', 'react-dom', 'eslint-config-next'].includes(pkg)
  );

  return NextResponse.json({ dependencies, devDependencies });
}
