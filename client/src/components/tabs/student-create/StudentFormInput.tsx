import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import { StudentFieldProps } from "./types";

const StudentFormInput = ({label, icon, fieldName, children}: StudentFieldProps) => {
    return (
        <div className="d-flex flex-column p-2 my-4 w-100">
            <label className="mb-2 d-flex align-items-baseline">
                {label}
                <FontAwesomeIcon icon={icon} className="mx-2" />
            </label>
            {children ? <Field name={fieldName}>
                {() => children}</Field> : <Field name={fieldName} />}
        </div>
    );
};

export default StudentFormInput;