import { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Student } from "../types";
import StudentSearchInput from "../../input/StudentSearchInput";
import StudentsTable from "./StudentsTable";
import "./styles.scss";

const StudentLookupTab = () => {
    const [results, setResults] = useState<Student[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const searchBySchool = async (v: string) => {
        if (!v) {
            setIsSearching(false);
            return;
        }

        setIsSearching(true);
        const {data} = await axios.get(`//localhost:3001/students?school=${v}`);
        setResults(data.data);
    };


    return (
        <div>
            <h2>Lookup tool</h2>
            <div className="student-search-wrapper m-auto">
                <Formik
                    initialValues={{schoolName: ''}}
                    onSubmit={() => console.log('submitted')}
                >
                    <StudentSearchInput 
                        label="Search for a school" 
                        name="schoolName" 
                        placeholder="e.g: MIT" 
                        handleChange={searchBySchool} 
                        inputType="text"
                    />  
                </Formik>
                <div>
                    <StudentsTable students={results} isSearching={isSearching} />
                </div>
            </div>
        </div>
    );
};

export default StudentLookupTab;