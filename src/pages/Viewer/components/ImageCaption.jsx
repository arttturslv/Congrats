import { ImageView } from "../../../components/ImageView";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "motion/react";

function useParallax(value, distance) {
  return useTransform(value, [0, 60], [-distance, distance]);
}

export default function ImageCaption({ image, title, date, description, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref,  offset: ["start center", "end center"]  });
  const y = useParallax(scrollYProgress, 0);
  const opacity = useTransform(scrollYProgress, [1, 0.6], [0.05, 1]); 

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        opacity,
      }}
      className="space-y-2 py-4"
    >
      <ImageView title={title} date={date} image={image} />
      <motion.p className="text-sm tracking-[2px] max-w-[400px] text-justify flex place-self-center">
        {description}
      </motion.p>
    </motion.div>
  );
}
