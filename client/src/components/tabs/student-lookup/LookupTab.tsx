import { useEffect, useState } from "react";
import axios from "axios";
import { Field, Formik } from "formik";
import { Student } from "../types";
import StudentsTable from "./StudentsTable";
import "./styles.scss";

const StudentLookupTab = () => {
    const [searchValue, setSearchValue] = useState<string>('');
    const [results, setResults] = useState<Student[]>([]);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const searchBySchool = async (v: string) => {
        setIsSearching(true);
        const {data} = await axios.get(`//localhost:3001/students?school=${v}`);
        setResults(data.data);
    };

    useEffect(() => {
        if (!searchValue) {
            setIsSearching(false);
            setResults([]);
            return;
        }

        searchBySchool(searchValue);
    }, [searchValue]);

    return (
        <div>
            <h3>Get Student Grades</h3>
            <div className="student-search-wrapper m-auto">
                <Formik
                    initialValues={{school_name: ''}}
                    onSubmit={() => {}}
                >
                    <div className="student-search-input d-flex align-items-end justify-content-between  w-100 mb-4">
                        <label className="h-100 d-flex flex-column justify-content-end">
                            Search for a school
                        </label>
                        <Field className="w-75 h-100 p-2" 
                            name="school_name" 
                            placeholder="e.g: MIT" 
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e?.target?.value)}
                            value={searchValue}
                        /> 
                    </div>
                </Formik>
                <div>
                    <StudentsTable students={results} isSearching={isSearching} />
                </div>
            </div>
        </div>
    );
};

export default StudentLookupTab;