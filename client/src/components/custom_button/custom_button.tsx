import React, {FC} from "react";
import cn from "classnames";
import "./style.sass";

interface ICustomButtonProps {
  children: string;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
}

export const CustomButton: FC<ICustomButtonProps> = ({
  children,
  type,
  disabled = false,
  onClick,
  className,
}) => {
  
  const buttonClass= !disabled ? "custom_button" : "custom_button_disabled"

  
  return (
    <button
      className={cn(buttonClass,className)}
      children={children}
      type={type}
      onClick={onClick}
    />
  );
};
