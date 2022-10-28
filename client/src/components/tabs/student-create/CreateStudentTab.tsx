import { useState } from "react";
import { Formik } from "formik";
import axios from "axios";
import Select from "react-select";
import { CreateStudentDTO } from "./create-student.dto";
import { faGraduationCap, faSchoolFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import StudentFormInput from "./StudentFormInput";
import { Button } from "reactstrap";
import { StudentGradeOption } from "./types";
import "./styles.scss";

const grades: StudentGradeOption[] = [ 
    {label: "A+", value: "A+" }, {label: "A-", value: "A-" }, 
    {label: "B+", value: "B+" }, {label: "B-", value: "B-" }, 
    {label: "C+", value: "C+" }, {label: "D-", value: "D-" }, 
    {label: "D+", value: "D+" }, {label: "D-", value: "D-" }, 
    {label: "F", value: "F"}
];

const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isActive || state.isFocused ? 'white' : 'black',
      background: state.isActive || state.isFocused ? '#eda1a1' : 'white',
      padding: 20,
    }),
    control: (provided: any, state: any) => ({
      // none of react-select's styles are passed to <Control />
      ...provided,
      width: '100%',
    }),
    // singleValue: (provided: any, state: any) => {
    //   const opacity = state.isDisabled ? 0.5 : 1;
    //   const transition = 'opacity 300ms';
  
    //   return { ...provided, opacity, transition };
    // }
};

const CreateStudentTab = () => {
    const [studentCreated, setStudentCreated] = useState<boolean>(false);

    const handleSubmit = async (values: CreateStudentDTO) => {
        await axios.post<CreateStudentDTO>('//localhost:3001/students', {...values});
        setStudentCreated(true);
    };

    

    return (
        <>
            <h2>Register a Student</h2>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    schoolName: '',
                    grade: '',
                }}
                onSubmit={handleSubmit}
            >
                {({values, submitForm, isSubmitting, setFieldValue}) => (
                    <div className="new-student-form d-flex flex-column align-items-center justify-contet-between w-25 p-2 m-auto">
                        <StudentFormInput label="First Name" icon={faUser} fieldName="firstName" />
                        
                        <StudentFormInput label="Last Name" icon={faUser} fieldName="lastName" />
                       
                        <StudentFormInput label="School" icon={faSchoolFlag} fieldName="schoolName" />
                       
                        <StudentFormInput label="Grade" icon={faGraduationCap} fieldName="grade">
                            <Select onChange={(grade) => setFieldValue('grade', grade?.value)} className="grades-list" styles={customStyles} options={grades} />
                        </StudentFormInput>

                        <div className="d-flex justify-content-end w-100 px-2">
                            <Button onClick={()=> submitForm()} disabled={isSubmitting}>Submit</Button>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
};

export default CreateStudentTab;