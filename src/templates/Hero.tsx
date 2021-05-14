import React from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <div style={{ minHeight: '100vh', paddingTop: 16, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
    <Section>
      <NavbarTwoColumns logo={<Logo xl />}>
        {/* <li>
          <Link href="https://app.classroom-admin.com/login">
            <a>Entrar</a>
          </Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>
    <div style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center' }}>
      <Section>
        <HeroOneButton
          title={(
            <>
              {'Um facilitador para\n'}
              <span className="text-primary-500">Diretores e Orientadores</span>
            </>
          )}
          description="Veja seus dados do Google Classroom de uma forma centralizada."
          button={(
            <Link href="https://app.classroom-admin.com">
              <a>
                <Button xl>Acessar Aplicação</Button>
              </a>
            </Link>
          )}
        />
      </Section>
    </div>
  </div>
);

export { Hero };
