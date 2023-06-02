import clsx from "clsx";

import { ImgSrcSet, Picture } from "../Picture";
import classes from "./ErrorMsg.module.css";
import common_png from "./images/flying-saucer_1f6f8.png";
import common_webp from "./images/flying-saucer_1f6f8.webp";
import common_png_2x from "./images/flying-saucer_1f6f8@2x.png";
import common_webp_2x from "./images/flying-saucer_1f6f8@2x.webp";
import search_png from "./images/left-pointing-magnifying-glass_1f50d.png";
import search_webp from "./images/left-pointing-magnifying-glass_1f50d.webp";
import search_png_2x from "./images/left-pointing-magnifying-glass_1f50d@2x.png";
import search_webp_2x from "./images/left-pointing-magnifying-glass_1f50d@2x.webp";

type ErrorMsgType = "common" | "search";

type ErrorMsgProps = {
  className?: string;
  errorType: ErrorMsgType;
  onAction?: () => void;
};

type ErrorMsgContent = {
  heading: string;
  description: string;
  icon: {
    img: ImgSrcSet;
    webp: ImgSrcSet;
  };
  actionText?: string;
};

const ERROR_CONTENT: {
  [key in ErrorMsgType]: ErrorMsgContent;
} = {
  common: {
    heading: "Какой-то сверхразум все сломал",
    description: "Постараемся быстро починить",
    icon: {
      img: {
        x1: common_png,
        x2: common_png_2x,
      },
      webp: { x1: common_webp, x2: common_webp_2x },
    },
    actionText: "Попробовать снова",
  },
  search: {
    heading: "Мы никого не нашли",
    description: "Попробуй скорректировать запрос",
    icon: {
      img: { x1: search_png, x2: search_png_2x },
      webp: { x1: search_webp, x2: search_webp_2x },
    },
  },
};

export function ErrorMsg({ className, errorType, onAction }: ErrorMsgProps) {
  const content = ERROR_CONTENT[errorType];

  return (
    <div className={clsx(classes.error, className)}>
      <Picture
        className={classes.icon}
        title={content.heading}
        img={content.icon.img}
        webp={content.icon.webp}
      />
      <h2 className={classes.heading}>{content.heading}</h2>
      <p className={classes.description}>{content.description}</p>
      {content.actionText && (
        <button
          className={classes.action}
          onClick={() => {
            onAction && onAction();
          }}
        >
          {content.actionText}
        </button>
      )}
    </div>
  );
}
