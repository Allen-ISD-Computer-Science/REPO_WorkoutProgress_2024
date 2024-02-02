import '../styles/frontpages.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import {Row,Col} from 'react-bootstrap/';

import test_image from '../images/pixelman_still.png';

function Equipment() {
    return (

	<section>
	    <Row class="h-50 mw-100">
		<Col className="w-20">		    
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
	    </Row>
	    
	    <Row class="h-50 mw-100">
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img alt="1" class="workouts img-fluid"/>		    
		</Col>
		
		<Col className="w-20">
		    <img src={test_image} alt="1" class="workouts img-fluid"/>		  
		</Col>
	    </Row>
	</section>
	
    );
}


export default Equipment;
