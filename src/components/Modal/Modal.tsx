import { ReactNode } from "react";

import { Button } from "../Button";
import { Icon } from "../Icon";
import { ReactPortal } from "../ReactPortal";
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
          <Icon name="cross" size="sm" />
        </Button>
        {children}
      </div>
    </ReactPortal>
  );
}
