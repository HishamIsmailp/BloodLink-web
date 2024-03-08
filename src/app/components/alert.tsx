import React from "react";

interface AlertInputProps {
    alertMessage:string;
    css:string;

}
  
const Alert:React.FC<AlertInputProps> =({
alertMessage,
css,
}) => {
    return (
        <div className={css} role="alert">
            {alertMessage}
          </div>
    );
};

export default Alert