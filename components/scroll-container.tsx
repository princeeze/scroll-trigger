"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import VideoPlayer from "./video-player";

export function ScrollContainer() {
  const videoDiv = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: videoDiv,
    offset: ["40% end", "end end"],
  });

  const heightLevel = useTransform(
    scrollYProgress,
    [0, 1],
    ["40dvh", "100dvh"]
  );

  return (
    <div
      ref={videoDiv}
      className="h-[150dvh] relative w-full flex justify-center bg-black"
    >
      <motion.div className=" sticky h-[100dvh] w-full flex  top-0 justify-center items-center ">
        <motion.div
          className="w-full p-[1dvh] flex justify-center items-center"
          style={{ height: heightLevel }}
        >
          <VideoPlayer src="https://zgedlwpfczwztvxbgywz.supabase.co/storage/v1/object/public/video/-ed85-43aa-86d5-96d4b88caa8c.mpd" />
        </motion.div>
      </motion.div>
    </div>
  );
}
