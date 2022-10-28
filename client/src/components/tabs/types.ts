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
    firstName: string;
    lastName: string;
    schoolName: string;
    grade: string;
}
