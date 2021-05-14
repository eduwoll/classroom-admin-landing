import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Tem interesse?"
      subtitle="Entre em contato conosco."
      button={(
          <a href="mailto:contato@classroom-admin.com">
            <Button>Contato</Button>
          </a>
      )}
    />
  </Section>
);

export { Banner };
