import {Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import test_img from '../../images/pixelman_still.png'

import Chest from '../../components/beginner/Chest.jsx';
import Shoulder from '../../components/beginner/Shoulder.jsx';
import Arm from '../../components/beginner/Arm.jsx';
import Leg from '../../components/beginner/Leg.jsx';
import Back from '../../components/beginner/Back.jsx';

function Beginner_Workouts() {

    // usestate is an array with two values, the first is the current state at any iteration and the
    // second is the function that updates the state
    const [states, setStates] = useState(['none', 'none', 'none', 'none', 'none']); // values of indicies
    

    function toggle(index) {
	// 'map' iterates through the array, prevState inside the 'map' is the value of the iterationIndex as map iterates.
	// if the index while the 'map function' iterates is equal to the index of the corresponding Column below
	// then it performs the long operation inside the () or it defaults to none if there not equal
	setStates(prevStates => prevStates.map((prevState, iterationIndex) =>
	    iterationIndex === index ? (prevState === 'block' ? 'none' : 'block') : 'none'));	
    }
    // basically this function closes all other info's on workouts to avoid stacking the information
    
    return (	    
	<section class="min-vh-100">	    
	    <Row className="mb-5">		
		<h1 class="display-1 text-center">Welcome new gym goer!</h1>
		<p class="px-25 lead text-center">
		    "It's in our best interest that this page will help you to start a new fitness journey that you will never forget!"
		    - Beast Team 
		</p>
	    </Row>

	    <Row className="justify-contnent-around">
		<Col className="w-33 text-center" onClick={() => toggle(0)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Chest Workouts</h3>
		</Col>
		<Col className="w-33 stack text-center" onClick={() => toggle(1)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Shoulder Workouts</h3>
		</Col>		    
		<Col className="w-33 text-center" onClick={() => toggle(2)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Leg Workouts</h3>
		</Col>		
	    </Row>
	    <Row className="mb-5 justify-contnent-around">
		<Col className="text-center" onClick={() => toggle(3)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Back Workouts</h3>
		</Col>
		<Col className="text-center" onClick={() => toggle(4)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Arm Workouts</h3>
		</Col>
	    </Row>

	    <Row>
		<div style={{display: states[0]}}>
		    <Chest />
		</div>
		<div style={{display: states[1]}}>
		    <Shoulder />
		</div>
		<div style={{display: states[2]}}>
		    <Leg />
		</div>
		<div style={{display: states[3]}}>
		    <Back />
		</div>
		<div style={{display: states[4]}}>
		    <Arm />
		</div>
	    </Row>
	    
	</section>
    );
}

export default Beginner_Workouts;
