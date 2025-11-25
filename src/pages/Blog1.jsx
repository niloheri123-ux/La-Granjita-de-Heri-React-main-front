import React from "react";
import { Container, Button, Card  } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import Vaca1 from '../assets/img/Vaca_1.webp';
import Vaca2 from '../assets/img/Vaca_2.webp';
import Vaca3 from '../assets/img/Vaca_3.webp';

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
        <Card.Img src={Vaca1} />
        <Card.Body>
          <Card.Text>
              Cuando las vacas están junto a una compañera con la que tienen un vínculo fuerte, su frecuencia cardíaca disminuye. También muestran menos signos de estrés en comparación con cuando están solas o con una vaca desconocida. Pueden mostrar preferencias sociales claras, eligiendo pasar tiempo con ciertas vacas más que con otras.
          </Card.Text>

          <Button href="https://youtu.be/Tp6ODXvzdI8" variant="primary">
            Por aqui algunos datos curioso de las vaquitas
          </Button>
          
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '25rem' }}>
        <Card.Img src={Vaca2}  />
        <Card.Body>
          <Card.Text>
              Las vacas responden positivamente a la música suave, como la clásica o el jazz. En muchas granjas se usa música para relajarlas y mejorar su producción de leche. Pero si la música es ruidosa o estridente, se estresan.
          </Card.Text>

          <Button href="https://youtu.be/Tp6ODXvzdI8" variant="primary">
            Por aqui algunos datos curioso de las vaquitas
          </Button>
          
        </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '25rem' }}>
        <Card.Img src={Vaca3} className='blog1' />
        <Card.Body>
          <Card.Text>
              TIENEN SENTIDO DE LA JUSTICIAS Estudios muestran que las vacas se frustran cuando son tratadas injustamente o cuando ven que otras vacas reciben recompensas y ellas no, a pesar de hacer lo mismo
          </Card.Text>
          <Button href="https://youtu.be/Tp6ODXvzdI8" variant="primary">
            Por aqui algunos datos curioso de las vaquitas
          </Button>
          
        </Card.Body>
    </Card>
    </Col>
    </Row>
    </Container>
)}
export default Blog1;