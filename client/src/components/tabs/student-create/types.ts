export interface StudentGradeOption {
    label: string;
    value: string;
}

export interface StudentFieldProps {
    label: string;
    fieldName: string;
    icon: any;
    children?: JSX.Element;
}