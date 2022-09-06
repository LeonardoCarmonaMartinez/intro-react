import CardImport from "react-bootstrap/Card";

const Tarjeta = ({url, titulo, descripcion}) => {
    return (
        <div>
            <CardImport style={{ width: "18rem" }}>
                <CardImport.Img variant="top" src={url}/>
                <CardImport.Body>
                    <CardImport.Title>{titulo}</CardImport.Title>
                    <CardImport.Text>{descripcion}</CardImport.Text>
                </CardImport.Body>
            </CardImport>
        </div>
    );    
};

export default Tarjeta;