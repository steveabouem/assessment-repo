import jsPDF from "jspdf";
import { Button } from "reactstrap";

const GenerateDocButton = ({body, headers}: any) => {
    // React table matches the exact string of the headers to the keys in the body (rows)
    // column names in snake case (e.g: first_name)
    // I opted to transform the headers here to avoid the pdf showing 

    const generate = () => {
        const doc = new jsPDF({
            unit: 'pc'
        });
        const formattedHeaders = headers.reduce((list: any, current: any) => (
            [...list, current.Header]), []);

        const formattedRows = body.reduce((list: any, current: any) => {
            const info = Object.keys(current).filter((key: string) => key !== 'id');
            const currentObj = info.reduce((obj:any, key: string) => (
                {...obj, [key.replace('_', ' ').replace(
                    /\w\S*/g,
                    function(txt) {
                      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                    }
                  )]: current[key]}
            ), {});
                    
            return [...list, currentObj];
        }, []);
        const school = formattedRows[0]['School Name'];
        const fileName = `${school}'s Computed Averages`;
        
        doc.text(fileName, 5, 5);
        doc.setFillColor('#9aa182');
        doc.table(5, 10, 
            formattedRows,
            formattedHeaders,
            {
                padding: 1,
                margins: 0,
                autoSize: true,
                headerBackgroundColor: '#21252f',
                headerTextColor: '#647768'
            });
        doc.save(fileName);
    };

    return <Button onClick={() => generate()}>Download PDF</Button>
};

export default GenerateDocButton;