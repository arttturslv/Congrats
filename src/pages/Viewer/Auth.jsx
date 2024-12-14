import Navbar from "../../components/Navbar";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function Auth({ setPassKey, passKey }) {
  const [inputValue, setInputValue] = useState(null);

  const [message, setMessage] = useState(
    `Você tem uma mensagem, mas precisa da senha!`
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

  const handleClick = (e) => {
    e.preventDefault();
    console.log(inputValue);
    setPassKey(inputValue)
  };

  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="px-5 h-[100dvh] max-w-[402px] flex flex-col place-self-center "
    >
      <Navbar></Navbar>

      <div className="h-full flex-1 flex flex-col items-center justify-center jus space-y-4 transition-all duration-700  ">
        <span className="flex gap-1 items-center">
          <h3 className="text-lg">{messageAnimated}</h3>
          <img className="size-10" src="/src/assets/images/lock/locked.png" />
        </span>
        <form className="flex gap-2">
          <input
            className="w-full bg-dark border-redHighlight border-4 px-3 py-1 placeholder:text-sm"
            type="text"
            name="inputPassName"
            id="inputPassName"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="******"
            required
          />
           <button
                className="w-12 flex justify-center items-center bg-dark border-redHighlight border-4 py-1"
                id="continuar"
                onClick={(e) => handleClick(e)}
              >
                <>
                  <img
                    className="fill-light size-4 "
                    src="../src/assets/images/arrow.png"
                    alt="share icon"
                  />
                </>
              </button>
        </form>
      </div>
    </motion.div>
  );
}
