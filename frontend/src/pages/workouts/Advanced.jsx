
import Nav from '../../components/NavbarSub.jsx';
import {Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import test_img from '../../images/pixelman_still.png'

import Chest from '../../components/advanced/Chest.jsx';
import Arm from '../../components/advanced/Arm.jsx';
import Back from '../../components/advanced/Back.jsx';
// other workouts will go below these; shoulders, legs

function Advanced() {

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

	
	<section>
	    <Nav />
	    <h1 className="advanced">Advanced Level</h1>
	    
	    <br />
	    <br />

	    <Row className="mb-5">		
		
		<p class="px-25 lead text-center">
		Advanced workout plan is designed for those who are experienced in gym and want to push themselves to their limits. It provides a more intense set of exercise and continues to build upon a previously established foundation of strength, flexibility, and cardiovascular endurance. The advanced plan includes difficult exercises with heavier weights and longer sets. It is aimed at helping individuals further their athletic devlopment by pushing them to go above and beyond.</p>
	    </Row>
	    <Row className="h-30 mb-5 justify-contnent-around">
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
	    <Row className="h-30 mb-5 justify-contnent-around">
		<Col className="text-center" onClick={() => toggle(3)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Back Workouts</h3>
		</Col>
		<Col className="text-center" onClick={() => toggle(4)}>
		    <img class="img-fluid" src={test_img} alt="1"/>
		    <h3>Arm Workouts</h3>
		</Col>
	    </Row>
	    <div style={{display: states[0]}}>
		<Chest />
	    </div>
	    <div style={{display: states[4]}}>
		<Arm />
		</div>
	    <div style={{display: states[3]}}>
		<Back />
	    </div>
	    // other body parts go here
	</section>
    );
}

export default Advanced;
