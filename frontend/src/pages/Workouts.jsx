import '../styles/frontpages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Workouts() {
    
    return (
	<Container fluid className="vh-100">
	    <Row className="text-center">
		<Col className="d-flex justify-content-center align-items-center">
		    <img class="b-" src={"../images/pixelated_person.jpg"} alt="beginner" />
		    <p>Beginner</p>
		</Col>
		<Col className="d-flex justify-content-center align-items-center">
		    <img src={"../images/pixelated_person.jpg"} alt="intermediate" />
		    <p>Intermediate</p>
		</Col>
		<Col className="d-flex justify-content-center align-items-center">
		    <img src={"../images/pixelated_person.jpg"} alt="advanced" />
		    <p>Advanced section</p>
		</Col>
	    </Row>
	</Container>
    );
}

export default Workouts;
