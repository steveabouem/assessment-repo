import { toast } from "react-toast";

export const useToast = () => {

    const showCustomSuccess = () =>
    toast.success('Student file cureated.', {
      backgroundColor: "#cafcd6",
      color: "#0e1218"
    });
    
    const showCustomError = () =>
    toast.error('Unable to create student', {
      backgroundColor: "#ffd519",
      color: "#0e1218"
    });

  return { showCustomError, showCustomSuccess };
};

export default useToast;