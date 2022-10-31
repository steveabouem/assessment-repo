export interface TabContainerProps {
    header: string;
    children: JSX.Element;
}

export interface StudentSearchResults {
    success: boolean;
    message?: string;
    data: Student[];
}

export interface Student {
    id: number;
    first_name: string;
    last_name: string;
    school_name: string;
    grade: string;
}
