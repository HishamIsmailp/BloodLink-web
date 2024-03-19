import React from "react";

interface ButtonInputProps {
  type: "button" | "submit" | "reset" | undefined;
  css?: any;
  icon?: any;
  name: string;
  onClick?: () => void;
}

const SubButton: React.FC<ButtonInputProps> = ({
  type,
  css,
  icon,
  name,
  onClick,
  ...rest
}) => {
  return (
    <button onClick={onClick} {...rest} className={css} type={type}>
      {name} {icon}
    </button>
  );
};

export default SubButton;
