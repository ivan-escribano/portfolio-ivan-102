import type { ImageLoaderProps } from 'next/image';

const CLOUDINARY_BASE = 'https://res.cloudinary.com/dlpvgtdlv/image/upload';

export default function cloudinaryLoader({ src, width, quality }: ImageLoaderProps) {
  const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`];
  return `${CLOUDINARY_BASE}/${params.join(',')}${src}`;
}
