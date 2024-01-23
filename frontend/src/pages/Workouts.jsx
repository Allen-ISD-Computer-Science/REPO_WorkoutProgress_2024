import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import '../styles/frontpages.css'
import test_image from '../images/pixelman_still.png';



function Workouts() {
    
    return (

	    <Row className="text-center vh-100">
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column ">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>
		    <Button href="./beginner" className="workouts_btn-style">Beginner</Button>
		</Col>
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column ">
		    <img src={test_image} alt="2" class="workouts img-fluid"/>
		    <Button href="./intermediate" className="workouts_btn-style">Intermediate</Button>
		</Col>
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column advanced-bg-color">
		    <img src={test_image} alt="3" class="workouts img-fluid"/>
		    <Button href="./advanced" className="workouts_btn-style">Advanced</Button>
		</Col>
	    </Row>	    

    );
}

export default Workouts;
