import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ScrollTextProps {
  text: string
}

function ScrollText({ text }: ScrollTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'], // adjust based on timing
  })

  // Map scroll progress to number of visible characters
  const visibleCharCount = useTransform(scrollYProgress, [0.1, 0.5, 0.7], [0, text.length, 0])

  return (
    <div ref={containerRef} className="relative w-full h-full flex items-center justify-center">
      <motion.div
        className="text-zinc-950 text-4xl lg:text-[150px] font-bold font-special uppercase tracking-wide"
        style={{ whiteSpace: 'pre-wrap' }}
      >
        {text.split('').map((char, index) => (
          <motion.span
            key={index}
            style={{
              display: 'inline-block',
              opacity: useTransform(visibleCharCount, (v) => (index < v ? 1 : 0)),
              transition: 'opacity 0.2s ease',
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.div>
    </div>
  )
}

export default ScrollText
