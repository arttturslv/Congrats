import { Link } from "react-router-dom";
import { useEffect, useState, useRef, Component } from "react";
import ImageCaption from './ImageCaption'
import { motion, useAnimationControls } from "motion/react";
import Countdown from '../../components/Countdown'
import Navbar from "../../components/Navbar";
export default function Viewer({card}) {
 
  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }} 
      className="px-5 h-[100dvh] max-w-[402px] flex flex-col place-self-center">
      <Navbar></Navbar>

      <div className="space-y-4">
            <div className="space-y-0">
              <h3 className="text-lg">
                {card.title}, {card.receiverName}!
              </h3>
              <h5 className="text-xs">De: {card.senderName}</h5>
            </div>

            <Countdown ></Countdown>

            {card.pictures &&
              card.pictures.map((item, index) => {
                return (
                  <ImageCaption
                    title={item?.title}
                    date={item?.date}
                    description={item?.description}
                    image={item?.file}
                    key={index}
                  ></ImageCaption>
                );
              })}
          </div>

    </motion.div>
  );
}
