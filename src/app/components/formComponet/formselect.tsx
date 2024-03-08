import React from 'react';

interface FormInputProps {
    label?: string;
    css?: string;
    takeValue?:any;
    helpertaxt?:string;
    options:any
}

const FormSelectInput: React.FC<FormInputProps> = ({
    label,
    css,
    takeValue,
    helpertaxt,
    options
}) => {
    return (
        <div style={{display:"flex",flexDirection:"column"}}>
            <select
                    className={css}
                    aria-label={label}
                  >
                    <option selected {...takeValue}></option>
                    <option></option>
                    {options.map((data: any, index: React.Key | null | undefined) => (
                      <option value={data} key={index}>{data}</option>
                    ))}
                  </select>
        <span color='red'>{helpertaxt}</span>
        </div>
    );
};

export default FormSelectInput;
