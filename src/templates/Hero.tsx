import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

function Hero() {

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingTop: 16,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}
    >
      <Section>
        <div className="fade-in-top">
          <NavbarTwoColumns logo={<Logo xl />}>
            {/* <li>
          <Link href="https://app.classroom-admin.com/login">
            <a>Entrar</a>
          </Link>
        </li> */}
          </NavbarTwoColumns>
        </div>
      </Section>
      <div
        style={{ display: 'flex', flexGrow: 1, flexDirection: 'column', justifyContent: 'center' }}
      >
        <Section>
          <HeroOneButton
            title={
              <div className="fade-in-bottom">
                {'Um Facilitador para\n'}
                <span className="text-primary-500">Diretores e Orientadores</span>
              </div>
            }
            description={
              <div className="animation-delay-300 fade-in-bottom">
                Veja seus dados do Google Classroom de uma forma centralizada.
              </div>
            }
            button={
              <div className="animation-delay-600 fade-in-bottom">
                <Link href="https://app.classroom-admin.com">
                  <a>
                    <Button xl>Acessar Aplicação</Button>
                  </a>
                </Link>
              </div>
            }
          />
        </Section>
      </div>
    </div>
  );
}

export { Hero };
