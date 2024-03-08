import React from 'react';

interface FormInputProps {
    label?: string;
    placeholder?: string;
    css?: string;
    takeValue?:any;
    helpertaxt?:string;
}

const FormTextAreInput: React.FC<FormInputProps> = ({
    label,
    placeholder,
    css,
    takeValue,
    helpertaxt,
    ...rest
}) => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <textarea
            aria-label={label}
            placeholder={placeholder}
            className={css}
            {...takeValue}
            {...rest}
        />
        <span color='red'>{helpertaxt}</span>
        </div>
    );
};

export default FormTextAreInput;
