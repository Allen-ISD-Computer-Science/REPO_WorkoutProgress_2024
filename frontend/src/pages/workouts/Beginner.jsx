import {Row, Col} from 'react-bootstrap';
import {useState} from 'react';
import Chest from '../../components/beginner/Chest.jsx';
import Shoulder from '../../components/beginner/Shoulder.jsx';
import Arm from '../../components/beginner/Arm.jsx';
import Leg from '../../components/beginner/Leg.jsx';
import Back from '../../components/beginner/Back.jsx';

function Beginner_Workouts() {
    // test plan is a list of descriptions you hand to people not in the groupa
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
		    <img class="img-fluid" src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nitrocut.com%2Fblogs%2Fblog%2F10-best-chest-workouts-you-shouldnt-miss&psig=AOvVaw1qSW0_ZB801PY81cmbcZB1&ust=1711511001429000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJjX6ruBkYUDFQAAAAAdAAAAABAJ" alt="1"/>
		    <h3>Chest Workouts</h3>
		</Col>
		<Col className="w-33 stack text-center" onClick={() => toggle(1)}>
		    <img class="img-fluid" src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.muscleandfitness.com%2Froutine%2Fworkouts%2Fshoulder-exercises%2Fultimate-workout-wider-stronger-shoulders%2F&psig=AOvVaw0K07t_xUNFV_er6Wtf6w5a&ust=1711511157805000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCPCJsoaCkYUDFQAAAAAdAAAAABAJ" alt="1"/>
		    <h3>Shoulder Workouts</h3>
		</Col>		    
		<Col className="w-33 text-center" onClick={() => toggle(2)}>
		    <img class="img-fluid" src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteelsupplements.com%2Fblogs%2Fsteel-blog%2Fthe-7-best-barbell-leg-exercises-for-strength&psig=AOvVaw3YDy4ha0qMkf7HEEERQKE_&ust=1711511103122000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLiMpOyBkYUDFQAAAAAdAAAAABAV" alt="1"/>
		    <h3>Leg Workouts</h3>
		</Col>		
	    </Row>
	    <Row className="mb-5 justify-contnent-around">
		<Col className="text-center" onClick={() => toggle(3)}>
		    <img class="img-fluid" src= "https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2017/10/1109-pullup-muscular-back.jpg?quality=86&strip=all" alt="1"/>
		    <h3>Back Workouts</h3>
		</Col>
		<Col className="text-center" onClick={() => toggle(4)}>
		    <img class="img-fluid" src= "https://www.google.com/url?sa=i&url=https%3A%2F%2Fsteelsupplements.com%2Fblogs%2Fsteel-blog%2Fthe-7-best-barbell-arm-exercises-for-strength-size&psig=AOvVaw2hSPG-qxEVYok08QNA-oPe&ust=1711511220235000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLCakaSCkYUDFQAAAAAdAAAAABAo" alt="1"/>
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
