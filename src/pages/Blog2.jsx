import React from "react";
import { Container, Button, Card  } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Cerdo1 from '../assets/img/Cerdo_1.webp';
import Cerdo2 from '../assets/img/Cerdo_2.webp';
import Cerdo3 from '../assets/img/Cerdo_3.webp';

function Blog1() {
      const navigate = useNavigate();

  return (
    <Container className="my-5">
        <Button variant="success" onClick={() => navigate(`/Blogs`)}>
                  Volver
                </Button>
                
      <Row>
        <Col>
      <Card style={{ width: '25rem' }}>
        <Card.Img src={Cerdo1}  />
        <Card.Body>
          <Card.Text>
              Son extremadamente inteligentes Los cerdos están entre los animales más inteligentes del mundo. Se ha demostrado que tienen una inteligencia comparable a la de un niño de 3 años. Pueden aprender trucos, reconocer su nombre y resolver rompecabezas complejos.
          </Card.Text>
          <Button href="https://youtu.be/Q6aF4WRDOZc?si=Pn6tl84EHuzc2l5v" variant="primary">
            Por aqui algunos datos curioso de los cerditos
          </Button>
          
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '25rem' }}>
        <Card.Img src={Cerdo2}  />
        <Card.Body>
          <Card.Text>
              Los cerdos tienen los riñones mas alargados que un animal normal,
                    porque los cerdos tienden a tener muchas crias entonces necesitan mas espacio en el estomago,
                    pueden llegar a tener hasta 28 crias, !!ESO ES DEMACIADO¡¡
          </Card.Text>

          <Button href="https://youtu.be/Q6aF4WRDOZc?si=Pn6tl84EHuzc2l5v" variant="primary">
            Por aqui algunos datos curioso de los cerditos
          </Button>
          
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '25rem' }}>
        <Card.Img src={Cerdo3} className='blog1' />
        <Card.Body>
          <Card.Text>
              A diferencia de lo que muchos creen, 
                        los cerdos no sudan. 
                        Por eso se revuelcan en el barro: para refrescarse y proteger su piel del sol y de insectos.
          </Card.Text>
          <Button href="https://youtu.be/Q6aF4WRDOZc?si=Pn6tl84EHuzc2l5v" variant="primary">
            Por aqui algunos datos curioso de los cerditos
          </Button>
          
        </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
)}
export default Blog1;