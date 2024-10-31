// components/VideoPlayer.tsx

export default function VideoPlayer({ src }: { src: string }) {
  return (
    <div className="h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="h-full w-full object-contain"
        src={src}
      />
    </div>
  );
}
