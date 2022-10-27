import { useState } from "react";
import { Field, Formik } from "formik";
import axios from "axios";
import { Student } from "./types";
import { CreateStudentDTO } from "./create-student.dto";

const CreateStudentTab = () => {
    const [studentCreated, setStudentCreated] = useState<boolean>(false);

    const handleSubmit = async (values: CreateStudentDTO) => {
        await axios.post<CreateStudentDTO>('//localhost:3001/students', {...values});
        setStudentCreated(true);
    };

    

    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                schoolName: '',
                grade: '',
            }}
            onSubmit={handleSubmit}
        >
            {({values, submitForm, isSubmitting}) => (
                <>
                    <label>firstName</label>
                    <Field name="firstName" />
                    <label>lastName</label>
                    <Field name="lastName" />
                    <label>schoolName</label>
                    <Field name="schoolName" />
                    <label>grade</label>
                    <Field name="grade" />
                    <button onClick={()=> submitForm()} disabled={isSubmitting}>Submit</button>
                </>
            )}
        </Formik>
    )
};

export default CreateStudentTab;