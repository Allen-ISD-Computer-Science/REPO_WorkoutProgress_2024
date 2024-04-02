import Nav from '../components/Navbar.jsx';
import {Container, Col, Row} from 'react-bootstrap';
function AboutUs() {
    
    return (
	<section>
	    <Nav />
	    <Container>
		<Row>
		    <Col className="w-70">
			Here at Bulk-Like-A-Beast, we encourage all to start their fitness journey. Whether you
			are just getting started or already in the fitness game, our mission is to assist you in
			achieving your dream physique.
		    </Col>
		    <Col>
			
		    </Col>
		</Row>
	    </Container>
	    
	    <img src="https://raw.githubusercontent.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/main/img/homepagebackground.png" alt="React Image" />
	</section>
    );
}

export default AboutUs;
