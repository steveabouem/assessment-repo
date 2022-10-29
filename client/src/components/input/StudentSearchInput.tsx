import React, { useEffect, useState } from 'react';
import {Field} from 'formik';
import { InputProps } from './types';

const StudentSearchInput = ({ label, name, inputType, placeholder, handleChange}: InputProps) => {
    const [value, setValue] = useState<string>('');

    useEffect(() => {
        handleChange(value);
    }, [value]);

    return (
        <div className="student-search-input d-flex align-items-end justify-content-between  w-100 mb-4">
            <label className="h-100 d-flex flex-column justify-content-end">{label}</label>
            <Field className="w-75 h-100 p-2" name={name} type={inputType} placeholder={placeholder} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e?.target?.value)} value={value} /> 
        </div>
    );
};

export default StudentSearchInput;