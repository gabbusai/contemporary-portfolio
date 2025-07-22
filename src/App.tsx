import React from 'react'

import Landing from './sections/Landing'
import { motion, useScroll, useTransform } from 'motion/react'
import NavBar from './components/NavBar'
import { TABS } from './dummyData'
import AboutMe from './sections/AboutMe'
import MouseTrail from './components/MouseTrail'


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



      <AboutMe />


      <div className="bg-zinc-900 h-screen grid place-items-center">


<div className="h-[400px] w-[800px] bg-zinc-50 rounded-2xl grid place-items-center rotate-x-180
    duration-500
    hover:rotate-x-0
    "
    style={{
    transformStyle:'preserve-3d',
    }}
      >
      <div className="absolute inset-0 backface-hidden rotate-x-0">
          <h1 className="font-special text-center text-[22px]">
              LEBRON LEBRON LEBRON JAMES
          </h1>
      </div>

      <div className="absolute inset-0 backface-hidden rotate-x-180">
          <h1 className="font-special text-center text-[22px]">
              This is the front when flipped!
          </h1>
      </div>
  </div>

      </div>
      <MouseTrail/>
    </div>
    
  )
}

export default App
