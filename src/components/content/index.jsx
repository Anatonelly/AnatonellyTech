/* eslint-disable react-hooks/rules-of-hooks */
import React, { useRef } from 'react';

// Style
import '@/components/content/style.css';

// Libs
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Utils
import { TitleLetter, Paragraph, Lists, Img } from '@/utils/animations';

// Components
import CardTech from '@/components/cardTech';

// Icons;
import { LuMonitor } from 'react-icons/lu';
import { FaGears, FaPeopleCarryBox } from 'react-icons/fa6';
import { IoTerminal } from 'react-icons/io5';
import { RiArrowDownDoubleLine, RiScrollToBottomLine } from 'react-icons/ri';

const index = () => {
  // Plugins
  gsap.registerPlugin(useGSAP, ScrollTrigger, Flip);

  // Variables important for the animation
  // tl is a toggle for the animation if iquals 1 the animation is running
  // curLayout is the current layout of the animation
  var tl = 0;
  var curLayout = 0;

  // Refs
  const introduction = useRef();
  const Tech = useRef();

  useGSAP(
    () => {
      gsap.to('#introduction', {
        scrollTrigger: {
          trigger: '#introduction',
          onEnter: () => {
            tl = 1;
            let layouts = [];

            window.innerWidth <= 980
              ? (layouts = ['final', 'plain', 'none'])
              : (layouts = ['final', 'plain', 'columns', 'none']);

            function nextState() {
              const classList = ['.letter', '.for', '.anatonelly'];
              const state = Flip.getState(classList, {
                props: 'color,backgroundColor',
                simple: true,
              });

              introduction.current.classList.remove(layouts[curLayout]);
              curLayout = (curLayout + 1) % layouts.length;
              introduction.current.classList.add(layouts[curLayout]);
              Flip.from(state, {
                absolute: true,
                stagger: 0.07,
                duration: 0.5,
                ease: 'power2.inOut',
                spin: curLayout == 0,
                simple: true,
                onEnter: (elements, animation) =>
                  gsap.fromTo(
                    elements,
                    { opacity: 0 },
                    { opacity: 1, delay: animation.duration() - 0.1 }
                  ),
                onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
              });
              tl === 1
                ? gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState)
                : null;
            }
            gsap.delayedCall(1, nextState);
          },
          onLeave: () => {
            tl = 0;
          },
          onEnterBack: () => {
            tl = 1;
            let layouts = [];

            window.innerWidth <= 980
              ? (layouts = ['final', 'plain', 'none'])
              : (layouts = ['final', 'plain', 'columns', 'none']);

            function nextState() {
              const classList = ['.letter', '.for', '.anatonelly'];
              const state = Flip.getState(classList, {
                props: 'color,backgroundColor',
                simple: true,
              });

              introduction.current.classList.remove(layouts[curLayout]);
              curLayout = (curLayout + 1) % layouts.length;
              introduction.current.classList.add(layouts[curLayout]);
              Flip.from(state, {
                absolute: true,
                stagger: 0.07,
                duration: 0.5,
                ease: 'power2.inOut',
                spin: curLayout == 0,
                simple: true,
                onEnter: (elements, animation) =>
                  gsap.fromTo(
                    elements,
                    { opacity: 0 },
                    { opacity: 1, delay: animation.duration() - 0.1 }
                  ),
                onLeave: (elements) => gsap.to(elements, { opacity: 0 }),
              });
              tl === 1
                ? gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState)
                : null;
            }
            gsap.delayedCall(1, nextState);
          },
          onLeaveBack: () => {
            tl = 0;
          },
          toggleActions: 'play pause play pause',
          start: 'top center',
          end: 'bottom center',
          scrub: 0.5,
        },
      });

      // text reveal
      const scrub = 0.5;
      gsap.set('.titleReveal > span', {
        '--progress': 0,
        backgroundPositionX:
          'calc(-200vmax + (var(--progress) * 200vmax)), calc(-200vmax + (var(--progress) * 200vmax)), 0',
        color: 'transparent',
        markers: true,
      });

      gsap.to('.titleReveal > span', {
        '--progress': 1,
        scrollTrigger: {
          // markers: true,
          trigger: '#titleReveal',
          scrub,
          start: 'top center',
          end: 'center-=10% center-=10%',
        },
      });

      async function loadReveal() {
        const sr = (await import('scrollreveal')).default();

        sr.reveal('#TitleLetter', TitleLetter);
        sr.reveal('#Paragraph', Paragraph);
        sr.reveal('#Lists', Lists);
        sr.reveal('#Img', Img);
      }
      loadReveal();
    },
    { scope: Tech }
  );

  return (
    <div ref={Tech} className='w-full h-auto flex flex-col '>
      <div
        id='AnatonellyTech'
        className='bg-Anatonelly-Primary h-screen w-full flex flex-col items-center justify-center'
      >
        <div ref={introduction} id='introduction' className='final'>
          <div className='letter T'>T</div>
          <div className='letter e'>e</div>
          <div className='letter c'>c</div>
          <div className='letter h'>h</div>
          <div className='for'>for</div>
          <div className='anatonelly'>Anatonelly</div>
        </div>
        <a
          href='#titleReveal'
          className='animate-bounce gap-2 flex justify-center flex-col items-center text-white text-xl absolute bottom-10 '
        >
          <RiScrollToBottomLine className='text-4xl xxs:hidden md:flex' />
          <RiArrowDownDoubleLine className='text-4xl' />
        </a>
      </div>
      <div className='h-auto w-full flex flex-col'>
        <div
          id='titleReveal'
          className='w-full h-screen p-10 flex items-start flex-col justify-center bg-Anatonelly-Primary'
        >
          <p className='titleReveal font-black  '>
            <span className=''>Seja Bem Vindo!</span>
          </p>
          <div className='h-auto w-full flex flex-col items-center p-10 pt-0 justify-center gap-10 bg-Anatonelly-Primary'>
            <img
              id='Img'
              className='w-80 shadow-neutral-300'
              src='/AnatonellyTech.svg'
              alt=''
            />
            <p
              id='Lists'
              className='font-black md:text-xl xxs:text-sm text-center text-white '
            >
              Nós Anatonelly Tech, estamos aqui para tornar sua visão digital
              uma realidade. Somos uma equipe apaixonada por tecnologia,
              especializada em criar sites personalizados e oferecer serviços
              integrados para a área de logística. Seja qual for a sua
              necessidade digital, estamos aqui para superar suas expectativas.
            </p>
          </div>
        </div>
        <div className='flex  justify-center items-center p-5 w-full gap-5'>
          <h1 className='text-neutral-800 font-black xxs:text-3xl md:text-7xl'>
            Diferenciais<span className='text-sky-500'>.</span>
          </h1>
          <div className='h-[1px] w-full xxs:hidden sm:flex border border-zinc-500'></div>
        </div>
        <div className='flex mb-10 flex-col items-center md:p-10 xxs:p-5 justify-center gap-5'>
          <div className='flex xxs:flex-col gap-5 md:flex-row w-full '>
            <CardTech
              icon={<LuMonitor size={30} className='invert' />}
              title={'Criação de Sites Personalizados'}
              topics={[
                'Desenvolvimento de sites com design moderno e funcionalidades avançadas.',
                'Foco na experiência do usuário para destacar o negócio em um mercado digital competitivo.',
              ]}
            />
            <CardTech
              icon={<FaGears size={30} className='invert' />}
              title={'Soluções Integradas para Logística'}
              topics={[
                'Soluções personalizadas para otimizar operações logísticas.',
                'Inclui rastreamento de cargas, gestão de estoque e outras necessidades específicas da indústria.',
              ]}
            />
          </div>
          <div className='flex xxs:flex-col gap-5 md:flex-row w-full'>
            <CardTech
              icon={<IoTerminal size={30} className='invert' />}
              title={'Software Sob Medida'}
              topics={[
                'Desenvolvimento de software personalizado para atender às necessidades únicas de cada empresa.',
                'Aplicações internas para aumentar a eficiência e sistemas completos de gerenciamento de processos são exemplos.',
              ]}
            />

            <CardTech
              icon={<FaPeopleCarryBox size={30} className='invert' />}
              title={'Parceria com o Cliente'}
              topics={[
                'Abordagem colaborativa e transparente centrada no cliente.',
                'Envolvimento do cliente em todas as etapas do processo, transformando suas ideias em soluções digitais de sucesso.',
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
