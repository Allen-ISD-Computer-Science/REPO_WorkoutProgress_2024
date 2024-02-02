import '../styles/frontpages.css';

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function Equipment() {
    const [showA, setShowA] = useState(true);
    const [showB, setShowB] = useState(true);

    const toggleShowA = () => setShowA(!showA);
    const toggleShowB = () => setShowB(!showB);
    return (

	<section>
	    <Row>
		<Col className="w-20 r-50 d-flex justify-content-center align-items-center flex-column">
		    
		    <Button onClick={toggleShowA}>
			<img src="https://static.vecteezy.com/system/resources/thumbnails/018/925/267/small/dumbbell-3d-illustration-png.png/>
		    </Button>
		    <Toast show={showA} onClose={toggleShowA}>
			<Toast.Header>
			    <img
				src="holder.js/20x20?text=%20"
				className="rounded me-2"
				alt=""
			    />
			    <strong className="me-auto">Bootstrap</strong>
			    <small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Hi</Toast.Body>
		    </Toast>
		</Col>
		<Col md={6} className="mb-2">
		    <Button onClick={toggleShowB} className="mb-2">
			<img src="https://png.pngtree.com/png-clipart/20201208/original/pngtree-gym-dumbbell-vector-icon-png-image_5586480.jpg"/>
		    </Button>
		    <Toast show={showB} onClose={toggleShowB}>
			<Toast.Header>
			    <img
				src="holder,js/20x20?text=%20"
				className="rounded me-2 img-fluid"
				alt=""
			    />
			    <strong className="me-auto">Bootstrap</strong>
			    <small>11 mins ago</small>
			</Toast.Header>
			<Toast.Body>Hi</Toast.Body>
		    </Toast>
		</Col>
		<Col>
		</Col>
		</Row>
	    
	    

	</section>
	
    );
}


export default Equipment;
