import { ScrollContainer } from "@/components/scroll-container";

export default function Home() {
  return (
    <div className="text-[#2E2E2E]">
      <div className="h-[100dvh] p-[3vw] w-full flex items-end">
        <p className="text-[10vw] flex flex-col leading-[9vw]  tracking-[-0.04em]">
          <span>WE ARE</span>
          <span>A CREATIVE</span>
          <span>DESIGN STUDIO</span>
        </p>
      </div>
      <ScrollContainer />
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
