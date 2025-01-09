import { RiReactjsLine } from "react-icons/ri";
import { RiFlutterFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { SiNodedotjs } from "react-icons/si";
import { SiReact } from "react-icons/si";
import {motion} from "framer-motion";

const tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl text-white">Technologies</motion.h2>
        <motion.div className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
         whileInView={{opacity:1,x:0}}
         initial={{ y: -10 }}
         animate={{
             y: [10, -10],
             transition: {
                 duration: 0.7, 
                 ease: 'linear',
                 repeat: Infinity,
                 repeatType: "reverse"
             }
         }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiReactjsLine className="text-7xl text-cyan-400"/>
        </motion.div>
        <motion.div 
        initial={{ y: -10 }}
        animate={{
            y: [10, -10],
            transition: {
                duration: 0.8, // Replace 2 with your desired duration
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <RiFlutterFill className="text-7xl text-blue-400"/>
        </motion.div>
        <motion.div 
        initial={{ y: -10 }}
        animate={{
            y: [10, -10],
            transition: {
                duration: 0.9, // Replace 2 with your desired duration
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiMongodb  className="text-7xl text-green-400"/>
        </motion.div>
        <motion.div 
        initial={{ y: -10 }}
        animate={{
            y: [10, -10],
            transition: {
                duration: 1, // Replace 2 with your desired duration
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiDjango className="text-7xl text-green-800"/>
        </motion.div>
        <motion.div 
        initial={{ y: -10 }}
        animate={{
            y: [10, -10],
            transition: {
                duration: 1.1, // Replace 2 with your desired duration
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiFlask  className="text-7xl text-red-700"/>
        </motion.div>
        <motion.div
        initial={{ y: -10 }}
        animate={{
            y: [10, -10],
            transition: {
                duration: 1.2, // Replace 2 with your desired duration
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiNodedotjs className="text-7xl text-green-100"/>
        </motion.div>
        <motion.div 
        initial={{ y: -10 }}
        animate={{
            y: [10, -10],
            transition: {
                duration:1.3, // Replace 2 with your desired duration
                ease: 'linear',
                repeat: Infinity,
                repeatType: "reverse"
            }
        }}
        className="rounded-2xl border-4 border-neutral-800 p-4">
        <SiReact className="text-7xl text-cyan-400"/>
        </motion.div>
        </motion.div>
    
    </div>

  )
}
export default tech
