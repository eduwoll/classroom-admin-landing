import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { useRouter } from 'next/dist/client/router';

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const transitionClasses = 'transition duration-1000'
  const invisibleClasses = 'transform translate-y-10 opacity-0';
  const invisibleLogoClasses = 'transform -translate-y-10 opacity-0';

  console.log(0, transitionClasses, isVisible)
  console.log(1, transitionClasses, isVisible)
  console.log(2, transitionClasses, isVisible)

  useEffect(() => {
    setIsVisible(true)
  }, []);

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
        <div className={transitionClasses + (isVisible ? '' : ' ' + invisibleLogoClasses)}>
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
              <div className={transitionClasses + (isVisible ? '' : ' ' + invisibleClasses)}>
                <a href={useRouter().asPath}>{'Um Facilitador para\n'}</a>
                <span className="text-primary-500">Diretores e Orientadores</span>
              </div>
            }
            description={
              <div className={'delay-300 ' + transitionClasses + (isVisible ? '' : ' ' + invisibleClasses)}>
                Veja seus dados do Google Classroom de uma forma centralizada.
              </div>
            }
            button={
              <div className={'delay-700 ' + transitionClasses + (isVisible ? '' : ' ' + invisibleClasses)}>
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
