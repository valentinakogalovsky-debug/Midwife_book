import Image from "next/image";

type PhotoFrameProps = {
  alt: string;
  className?: string;
  height: number;
  imageClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  src: string;
  width: number;
};

export function PhotoFrame({
  alt,
  className = "",
  height,
  imageClassName = "",
  objectPosition = "center",
  priority = false,
  src,
  width
}: PhotoFrameProps) {
  return (
    <div className={`overflow-hidden rounded-card border border-line bg-blushSoft shadow-soft ${className}`}>
      <Image
        alt={alt}
        className={`h-full w-full object-cover ${imageClassName}`}
        height={height}
        priority={priority}
        src={src}
        style={{ objectPosition }}
        width={width}
      />
    </div>
  );
}
