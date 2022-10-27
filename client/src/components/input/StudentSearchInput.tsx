import React, { useEffect, useState } from 'react';
import {Field} from 'formik';
import { InputProps } from './types';

const StudentSearchInput = ({ label, name, inputType, placeholder, handleChange}: InputProps) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        handleChange(value);
    }, [value]);

    return (
        <div>
            <label>{label}</label>
            <Field name={name} type={inputType} placeholder={placeholder} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e?.target?.value)} value={value} /> 
        </div>
    );
};

export default StudentSearchInput;