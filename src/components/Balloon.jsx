import { useState } from "react";
import useSound from "use-sound";
import balloonPop from "../assets/sound/balloon-pop1.mp3";
import { motion, useAnimationControls } from "motion/react"

export default function Balloon({fn, index, ripped, normal, get}) {
  const [play] = useSound(balloonPop, { volume: 0.5 });

  function click() {
    if (get(index) === false) {
        fn(index, true);
        play(); 
      }
    }

  return (
    <motion.div 
      whileHover={{
        scale: 1.05
      }}
      whileTap={{
        scale: 0.90
      }}
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}

    onClick={click} className={`relative size-28 cursor-pointer`}>
      <motion.img
        className={`size-28 absolute delay-150 transition-all`}
        src={get(index) == true ? ripped : normal  }
        alt="desenho balão pixelart"
        initial={{ opacity: 1, scale: 1 }}
        animate={get(index) == true ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5, // Duração da animação
          ease: "backOut",
        }}
      ></motion.img>
       
    </motion.div>
  );

}
