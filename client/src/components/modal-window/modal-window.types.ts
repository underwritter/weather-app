import {ReactNode} from "react";

export interface IModalWindowProps {
  isActive: Boolean;
  onClose: VoidFunction;
  children: ReactNode;
}
