/**
 * All project images from /public.
 * Uses a seeded PRNG so server & client produce identical sequences (no hydration mismatch).
 */

const ALL_IMAGES = [
  '/1.png',
  '/3.png',
  '/B5366178-E2C1-444A-A850-F5A8AD7DD543.jpg',
  '/I DO 2026-3.jpg',
  '/I DO 2026-4.jpg',
  '/IMG_4296.jpg',
  '/IMG_5435.jpg',
  '/IMG_5551.jpg',
  '/IMG_5863.jpg',
  '/IMG_6267.jpg',
  '/IMG_7009.jpg',
  '/IMG_7023.jpg',
  '/P1006559.jpg',
  '/P1010236.jpg',
  '/P1019220.jpg',
  '/P1020500.jpg',
  '/P1023990.jpg',
  '/P1028513.jpg',
  '/P1028525.jpg',
  '/P1028574 2.jpg',
  '/P1031367.jpg',
  '/P1038587.jpg',
  '/P1038741.jpg',
  '/P1041483.jpg',
  '/P1042487.jpg',
  '/P1043001.jpg',
  '/P1043331.jpg',
  '/P1043360.jpg',
  '/P1043384.jpg',
  '/P1043602.jpg',
  '/P1043820.jpg',
  '/P1052322.jpg',
  '/P1053373.jpg',
  '/P1053621.jpg',
  '/P1053643.jpg',
  '/P1053823.jpg',
  '/P1053856.jpg',
  '/P1054695.jpg',
  '/P1054696.jpg',
  '/P1061169.jpg',
  '/P1063321.jpg',
  '/P1063474.jpg',
  '/P1063644.jpg',
  '/P2650171.jpg',
  '/P2690217.jpg',
  '/P3610806.jpg',
  '/R1__1602.jpg',
  '/WhatsApp Image 2023-06-05 at 21.29.30 (2).jpg',
  '/WhatsApp Image 2023-06-05 at 21.29.30.jpg',
  '/_1744764.jpg',
  '/_1755118.jpg',
];

// Mulberry32 seeded PRNG — deterministic, same sequence server & client
function mulberry32(seed: number): () => number {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rng = mulberry32(2024); // fixed seed

/**
 * Returns `count` deterministic pseudo-random image paths.
 */
export function getRandomImages(count: number): string[] {
  const shuffled = [...ALL_IMAGES];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, count).map(encodeURI);
}

/**
 * Returns all images in deterministic pseudo-random order.
 */
export function getShuffledImages(): string[] {
  return getRandomImages(ALL_IMAGES.length);
}

export { ALL_IMAGES };