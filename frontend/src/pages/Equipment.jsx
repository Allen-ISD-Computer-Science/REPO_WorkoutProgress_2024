import {Row,Col} from 'react-bootstrap/';

import '../styles/frontpages.css';
import test_image from '../images/pixelman_still.png';
import Nav from '../components/Navbar.jsx';

function Equipment() {
    return (
	<section>
	    <Nav />
	    <Row class="vh-50 vw-100 justify-content-between">
		<Col className="">		    
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
	    </Row>

	    <Row class="vh-50 vw-100 justify-content-between">
		<Col className="w-20 ">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20 ">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20 ">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20 ">
		    <img alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20 ">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		  
		</Col>
	    </Row>
	</section>
	
    );
}


export default Equipment;
