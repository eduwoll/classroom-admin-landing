import React, { useEffect } from 'react';

import { Base } from '../templates/Base';

async function setBackground() {
  console.time('bg_load')
  window.THREE = await import('../lib/three.module.min');
  const { default: WAVES } = await import('vanta/dist/vanta.waves.min');

  WAVES({
    el: "body",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xb9c6ff
  })
  console.timeEnd('bg_load')
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
