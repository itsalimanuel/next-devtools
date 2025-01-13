import { NextResponse } from 'next/server';
import { exec } from 'child_process';
import { existsSync } from 'fs';
import { join } from 'path';

function getPackageManager(): string {
  const projectRoot = process.cwd();

  if (existsSync(join(projectRoot, 'pnpm-lock.yaml'))) return 'pnpm';
  if (existsSync(join(projectRoot, 'yarn.lock'))) return 'yarn';
  if (existsSync(join(projectRoot, 'bun.lockb'))) return 'bun';
  if (existsSync(join(projectRoot, 'package-lock.json'))) return 'npm';

  return 'npm';
}

export async function POST(request: Request): Promise<Response> {
  try {
    const { packageName, dev } = await request.json();
    if (!packageName) {
      return NextResponse.json({ success: false, message: 'Package name is required.' }, { status: 400 });
    }

    const packageManager = getPackageManager();
    let command = '';

    if (packageManager === 'pnpm') {
      command = dev ? `pnpm add ${packageName} -D` : `pnpm add ${packageName}`;
    } else if (packageManager === 'yarn') {
      command = dev ? `yarn add ${packageName} --dev` : `yarn add ${packageName}`;
    } else if (packageManager === 'bun') {
      command = dev ? `bun add ${packageName} --dev` : `bun add ${packageName}`;
    } else {
      command = dev ? `npm install ${packageName} --save-dev` : `npm install ${packageName}`;
    }

    return new Promise((resolve) => {
      exec(command, (error, stdout, stderr) => {
        if (error) {
          resolve(
            NextResponse.json({ success: false, message: stderr || 'Failed to install package.' }, { status: 500 })
          );
        } else {
          resolve(
            NextResponse.json({ success: true, message: stdout || 'Package installed successfully.' })
          );
        }
      });
    });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ success: false, message: 'An internal error occurred.' }, { status: 500 });
  }
}
