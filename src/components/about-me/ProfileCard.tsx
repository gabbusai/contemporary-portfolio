    import { motion, useMotionTemplate, useScroll, useTransform,  useSpring } from 'framer-motion'
    import { useRef } from 'react'
    import GridBg from '../GridBg'

    function ProfileCard() {
    const containerRef = useRef<HTMLDivElement>(null)
    

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start center', 'end center'], // when top hits center → bottom hits center
    })

    // transforms and shie
    const scaleRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0.2, 1, 0.2])
    const opacityRaw = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0])
    const yRaw = useTransform(scrollYProgress, [0, 0.5, 1], ['50px', '0px', '-50px'])
    const rotateYRaw = useTransform(scrollYProgress, [0, 0.5, 1], ['90deg', '0', '-90deg'] )
    //use usespring
    const scale = useSpring(scaleRaw, {
        stiffness: 120,
        damping: 20,
        mass: 0.5
    })

    const opacity = useSpring(opacityRaw, {
        stiffness: 120,
        damping: 20,
        mass: 0.5
    })

    const y = useSpring(yRaw, {
        stiffness: 80,
        damping: 40,
        mass: 2
    })

    const rotateY = useSpring(rotateYRaw, {
        mass: 1
    })

    const isMobile = false;
    const cellSize = useTransform(scrollYProgress, [0, 1], isMobile ? [80, 20] : [130, 20])
    const backgroundSize = useMotionTemplate`${cellSize}px ${cellSize}px`

    return (
        <motion.div
        ref={containerRef}
        className='w-[80vw] h-[70vh] bg-zinc-950 border-4 border-dashed border-white
        rounded-lg shadow-lg flex items-center justify-center'
        style={{ scale, y, opacity,
            rotateY,
            rotateX: rotateY
        }}
        >
            <GridBg backgroundSize={backgroundSize} />
        <p className="text-2xl font-bold text-zinc-800">About Me Card</p>
        </motion.div>
    )
    }

    export default ProfileCard
