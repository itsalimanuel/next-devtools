import { readdirSync } from 'fs';
import { join, extname } from 'path';

export async function GET() {
  try {
    const componentsPath = join(process.cwd(), 'components');
    const files = readdirSync(componentsPath);

    const components = files
      .filter((file) => ['.tsx', '.jsx'].includes(extname(file)))
      .map((file) => file.replace(extname(file), ''));

    return new Response(JSON.stringify({ components }), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error reading components folder:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to fetch components.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
