import clsx from "clsx";

export type ImgSrcSet = {
  x1: string;
  x2?: string;
};

type PictureProps = {
  className?: string;
  title?: string;
  img: ImgSrcSet;
  webp?: ImgSrcSet;
};
export function Picture({ className, title = "", img, webp }: PictureProps) {
  return (
    <picture className={clsx(className)}>
      {webp && (
        <source
          type="image/webp"
          srcSet={`${webp.x1}${webp.x2 && ` 1x, ${webp.x2} 2x`}`}
        />
      )}
      <img
        src={img.x1}
        srcSet={img.x2 && `${img.x1} 1x, ${img.x2} 2x`}
        alt={title}
      />
    </picture>
  );
}
