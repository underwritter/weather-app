import React, {FC} from "react";
import "./style.sass";

interface ICustomButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton: FC<ICustomButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={!disabled ? "custom_button" : "custom_button_disabled"}
      children={children}
      type={type}
      onClick={onClick}
    />
  );
};
