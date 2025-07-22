
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react'
import GridBg from '../components/GridBg'
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import SphereScene from '../components/SphereScene';
import { useMediaQuery } from 'react-responsive';
import TypewriterComponent from 'typewriter-effect';

function Landing() {
  const { scrollYProgress } = useScroll(
    {
      target: useRef<HTMLDivElement>(null), 
      offset: ['start start', 'end end'], 
    }
  );
  const divRef = useRef<HTMLDivElement>(null)
  const isMobile = useMediaQuery({ maxWidth: 768 })
  // Responsive transforms
  const cellSize = useTransform(scrollYProgress, [0, 1], isMobile ? [80, 20] : [130, 20])
  const fontSize = useTransform(scrollYProgress, [0, 1], isMobile ? ['2.5rem', '4.5rem'] : ['6rem', '11rem'])
  const fontOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0.0])
  //const componentSize = useTransform(scrollYProgress, [0, 1], ['100%', isMobile ? '90%' : '80%'])
  const backgroundSize = useMotionTemplate`${cellSize}px ${cellSize}px`
  const letterSpacing = useTransform(scrollYProgress, [0, 1], isMobile ? ['0.1em', '-0.2em'] : ['0.2em', '-0.5em'])

  return (
    <motion.div className='w-screen h-screen relative bg-zinc-950 rounded-3xl overflow-hidden border-dashed border-4 border-white 
    pt-16'
    ref={divRef}
    style={{   }}>
      <GridBg backgroundSize={backgroundSize} />
      {/* The content of the landing page */}
      <div className='relative z-10 h-full  justify-center'>
        <motion.h1
          className='mt-[10%] lg:bg-white text-white text-center lg:text-black font-bold font-special uppercase
            absolute top-0 left-0 w-screen z-9 tracking-[-0.1em] overflow-x-clip '
          style={{
            fontSize,
            opacity: fontOpacity,
            letterSpacing,
            textShadow: '-10px 10px 0px rgba(0,0,0,0.5)', // ← Big angled shadow
          }}
        >
          <TypewriterComponent
            options={{
              strings: ['Hello!', 'I am John Gabriel!', 'A Full Stack Developer', 'Welcome', 'To my Portfolio'],
              autoStart: true,
              loop: true,
            }}
          />
        </motion.h1>

        <div className="h-full z-11">
          <Canvas className='w-full z-11'>
            <SphereScene />
            </Canvas>
        </div>
      </div>
    </motion.div>
  )
}

export default Landing
