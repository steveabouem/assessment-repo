import { Formik } from "formik";
import axios from "axios";
import Select from "react-select";
import { faGraduationCap, faSchoolFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import { Button } from "reactstrap";
import * as Yup from 'yup';
import { CreateStudentDTO } from "./create-student.dto";
import StudentFormInput from "./StudentFormInput";
import { StudentGradeOption } from "./types";
import "./styles.scss";
import useToast from "./useToast";


const grades: StudentGradeOption[] = [ 
    {label: "A+", value: "A+" }, {label: "A", value: "A" }, 
    {label: "A-", value: "A-" }, {label: "B+", value: "B+" },
    {label: "B-", value: "B-" }, {label: "C+", value: "C+" }, 
    {label: "D-", value: "D-" }, {label: "D+", value: "D+" },
    {label: "D-", value: "D-" }, {label: "F", value: "F"}
];

const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isActive || state.isFocused ? '#6c757d' : '#21252f',
      background: state.isActive || state.isFocused ? '#cafcd6' : 'white',
      padding: 5,
    }),
    control: (provided: any, state: any) => ({
      ...provided,
      width: '100%',
    }),
};

const CreateStudentTab = () => {
    const {showCustomSuccess, showCustomError } = useToast();

    const handleSubmit = async (values: CreateStudentDTO) => {
        axios.post<CreateStudentDTO>('//localhost:3001/students', {...values})
        .then(() => {
            showCustomSuccess();
        })
        .catch(() => {
            showCustomError();
        });
    };
    
    const validation =Yup.object().shape({
        first_name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        last_name: Yup.string()
          .min(2, 'Too Short!')
          .max(50, 'Too Long!')
          .required('Required'),
        grade: Yup.string().required('Required'),
        school_name: Yup.string().required('Required'),
    });

    return (
        <>
            <h3>Register a New Student</h3>
            <Formik
                initialValues={{
                    first_name: '',
                    last_name: '',
                    school_name: '',
                    grade: '',
                }}
                validationSchema={validation}
                onSubmit={handleSubmit}
            >
                {({errors, isValid, dirty, submitForm, isSubmitting, setFieldValue}) => (
                    <div className="new-student-form d-flex flex-column align-items-center justify-contet-between p-2 m-auto">
                        <StudentFormInput label="First Name" icon={faUser} error={errors?.first_name} fieldName="first_name" />
                        
                        <StudentFormInput label="Last Name" icon={faUser} error={errors?.last_name} fieldName="last_name" />
                       
                        <StudentFormInput label="School" icon={faSchoolFlag} error={errors?.school_name} fieldName="school_name" />
                       
                        <StudentFormInput label="Grade" icon={faGraduationCap} error={errors?.grade} fieldName="grade">
                            <Select
                                className="grades-list" captureMenuScroll isSearchable 
                                menuPlacement="top" menuShouldScrollIntoView onKeyDown={(e) => e.preventDefault()}
                                onChange={(grade) => setFieldValue('grade', grade?.value)}
                                styles={customStyles} options={grades} 
                            />
                        </StudentFormInput>

                        <div className="d-flex justify-content-end w-100 px-2">
                            <Button onClick={()=> submitForm()} disabled={isSubmitting || !isValid || !dirty}>Submit</Button>
                        </div>
                    </div>
                )}
            </Formik>
        </>
    )
};

export default CreateStudentTab;