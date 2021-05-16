import { useEffect, useRef, useState } from 'react';

import Link from 'next/link';

import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

function Hero() {
  const [isVisible, setIsVisible] = useState([false, false, false]);
  const transitionsActive = useRef(true);
  const initialTransition = useRef(true);
  const transitionClasses = transitionsActive.current ? 'transition duration-1000' : '';
  const invisibleClasses = 'transform translate-y-10 opacity-0';
  const invisibleLogoClasses = 'transform -translate-y-10 opacity-0';

  useEffect(() => {
    if (initialTransition.current) {
      initialTransition.current = false;
      setIsVisible([true, false, false]);
      setTimeout(() => setIsVisible([true, true, false]), 400);
      setTimeout(() => setIsVisible([true, true, true]), 800);
    } else {
      transitionsActive.current = false;
      setIsVisible([true, true, true]);
    }
    return () => {
      transitionsActive.current = false;
    };
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
        <div className={transitionClasses + (isVisible[0] ? '' : ' ' + invisibleLogoClasses)}>
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
              <div className={transitionClasses + (isVisible[0] ? '' : ' ' + invisibleClasses)}>
                {'Um Facilitador para\n'}
                <span className="text-primary-500">Diretores e Orientadores</span>
              </div>
            }
            description={
              <div className={transitionClasses + (isVisible[1] ? '' : ' ' + invisibleClasses)}>
                Veja seus dados do Google Classroom de uma forma centralizada.
              </div>
            }
            button={
              <div className={transitionClasses + (isVisible[2] ? '' : ' ' + invisibleClasses)}>
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
