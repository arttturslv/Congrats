import Navbar from "../../components/Navbar";
import Balloon from "../../components/Balloon";
import { useEffect, useState } from "react";
import { motion, useAnimationControls } from "motion/react";

import BallonBlue from "../../assets/images/balloon-blue.png";
import BallonRed from "../../assets/images/balloon-red.png";
import BallonYellow from "../../assets/images/balloon-yellow.png";

import BallonBlueR from "../../assets/images/balloon-blue-ripped.png";
import BallonRedR from "../../assets/images/balloon-red-ripped.png";
import BallonYellowR from "../../assets/images/balloon-yellow-ripped.png";

export default function Introduction({setShowPage, receiver, setCard}) {
  const [clicked, setClicked] = useState([false, false, false]); // Array para controlar os estados

  const [message, setMessage] = useState(
    `Oi, ${receiver}! \n Você tem um presente...`
  );
  const [messageAnimated, setMessageAnimated] = useState("");
  const [indexMessage, setIndexMessage] = useState(0);

  useEffect(() => {
    if (indexMessage < message.length) {
      const timer = setTimeout(() => {
        setMessageAnimated((prev) => prev + message[indexMessage]);
        setIndexMessage((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timer);
    }
  }, [indexMessage, messageAnimated]);

  const handleClick = (index, status) => {
    setClicked((prev) => {
      const updated = [...prev];
      updated[index] = status;
      return updated;
    });
  };

  const handleGet = (index) => {
    return clicked[index];
  };

  const allGone = clicked.every((state) => state === true);

  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="px-5 h-[100dvh] max-w-[402px] flex flex-col place-self-center "
    >
      <Navbar></Navbar>

      <div className="h-full flex-1 flex flex-col items-center justify-center jus space-y-4 transition-all duration-700  ">
        <h3 className="text-lg">{messageAnimated}</h3>

        <motion.div 
          animate={{
            y:[280, 0],
            opacity: [0,1]

          }}
          transition={{
            duration: 2
          }}
        className="space-y-4 ">
          <div className={`relative w-64 h-36 transition-all duration-700 `}>
            <div className="left-0 top-8 absolute">
              <Balloon
                fn={handleClick}
                get={handleGet}
                index={0}
                normal={BallonBlue}
                ripped={BallonBlueR}
              ></Balloon>
            </div>

            <div className="left-32 top-3 absolute">
              <Balloon
                fn={handleClick}
                get={handleGet}
                index={1}
                normal={BallonRed}
                ripped={BallonRedR}
              ></Balloon>
            </div>

            <div className="left-14 top-16 absolute">
              <Balloon
                fn={handleClick}
                get={handleGet}
                index={2}
                normal={BallonYellow}
                ripped={BallonYellowR}
              ></Balloon>
            </div>
          </div>

          <div className="flex flex-col items-center space-y-2 transition-all duration-[3000ms]">
            <motion.img
              className={`size-32`}
              src="./src/assets/images/gift-box.png"
              alt="caixa de presente"
              animate={
                allGone
                  ? { y: -80, scale: 1.1 } // Desaparecer e escalar
                  : { y: [0, -8, 0], scale: 1, opacity: 1 } // Flutuar
              }
              transition={
                allGone
                  ? { duration: 2, ease: "easeInOut" } // Transição única
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" } // Loop
              }
              onAnimationComplete={() => {
                if (allGone) {
                  // Esperar 1 segundo após a última animação
                  setTimeout(() => {
                    animate={
                      scale: 100
                    }

                  }, 3000);
                  setShowPage(true)
                }
              }}
            ></motion.img>
            <h5
              className={`text-sm text-center ${
                !allGone && messageAnimated.length >= message.length ? "animate-pulse" : "hidden"
              }`}
            >
              Exploda os balões
            </h5>
            <h5
              className={`text-sm text-center ${
                allGone ? "animate-pulse" : "hidden"
              }`}
            >
              Vamos lá...
            </h5>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
