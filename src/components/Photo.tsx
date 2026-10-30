import Image from "next/image";

import type { Photo as PhotoData } from "@/data/photos";

type Props = {
  photo: PhotoData;
  sizes: string;
  className?: string;
  imageClassName?: string;
  position?: string;
  priority?: boolean;
  /** 親要素が別の場所に「仮画像」を表示するときだけ false にします */
  showTag?: boolean;
  /** 親がボタンなどで、説明を別に持つ場合は空にします */
  decorative?: boolean;
};

/** ボタンの中にも置けるよう、div を使わず span で組みます */
export function Photo({
  photo,
  sizes,
  className = "",
  imageClassName = "",
  position,
  priority = false,
  showTag = true,
  decorative = false,
}: Props) {
  return (
    <span className={`relative block overflow-hidden bg-ink ${className}`}>
      <Image
        src={photo.src}
        alt={decorative ? "" : photo.alt}
        fill
        sizes={sizes}
        quality={priority ? 80 : 72}
        priority={priority}
        placeholder="blur"
        className={`object-cover ${imageClassName}`}
        style={position ? { objectPosition: position } : undefined}
      />
      {photo.placeholder && showTag ? <span className="photo-tag">仮画像</span> : null}
    </span>
  );
}
