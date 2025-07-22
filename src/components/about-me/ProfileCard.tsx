    import { motion, useMotionTemplate, useScroll, useTransform,  useSpring, useMotionValue } from 'framer-motion'
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
    const yRaw = useTransform(scrollYProgress, [0, 0.5, 1], ['500px', '0px', '-500px'])
    const rotateYRaw = useTransform(scrollYProgress, [0, 0.5, 1], ['90deg', '0', '-90deg'] )
    const xRaw = useTransform(scrollYProgress, [0, 0.5, 1], ['-1000px', '0px', '1000px'])
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

    //3d card effect
    const cardX = useMotionValue(0);
    const cardY = useMotionValue(0);

    const mouseXSpring = useSpring(cardX);
    const mouseYSpring = useSpring(cardY);

    const cardRotateX = useTransform(mouseYSpring, 
        [-0.5, 0.5], ["15.5deg", "-15.5deg"]
    );

    const cardRotateY = useTransform(mouseXSpring, 
        [-0.5,0.5], ["-15.5deg", "15.5deg"]
    )


    const handleMouseMove = (e:React.MouseEvent<HTMLDivElement>) => {
        if(e.target instanceof HTMLElement){
            const rect = e.target.getBoundingClientRect();
            const rwidth = rect.width;
            const rheight = rect.height;

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const xPct = (mouseX / rwidth) - 0.5;
            const yPct = (mouseY / rheight) - 0.5;

            cardX.set(xPct * 1.25)
            cardY.set(yPct * 1.25)
        }
    }
    const handleMouseLeave = () => {
        cardX.set(0);
        cardY.set(0);
    }
    return (
        <motion.div
        ref={containerRef}
        className='w-[80vw] h-[70vh] bg-zinc-950 border-4 border-dashed border-white
        rounded-lg  flex items-center justify-center overflow-visible shadow-4xl'
        style={{ scale, y, opacity, x:xRaw,
            rotateY: cardRotateY,
            rotateX: cardRotateX,
            transformStyle: "preserve-3d"
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        >
        <GridBg backgroundSize={backgroundSize} />
        <div className=" h-full w-full shadow-2xl inset-5 rounded-3xl grid place-items-center "
        style={{ 
            transform:"translateZ(75px)",
            transformStyle: "preserve-3d"
         }}>
            
            <div className="absolute top-8 left-8 w-8 h-8 border-l-4 border-t-4 border-white" />
            <div className="absolute top-8 right-8 w-8 h-8 border-r-4 border-t-4 border-white" />
            <div className="absolute bottom-8 left-8 w-8 h-8 border-l-4 border-b-4 border-white" />
            <div className="absolute bottom-8 right-8 w-8 h-8 border-r-4 border-b-4 border-white" />
            <p className="text-2xl font-bold text-zinc-800">About Me Card</p>
        </div>


        
        </motion.div>
    )
    }

    export default ProfileCard
