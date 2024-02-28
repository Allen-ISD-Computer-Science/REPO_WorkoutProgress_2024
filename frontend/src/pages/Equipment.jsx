import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import test_image from '../images/pixelman_still.png';
import Image from 'react-bootstrap/Image';

function GridExample() {


    
    return (
	 <Row xs={1} md={2} className="">
      {Array.from({ length: 1 }).map((_, idx) => (
            <Col keyOD={idx} className=" justify-content-center">
          <Card>
              <Card.Img variant="top" src={"https://ideogram.ai/g/Vb-iJGXXRS6NiiplJntdmw/3"} className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Select this if you have dumbbells available at home.</h1></Card.Title>
              <Card.Text>
                Dumbbells reign as the favored choice in fitness equipment, primarily due to their versatility and efficacy in arm-focused workouts. Their prominence stems from their ability to target and engage the primary muscle groups of the arms with precision and effectiveness.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
	           {Array.from({ length: 1 }).map((_, idx) => (
            <Col keyOD={idx} className=" justify-content-center">
          <Card>
              <Card.Img variant="top" src={test_image} className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Jump Rope</h1></Card.Title>
              <Card.Text>
                This is where you can display information about a certain workout equipment.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
		   ))}
	           {Array.from({ length: 1 }).map((_, idx) => (
            <Col keyOD={idx} className=" justify-content-center">
          <Card>
              <Card.Img variant="top" src={test_image} className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Medicine Ball</h1></Card.Title>
              <Card.Text>
                This is where you can display information about a certain workout equipment.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
		   ))}
	           {Array.from({ length: 1 }).map((_, idx) => (
            <Col keyOD={idx} className=" justify-content-center">
          <Card>
              <Card.Img variant="top" src={test_image} className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Resistance Bands</h1></Card.Title>
              <Card.Text>
                This is where you can display information about a certain workout equipment.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
		   ))}
	           {Array.from({ length: 1 }).map((_, idx) => (
            <Col keyOD={idx} className=" justify-content-center">
          <Card>
              <Card.Img variant="top" src={test_image} className="img-fluid" />
            <Card.Body>
              <Card.Title><h1>Treadmill</h1></Card.Title>
              <Card.Text>
                This is where you can display information about a certain workout equipment.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
		   ))}
	    
	 </Row>

	
    );
    
}

export default GridExample;
