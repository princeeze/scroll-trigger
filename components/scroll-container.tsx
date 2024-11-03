"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ScrollContainer({ children }: { children: React.ReactNode }) {
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
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
