import '../styles/frontpages.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Workouts() {
    return (
	<Container fluid className="vh-100">
	    <Row className="text-center h-100">
		<Col>Beginner</Col>
		<Col>Intermediate</Col>
		<Col>Expert</Col>
	    </Row>
	</Container>
    );
}

export default Workouts;
