import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/** Fills its (relatively positioned) parent. Swap the src for a real photo any time. */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "100vw",
  priority = false,
}: Props) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer ${className}`}
    />
  );
}
