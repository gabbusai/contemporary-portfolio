import { motion} from 'framer-motion'
import  { useState } from 'react'
import type { tabType } from '../types';


type NavBarProps = {
    tabs: tabType[];
}
function NavBar({tabs}: NavBarProps) {
    const [selectedTab, setSelectedTab] = useState(tabs[0].id);
    const [isHovered, setHovered] = useState(false);
    const selectHandler = (tab: tabType) => {
        //setSelectedTab(tab.id)
        tab.tabRef?.current?.scrollIntoView({
            behavior:'smooth'
        });
    }

  return (
    <motion.div className=" flex space-x-1 bg-zinc-950 py-2 justify-center lg:w-[40vw] mb-2 sm:w-screen m-auto rounded-[40px] gap-x-3 translate-y-[5px]"
    transition={{ 
        duration: .5,
        type: 'spring'
     }}
    onMouseLeave={()=> {
        /*setTimeout(() =>{
            setSelectedTab(900)
        }, 1000)
        */
        setHovered(false);
    }}
    >
        {
            tabs.map((tab) => (
                <motion.button
                key={tab.id}
                onClick={() => selectHandler(tab)}
                onMouseEnter={() => {setSelectedTab(tab.id); setHovered(true)}}
                whileHover={{ 
                    scale: 1.2
                }}
                className={`relative rounded-full px-3 text-sm font-medium text-white   focus-visible:outline
                    h-16 w-32
                    ${selectedTab === tab.id ? `` : `hover:text-white`}
                    `}
                >
                    {selectedTab === tab.id  && (
                        <motion.div className=" bg-stone-50 absolute inset-0"
                        animate={isHovered ? {opacity: 1} : {opacity: 0}}
                        layoutId='pill'
                        transition={{ 
                            //ease: "easeIn",
                            duration:0.1
                        }}
                        style={{ 
                            borderRadius: 9999
                        }}
                        />
                    )}
                    <span className='z-10 relative font-dmSans uppercase sm:text-[12px] md:text-[22px] mix-blend-exclusion font-ibm'
                    >
                        {tab.title}
                    </span>
                            
                </motion.button>
            ))
        }
    </motion.div>
  )
}

export default NavBar
