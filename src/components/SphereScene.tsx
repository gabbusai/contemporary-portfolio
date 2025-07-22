import { useGLTF, Outlines } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useScroll, useSpring, useTransform } from 'framer-motion'
import { Group, Mesh } from 'three'

function SphereScene() {
  const groupRef = useRef<Group>(null)
  const meshRef = useRef<Mesh>(null)

  const { nodes, materials } = useGLTF('/second_frame.glb') as any
  useGLTF.preload('/second_frame.glb')

  const { scrollYProgress } = useScroll()

  const rotateY = useTransform(scrollYProgress, [0, 1], [0, Math.PI * 4])
  const scaleValue = useTransform(scrollYProgress, [0, 1], [1.65,3])

  const springRotate = useSpring(rotateY, { stiffness: 50, damping: 20 })
  const springScale = useSpring(scaleValue, { stiffness: 50, damping: 20 })

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.z = springRotate.get()
      meshRef.current.scale.set(springScale.get(), springScale.get(), springScale.get())
    }
    if (groupRef.current) {
      const scale = springScale.get()
      groupRef.current.scale.set(scale, scale, scale)
    }
  })

  return (
    <group ref={groupRef}>
      <mesh
        ref={meshRef}
        geometry={nodes.Object_2.geometry}
        material={materials.None}
        position={[0, -2, 0]} // Make sure the mesh is centered
        rotation={[4.5, 0, 0]}
        scale={2.4}
      >
        <Outlines thickness={2} color="white" />
      </mesh>
    </group>
  )
}

export default SphereScene
