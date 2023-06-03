import { ReactNode } from "react";

import { ReactPortal } from "../ReactPortal";
import { ReactComponent as Cross } from "./cancel_16.svg";
import classes from "./Modal.module.css";

type ModalProps = {
  children: ReactNode;
  opened: boolean;
  onClose: () => void;
};

export function Modal({ children, opened, onClose }: ModalProps) {
  if (!opened) return null;

  return (
    <ReactPortal>
      <div aria-hidden className={classes.overlay} onClick={onClose} />
      <div className={classes.modal}>
        <button className={classes.close} onClick={onClose}>
          <Cross />
        </button>
        {children}
      </div>
    </ReactPortal>
  );
}
