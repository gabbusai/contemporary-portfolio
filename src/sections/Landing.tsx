
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react'
import GridBg from '../components/GridBg'
import { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import SphereScene from '../components/SphereScene';

function Landing() {
  const { scrollYProgress } = useScroll(
    {
      target: useRef<HTMLDivElement>(null), // Use a ref to target the div
      offset: ['start start', 'end end'], // Adjust the offset as needed
    }
  );
  const cellSize = useTransform(scrollYProgress, [0, 1], [400, 50]);
  const fontSize = useTransform(scrollYProgress, [0, 1], ["4rem", "8rem"]);
  const fontOpacity = useTransform(scrollYProgress, [0, .7], [1, 0.0]);
  const componentSize = useTransform(scrollYProgress, [0, 1], ["100%", "80%"]);
  const divRef = useRef<HTMLDivElement>(null);
  const backgroundSize = useMotionTemplate`${cellSize}px ${cellSize}px`;

  return (
    <motion.div className='w-screen h-screen relative bg-zinc-950 rounded-3xl overflow-hidden border-dashed border-4 border-white  '
    ref={divRef}
    style={{   }}>
      <GridBg backgroundSize={backgroundSize} />
      {/* The content of the landing page */}
      <div className='relative z-10 h-full  justify-center'>
        <motion.h1 className='mt-[15%] bg-white text-center text-black font-bold font-ibm uppercase
        absolute top-0 left-0 w-screen z-9'
        style={{ fontSize,
          opacity: fontOpacity
         }}>
          HELLO, I'M JOHN GABRIEL
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
