import React from 'react';
import { Container, Stack, Col, Button } from 'react-bootstrap';
import '../styles/frontpages.css';
import Nav from '../components/Navbar.jsx';

function Workouts() {    

    return (
	<section>
	    <Nav />
	    <h2><b>Workout is the best way to keep your body fit and healthy. Here are some of the workout plans that you can follow.</b></h2>
	    <Row className="text-center vh-100">
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <img src={beginner_image} alt="1" className="workouts_img img-fluid" />
		    <Button href="./workouts/beginner" className="workouts_btn-style">Beginner</Button>
		</Col>
		
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <img src={intermediate_image} alt="2" className="workouts_img img-fluid" />
		    <Button href="./workouts/intermediate" className="workouts_btn-style">Intermediate</Button>
		</Col>
		
		<Col className="w-33 d-flex justify-content-center align-items-center flex-column">
		    <img src={advanced_image} alt="3" className="workouts_img img-fluid" />
		    <Button href="./workouts/advanced" className="workouts_btn-style">Advanced</Button>
		</Col>
	    </Row>
	</section>
    );
}

export default Workouts;

