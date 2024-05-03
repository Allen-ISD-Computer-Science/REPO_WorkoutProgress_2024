import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../styles/frontpages.css';
import Nav from '../components/Navbar.jsx';
import beginnerWorkouts from '../images/workouts_beginner.png';
import intermediateWorkouts from '../images/workouts_intermediate.png';
import advancedWorkouts from '../images/workouts_advanced.png';

function Workouts() {    

    return (
	<section>
	    
	    <Nav />
	    <center>
		<tLabel> Workouts
		</tLabel>
	    </center>
	    <h2><b>Workout is the best way to keep your body fit and healthy. Here are some of the workout plans that you can follow.</b></h2>
	    <Row className="text-center vh-100">
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <Button href="./workouts/beginner" className="workouts_btn-style">Beginner</Button>
		    <img style={{ width: 250, height: 250 }} src={beginnerWorkouts} />
		</Col>
		
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <Button href="./workouts/intermediate" className="workouts_btn-style">Intermediate</Button>
		    <img style={{ width: 250, height: 250 }} src={intermediateWorkouts} />
		</Col>
		
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <Button href="./workouts/advanced" className="workouts_btn-style">Advanced</Button>
		    <img style={{ width: 250, height: 250 }} src={advancedWorkouts} />
		</Col>
	    </Row>
	</section>
    );
}

export default Workouts;

