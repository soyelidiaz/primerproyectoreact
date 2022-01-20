import {Link} from "react-router-dom";
import {Card,Button} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
const styles={
  cardContainer:{
    marginBottom:"10px",
    width: '18rem',
    
  },
  cardBody:{

  }
}

function Personajes(props) {
    const {chicharron} = props
  return (
    <Col>
        <Card style={styles.cardContainer}>
            <Card.Img variant="top"  src={chicharron.image} />
            <Card.Body>
            <Card.Title>{chicharron.name}</Card.Title>
            <Card.Title>{chicharron.gender}</Card.Title>
            <Card.Text>
            {chicharron.type} </Card.Text>
            <Button variant="dark" as={Link} to={"/Personajes/"+chicharron.id}>Detalle</Button>
            </Card.Body>
          <Card.Footer>
          <small className="text-muted">Originario de: {chicharron.origin.name}</small>
          </Card.Footer>
        </Card>
        </Col>
  );
}

export default Personajes;