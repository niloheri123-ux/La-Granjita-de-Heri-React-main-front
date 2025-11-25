import React from "react";
import { Container, Button, Card  } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Vaca from '../assets/img/Vaca.webp';
import Cerdo from '../assets/img/Cerdo.webp';

function Blog() {
  const navigate = useNavigate();
  
  return (
    <Container className="my-5">
      <Row>
        <Col>
      <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Vaca} />
        <Card.Body>
          <Card.Title>Vaca</Card.Title>
          <Card.Text>
              
          </Card.Text>

          <Button variant="success" onClick={() => navigate('/Blog1')}>
            Por aqui algunos datos curioso de las vaquitas
          </Button>
          
        </Card.Body>
    </Card>
      </Col>

    <Col>
    <Card style={{ width: '30rem' }}>
        <Card.Img variant="top" src={Cerdo} />
        <Card.Body>
          <Card.Title>cerdito</Card.Title>
          <Card.Text>
              
          </Card.Text>


          <Button variant="success" onClick={() => navigate('/Blog2')}>
            Por aqui algunos datos curioso de los cerditos
          </Button>
        </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
  );
}

export default Blog;



