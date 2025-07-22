import { useEffect, useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type TrailDot = {
  id: number
  x: number
  y: number
  color: string
}

const COLORS = ['#ffffff', '#ff00ff', '#00ffff', '#ffff00']

function MouseTrail() {
  const [trails, setTrails] = useState<TrailDot[]>([])
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const smoothX = useSpring(mouseX, { stiffness: 300, damping: 25 })
  const smoothY = useSpring(mouseY, { stiffness: 300, damping: 25 })

  const idRef = useRef(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      idRef.current += 1

      const newDot: TrailDot = {
        id: idRef.current,
        x: e.clientX,
        y: e.clientY,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      }

      setTrails((prev) => [...prev.slice(-15), newDot]) // keep 15 recent trails

      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <>
      {/* Main trail circle */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
        style={{ x: smoothX, y: smoothY }}
      >
        <div className="w-16 h-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white opacity-70 blur-lg" />
      </motion.div>

      {/* Trail ghosts */}
      {trails.map((trail) => (
        <motion.div
          key={trail.id}
          className="pointer-events-none fixed top-0 left-0 z-40 mix-blend-difference"
          initial={{ opacity: 0.4, scale: 0.8 }}
          animate={{ opacity: 0, scale: 1.5 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          style={{
            x: trail.x,
            y: trail.y,
          }}
        >
          <div
            className="w-12 h-12 -translate-x-1/2 -translate-y-1/2 rounded-full blur-sm"
            style={{ backgroundColor: trail.color }}
          />
        </motion.div>
      ))}
    </>
  )
}

export default MouseTrail
