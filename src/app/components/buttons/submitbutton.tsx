import React from "react";


interface ButtonInputProps {
type: "button" | "submit" | "reset" | undefined;
css?:any;
icon?:any;
name:string;
onClick?: any;
}

const SubButton:React.FC<ButtonInputProps> =({
    type,
    css,
    icon,
    name,
    onClick

}) => {
    return (
        <button
              onClick={() => {onClick()}}
              className={css}
              type={type}
            >
              {name} {icon}
            </button>
    );
};

export default SubButton;