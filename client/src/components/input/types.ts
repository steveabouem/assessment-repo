export interface InputProps {
    label: string;
    name: string;
    inputType: string;
    handleChange: (v: string) => void;
    placeholder?: string;
}