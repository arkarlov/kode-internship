import { ReactNode } from "react";

import { Button } from "../Button";
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
        <Button className={classes.close} onClick={onClose} rounded>
          <Cross />
        </Button>
        {children}
      </div>
    </ReactPortal>
  );
}
