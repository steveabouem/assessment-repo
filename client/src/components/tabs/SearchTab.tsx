import { useEffect, useState } from "react";
import axios from "axios";
import { Formik } from "formik";
import { Student } from "./types";
import StudentSearchInput from "../input/StudentSearchInput";

const SearchStudentsTab = () => {
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
            <Formik
                initialValues={{schoolName: ''}}
                onSubmit={() => console.log('aight')}
            >
                <StudentSearchInput 
                    label="look up" 
                    name="schoolName" 
                    placeholder="e.g: MIT" 
                    handleChange={searchBySchool} 
                    inputType="text"
                />  
            </Formik>
            <div>
                <h3>Results</h3>
                { !isSearching && 'No search' }
                { results.length > 0 &&  results.map((s: Student, i: number) => (
                    <div key={i}>{s.firstName}</div>
                ))}
                {isSearching && !results.length && <div>No reasult</div>}
            </div>
        </div>
    );
};

export default SearchStudentsTab;