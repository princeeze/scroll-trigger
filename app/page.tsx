"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const videoDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoDiv,
    offset: ["40% end", "end end"],
  });

  const widthLevel = useTransform(scrollYProgress, [0, 1], ["50vw", "100vw"]);

  return (
    <div className="text-[#2E2E2E]">
      <div className="h-[100dvh] p-[3vw] w-full flex items-end">
        <p className="text-[10vw] flex flex-col leading-[9vw]  tracking-[-0.04em]">
          <span>WE ARE</span>
          <span>A CREATIVE</span>
          <span>DESIGN STUDIO</span>
        </p>
      </div>
      <div
        ref={videoDiv}
        className="h-[150dvh] relative w-full flex justify-center bg-black"
      >
        <motion.div
          className=" sticky h-[100dvh] w-full p-[1vw] flex  top-0 "
          style={{ width: widthLevel }}
        >
          <video
            src="/video.mp4"
            className="w-full"
            autoPlay
            muted
            loop
          ></video>
        </motion.div>
      </div>
      <div className=" p-[5vw] w-full flex flex-col items-center gap-[3vw] pt-[8vw]">
        <p className="text-[10vw] leading-[9vw]  tracking-[-0.04em]">
          WORK<sup className="text-[4vw] -top-[1.25em]">(24)</sup>
        </p>
        <div className="grid grid-cols-2  w-full gap-[2vw]">
          <div className="bg-[#2E2E2E] w-full aspect-[1.2]"></div>
          <div className="bg-[#2E2E2E] w-full aspect-[1.2]"></div>
          <div className="bg-[#2E2E2E] w-full aspect-[1.2]"></div>
          <div className="bg-[#2E2E2E] w-full aspect-[1.2]"></div>
          <div className="bg-[#2E2E2E] w-full aspect-[1.2]"></div>
          <div className="bg-[#2E2E2E] w-full aspect-[1.2]"></div>
        </div>
      </div>
    </div>
  );
}
