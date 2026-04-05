'use client';

import ReactDOM from 'react-dom';

const HERO_IMAGE_URL =
  'https://res.cloudinary.com/dlpvgtdlv/image/upload/f_auto,q_auto,w_1920/v1775338142/portfolio-v2/hero-resize_qxm1qp.webp';

export const PreloadResources = () => {
  ReactDOM.preconnect('https://res.cloudinary.com');
  ReactDOM.preload(HERO_IMAGE_URL, { as: 'image' });

  return null;
};
