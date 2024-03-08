import React from 'react';

interface FormInputProps {
    id?:string;
    type: string;
    label?: string;
    placeholder?: string;
    css?: string;
    takeValue?:any;
    helpertaxt?:string;
    onClick?: any; 
}

const FormInputText: React.FC<FormInputProps> = ({
    id,
    type,
    label,
    placeholder,
    css,
    takeValue,
    helpertaxt,
    onClick,
    ...rest
}) => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <input
            id={id}
            type={type}
            aria-label={label}
            placeholder={placeholder}
            className={css}
            onChange={() => {onClick()}}
            {...takeValue}
            {...rest}   
        />
        <span color='red'>{helpertaxt}</span>
        </div>
    );
};

export default FormInputText;
