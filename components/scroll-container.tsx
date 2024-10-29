"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollContainer() {
  const videoDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoDiv,
    offset: ["40% end", "end end"],
  });

  const widthLevel = useTransform(scrollYProgress, [0, 1], ["50vw", "100vw"]);

  return (
    <div
      ref={videoDiv}
      className="h-[150dvh] relative w-full flex justify-center bg-black"
    >
      <motion.div
        className=" sticky h-[100dvh] w-full p-[1vw] flex  top-0 "
        style={{ width: widthLevel }}
      >
        <video src="/video.mp4" className="w-full" autoPlay muted loop></video>
      </motion.div>
    </div>
  );
}
