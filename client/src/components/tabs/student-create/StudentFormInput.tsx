import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Field } from "formik";
import { StudentFieldProps } from "./types";

const StudentFormInput = ({label, icon, fieldName, error, children}: StudentFieldProps) => {
    return (
        <div className="d-flex flex-column p-2 my-4 w-100">
            <label className="mb-2 d-flex align-items-baseline">
                <FontAwesomeIcon icon={icon} className="mr-2" />
                <span className="mx-2">{label}</span>
            </label>
            {children ? <Field name={fieldName}>
                {() => children}</Field> : <Field name={fieldName} />}
                {error && <div className="input-error">{error}</div>}
        </div>
    );
};

export default StudentFormInput;