import React from 'react'
import GridBg from './components/GridBg'
import Landing from './sections/Landing'
import { motion, useMotionTemplate, useScroll, useTransform } from 'motion/react'
import NavBar from './components/NavBar'
import { TABS } from './dummyData'
import { EffectComposer, Noise, Scanline } from '@react-three/postprocessing'
import { Canvas } from '@react-three/fiber'
import { Stars } from '@react-three/drei'

function App() {


  const section01Ref = React.useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: section01Ref,
    offset: ['start start', 'end end'],
  })
  const sectionOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.0])
  return (
    <div className="w-screen bg-white relative">

      <motion.div className=" 
          sticky z-20 top-0 mt-[-90px]">
            <NavBar tabs={TABS}/>
        </motion.div>

      <motion.div className="relative h-[300vh] bg-black" ref={section01Ref}
      style={{ opacity: sectionOpacity }}>
        <motion.div className="top-0 sticky w-screen h-screen grid place-items-center"
          >
            <Landing />
        </motion.div>
      </motion.div>

      
      <div className="h-screen w-screen bg-white">
        <h1>Hello World</h1>
      </div>
      
    </div>
  )
}

export default App
