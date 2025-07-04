import React from 'react'
import GridBg from './components/GridBg'
import Landing from './sections/Landing'
import { Canvas } from '@react-three/fiber'
import SphereScene from './components/SphereScene'

function App() {
  return (
    <div className="w-screen bg-black relative">

      <div className="relative h-[200vh]">
        <div className="top-0 sticky w-screen h-screen grid place-items-center">
            <Landing />
        </div>
      </div>

      
      <div className="h-screen w-screen bg-blue-500">
        
      </div>
    </div>
  )
}

export default App
