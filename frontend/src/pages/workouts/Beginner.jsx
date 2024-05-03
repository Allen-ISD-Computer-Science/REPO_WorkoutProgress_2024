import Nav from '../../components/Navbar.jsx';
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
	    <Nav />
	    <Row className="mb-5">		
		<h1 class="display-1 text-center">Welcome new gym goer!</h1>
		<p class="px-25 lead text-center">
		    "It's in our best interest that this page will help you to start a new fitness journey that you will never forget!"
		    - Beast Team 
		</p>
	    </Row>

	    <Row className="justify-contnent-around">
		<Col className="w-33 text-center" onClick={() => toggle(0)}>
		    <img class="img-fluid" src= "https://is1-ssl.mzstatic.com/image/thumb/Purple116/v4/50/4e/ff/504effca-9cc1-4101-8160-41a34fe8b094/source/256x256bb.jpg" alt="1"/>
		    <h3>Chest Workouts</h3>
		</Col>
		<Col className="w-33 stack text-center" onClick={() => toggle(1)}>
		    <img class="img-fluid" src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAVAfxcBrvH8sFnW8_gJ68kkuNoP0eCt52tQ&usqp=CAU" alt="1"/>
		    <h3>Shoulder Workouts</h3>
		</Col>		    
		<Col className="w-33 text-center" onClick={() => toggle(2)}>
		    <img class="img-fluid" src= "https://s.cafebazaar.ir/images/icons/drzio.legexercise.legworkout.butthighworkout.formen-319ee8ff-8783-497c-81cb-d8e2e9a91f2d_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="1"/>
		    <h3>Leg Workouts</h3>
		</Col>		
	    </Row>
	    <Row className="mb-5 justify-contnent-around">
		<Col className="text-center" onClick={() => toggle(3)}>
		    <img class="img-fluid" src= "https://s.cafebazaar.ir/images/icons/gymfitnesstech.backpainrelief-8d13ab20-4e6d-4351-a77f-97f49d60305e_512x512.png?x-img=v1/resize,h_256,w_256,lossless_false/optimize" alt="1"/>
		    <h3>Back Workouts</h3>
		</Col>
		<Col className="text-center" onClick={() => toggle(4)}>
		    <img class="img-fluid" src= "https://is4-ssl.mzstatic.com/image/thumb/Purple124/v4/37/50/51/37505175-3b25-8f87-8beb-ffd6c3533b94/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/256x256bb.jpg" alt="1"/>
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
