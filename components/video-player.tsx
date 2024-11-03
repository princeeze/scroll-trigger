export default function VideoPlayer({
  src,
  poster,
}: {
  src: string;
  poster: string;
}) {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full object-contain"
      src={src}
      poster={poster}
    >
      <p>Your browser does not support the video tag.</p>
    </video>
  );
}
