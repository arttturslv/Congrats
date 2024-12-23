import { motion } from "motion/react";
import Navbar from "../../components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Why from "./components/Why";
import { useState, useEffect } from "react";
import { getCardQuantity } from "../../hooks/useAPI";
import Line from "../../components/Line";
export default function Home() {
  const [quantityOfUsers, setQuantityOfUsers] = useState(null);

  useEffect(() => {
    const fetchQuantityUsers = async () => {
      try {
        const data = await getCardQuantity();
        console.log(data);
        setQuantityOfUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    if (quantityOfUsers == null) {
      fetchQuantityUsers();
    }
  }, []);

  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="h-[100dvh] max-w-[1600px] w-[100vw]  px-4 sm:px-10  flex flex-col place-self-center"
    >
      <Navbar></Navbar>

      <div className="space-y-8 pt-0 pb-16 ">
        <Hero />

        <div className="h-2  pt-4 pb-12 flex items-center justify-center">
        <Line customStyle={"bg-redHighlight/50 w-[100%] mx-0 sm:mx-4 "}></Line>

        <div>
        <p className="font-zig text-xs sm:text-base lg:text-xl w-[70vw] max-w-[500px] text-center ">
        Já geramos mais de {quantityOfUsers} mensagens especiais para nossos usuários!
            </p>
          </div>
          <Line customStyle={"bg-redHighlight/50 w-[100%] mx-0 sm:mx-4 "}></Line>
          </div>

        <About />

        <div className=" h-2 py-12 flex items-center justify-center">
        <Line customStyle={"bg-redHighlight/50 w-[100%] mx-0 sm:mx-4 "}></Line>

          <div>
          <p className="font-zig text-xs sm:text-base lg:text-xl w-[70vw] max-w-[500px] text-center ">
          Transforme momentos especiais em lembranças únicas!
            </p>
          </div>
          <Line customStyle={"bg-redHighlight/50 w-[100%] mx-0 sm:mx-4 "}></Line>
          </div>

        <Why />
      </div>
      <Footer></Footer>


    </motion.div>
  );
}
