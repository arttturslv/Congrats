import ImageCaption from "./components/ImageCaption";
import Countdown from "../../components/Countdown";
import Navbar from "../../components/Navbar";
import { motion } from "motion/react";
import Line from "../../components/Line";
import VideoIframe from "./components/VideoIframe";
import ShareCard from "./components/ShareCard";
export default function CardViewer({ card, teste = false }) {
  
  return (
    <motion.div
      transition={{ ease: "easeInOut" }}
      animate={{ opacity: [0, 1] }}
      className="min-h-[100dvh] max-w-[402px] overflow-x-hidden flex flex-col place-self-center pb-16"
    >
      <div className={`${!teste && "px-4"}`}>
        {!teste && <Navbar></Navbar>}

        <Countdown date={card?.dateMet}></Countdown>

        <div className="space-y-3 ">
          <div className="space-y-0">
            <h3 className="text-lg font-zig">
              {card.title}
            </h3>
            <h5 className="text-xs">De: {card.senderName}</h5>
          </div>

          <div>
            {card.pictures &&
              card.pictures.map((item, index) => {
                return (
                  <>
                    <ImageCaption
                      title={item?.title}
                      date={item?.date}
                      description={item?.description}
                      image={item?.file}
                      key={index}
                    ></ImageCaption>
                    <Line></Line>
                  </>
                );
              })}
          </div>

          <VideoIframe teste={teste} URL={card?.youtubeURL} />
        </div>

        <ShareCard teste={teste} pictures={card.pictures} receiverName={card.receiverName} title={card.title} senderName={card.senderName}></ShareCard>
        
      </div>
    </motion.div>
  );
}
