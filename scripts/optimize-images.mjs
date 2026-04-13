import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join } from 'path';

const SOURCE = 'fotos';
const THUMB_DIR = 'public/fotos/thumb';
const FULL_DIR = 'public/fotos/full';

const THUMB_WIDTH = 480;
const FULL_WIDTH = 1200;
const THUMB_QUALITY = 75;
const FULL_QUALITY = 85;

async function run() {
  await mkdir(THUMB_DIR, { recursive: true });
  await mkdir(FULL_DIR, { recursive: true });

  const files = (await readdir(SOURCE)).filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f));

  console.log(`Processing ${files.length} images...`);

  let done = 0;
  const batchSize = 4;

  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    await Promise.all(batch.map(async (file) => {
      const src = join(SOURCE, file);
      const name = file.replace(/\.[^.]+$/, '.webp');

      // Thumbnail
      await sharp(src)
        .resize(THUMB_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: THUMB_QUALITY })
        .toFile(join(THUMB_DIR, name));

      // Full size
      await sharp(src)
        .resize(FULL_WIDTH, null, { withoutEnlargement: true })
        .webp({ quality: FULL_QUALITY })
        .toFile(join(FULL_DIR, name));

      done++;
      process.stdout.write(`\r  ${done}/${files.length}`);
    }));
  }

  console.log('\nDone!');
}

run().catch(console.error);
