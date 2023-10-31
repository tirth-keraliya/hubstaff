import React from "react";
import Image from "next/image";

const ImageTag = ({
  src,
  alt = "defult-img",
  width = "auto",
  height = "auto",
  priority = "false",
  className,
}) => {
  return (
    <Image
      src={src}
      className={className}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
    />
  );
};

export default ImageTag;
