import React, {FC} from "react";
import "./style.sass";

interface CustomButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const CustomButton: FC<CustomButtonProps> = ({
  children,
  type,
  disabled,
  onClick,
}) => {
  return (
    <button
      className={disabled ? "custom_button" : "disabled"}
      children={children}
      type={type}
      onClick={onClick}
    />
  );
};
