import {ReactNode} from "react";

export interface IModalWindowProps {
  active: Boolean;
  onClose: VoidFunction;
  children: ReactNode;
}
