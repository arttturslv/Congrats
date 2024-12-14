import { motion } from "motion/react";
import Navbar from "../../components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";

export default function Home() {
  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="h-[100dvh] max-w-[1600px] flex flex-col place-self-center sm:px-12 px-4"
    >
      <Navbar></Navbar>

      <div className="space-y-12 sm:pt-12 pt-2 pb-2">
        <Hero></Hero>

        <About></About>

        <Footer></Footer>
      </div>
    </motion.div>
  );
}
