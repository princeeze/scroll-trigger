import Loading from "@/components/loading";
import { ScrollContainer } from "@/components/scroll-container";
import VideoPlayer from "@/components/video-player";

export default function Home() {
  const src =
    "https://sftybvsuremldvtipxoq.supabase.co/storage/v1/object/public/video/background.mp4";
  const poster = "/poster.png";

  return (
    <div className="text-[#2E2E2E]">
      <Loading />
      <div className="h-[100dvh] p-[3vw] w-full flex items-end">
        <p className="text-[10vw] flex flex-col leading-[9vw]  tracking-[-0.04em]">
          <span>WE ARE</span>
          <span>A CREATIVE</span>
          <span>DESIGN STUDIO</span>
        </p>
      </div>
      <ScrollContainer>
        <VideoPlayer src={src} poster={poster} />
      </ScrollContainer>
      <div className=" px-[5vw] w-full flex flex-col items-center gap-[3vw] py-[12vw]">
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
