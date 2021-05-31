import React, { useEffect } from 'react';

import { Base } from '../templates/Base';

async function setBackground() {
  window.THREE = await import('three/src/Three');
  const { default: DOTS } = await import('vanta/dist/vanta.dots.min');

  DOTS({
    el: 'body',
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    color: 0x65c599,
    color2: 0xebebff,
    backgroundColor: 0xffffff,
    size: 1.6,
    spacing: 12.0,
  });
}
const Index = () => {
  useEffect(() => {
    if (process.browser) {
      setBackground();
    }
  }, []);

  return <Base />;
};

export default Index;
