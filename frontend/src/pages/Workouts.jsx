import React from 'react';
import { Container, Stack, Col, Button } from 'react-bootstrap';
import '../styles/frontpages.css';
import Nav from '../components/Navbar.jsx';

function Workouts() {    

    return (
	<section>
	    <Nav />
	    <Container className="wrkts-container ">
		<Stack>
		    <div id="wrkts-img-1" className="wrkts-lvl h-33 flex-grow-1 ">
			<Button href="./workouts/beginner" className="workouts_btn-style">Beginner</Button>
		    </div>
		    
		    <div id="wrkts-img-2" className="wrkts-lvl h-33 flex-grow-1">
			<Button href="./workouts/intermediate" className="workouts_btn-style align-">Intermediate</Button>
		    </div>
		    
		    <div id="wrkts-img-3" className="wrkts-lvl h-33 flex-grow-1">	
			<Button href="./workouts/advanced" className="workouts_btn-style">Advanced</Button>
		    </div>
		</Stack>
	    </Container>
	</section>
    );
}

export default Workouts;

