import {HERO_CONTENT} from "../constants/index.tsx";
import profilePic from "../assets/pic.jpeg";
import {motion} from "framer-motion";

const container=(delay: number)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
     <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
        <div className="flex flex-col items-center lg:items-start">
            <motion.h1 
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-12 text-6xl font-thin tracking-tight lg:mt-16 lg:text-6xl text-white">Chandu korubilli
            </motion.h1>
        <motion.span 
         variants={container(0.5)}
         initial="hidden"
         animate="visible"
        whileHover={{ scale: 1.2 }}
  whileTap={{ scale: 1.1 }} dragConstraints={{left:-100,right:100}} drag="x" 
  className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl trackibng-tight text-transparent ">
            App Developer
        </motion.span>
        <motion.p
  variants={container(1)}
  initial="hidden"
  animate="visible"
  className="my-2 max-w-xl py-6 font-light tracking-tighter text-white text-center lg:text-left px-4 lg:px-0"
>
  {HERO_CONTENT}
</motion.p>

        </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
  <div className="flex justify-center">
    <motion.img 
      initial={{x:100,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{duration:1,delay:1.2}}
      src={profilePic} 
      alt="Chandu Korubilli" 
      className="w-150 h-250 sm:w-50 sm:h-50 lg:w-80 lg:h-90" 
    />
  </div>
</div>
     </div>
    </div>
  )
}

export default Hero
