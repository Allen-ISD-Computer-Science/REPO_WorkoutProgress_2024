import { Row, Col, Button } from 'react-bootstrap';

import '../styles/frontpages.css'
import test_image from '../images/pixelman_still.png';
import Nav from '../components/Navbar.jsx';

function Diets() {
    return (	
	<section class="diets_body">
	    <Nav />
	    <Row className="text-center vh-100">	    	    
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>
		    <Button href="./beginner" className="workouts_btn-style">New</Button>
		</Col>
		
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
	   	    <img src={test_image} alt="2" class="workouts img-fluid"/>
		    <Button href="./intermediate" className="workouts_btn-style">Intermediate</Button>
		</Col>
		
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <img src={test_image} alt="3" class="workouts img-fluid"/>
		    <Button href="./advanced" className="workouts_btn-style">Pro</Button>
		</Col>
	    </Row>
	</section>
    );
}

export default Diets;
