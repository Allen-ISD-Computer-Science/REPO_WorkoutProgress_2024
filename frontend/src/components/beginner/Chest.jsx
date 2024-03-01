import { useState } from 'react';
import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Chest() {    

    const [states, setStates] = useState(['none', 'none', 'none', 'none', 'none']); // values of indicies
    function toggle(index) {
	setStates(prevStates => prevStates.map((prevState, iterationIndex) =>
	    iterationIndex === index ? (prevState === 'block' ? 'none' : 'block') : 'none'));	
    }

    return (
	<section>
	    <Row className="mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="mb-5 text-center">
		    The CHEST: Building a strong Foundation
		</h1>

		<h4>Overview</h4>
		<p>
		    The chest is often the part of the body that steals the show, one of the most iconic examples is Arnold Schwarzenegger.
		    Renowned not only for his significant impact on fitness but also for his remarkable chest, it captivated the attention
		    of not just women, but also men. While you may not be aiming or are ready for an insane chest, it's important to know
		    what truly makes a good chest.
		    </p>
		    
		    <h4>Major Anatomy of the chest</h4>
		    <h5>Pectoralis Major</h5>
		    <p>
			Often when people think of their chest this is the part. It covers most of the upper front surface of the torso and is
			the principle muscle that performs action in chest-focused and upper-body exercises. It originates from the clavicle and
			sternum, and it moves and flexes your upper arm. Within this muscle there are two compartments, the Clavicular and
			Sterncostal heads. When it comes to upper chest training think of working your Clavicular head, else think Sterncostal
			for lower chest training even though there is no distinct "lower chest" in a anatomical sense.
		    </p>
		    <h5>Pectoralis Minor</h5>
		    <p>
			This muscle sits right underneat the Clavicular fibers of your Pec Mejor. It originates on your upper rib cage and goes
			through the edge of the sholder blade. It helps to pull the scapula foward and assists with shoulder and upper arm
			stability.		    
		    </p>				
		    </Row>
		    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
			<h1 class="text-center">
			    Chest Workouts
			</h1>
			<p class="text-center">
			    Here is what we gathered that we think best fits a beginner level chest workout routine. 
			</p>
			<Table>
			    <thead>
				<tr>
				    <th>Exercise</th>
				    <th>Sets</th>
				    <th>Reps</th>			    
				</tr>
			    </thead>
			    <tbody>
				<tr>
				    <td onClick={() => toggle(0)}>Barbell Bench Press</td>
				    <td>3-4</td>
				    <td>10-12</td>			   
				</tr>
				<tr>
				    <td onClick={() => toggle(1)}>Incline Bench Press</td>			    
				    <td>3-4</td>
				    <td>10-15</td>			    
				</tr>
				<tr>
				    <td onClick={() => toggle(2)}>Decline Bench Press</td>
				    <td>4-5</td>			    
				    <td>10-15</td>			  			    
				</tr>
				<tr>
				    <td onClick={() => toggle(3)}>Incline Dumbell Fly</td>
				    <td>3</td>
				    <td>10-15</td>
				</tr>
			    </tbody>
			</Table>
		    </Row>
		    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
			<div style={{display: states[0]}}>
			    <h1 class="text-center">
				Instructions for Barbell Bench Press
			    </h1>		    		
			    <p>
				Lie flat on bench, hands just outside shoulder width. Set shoulder blades by pinching them together and driving
				into bench. Use spotter for lift off. Inhale and slowly lower bar to base of sternum, touching chest. Push bar
				back up in straight line by pressing into bench, driving feet into floor, and extending elbows. Repeat for desired reps.
			    </p>
			</div>
			<div style={{display: states[1]}}>
			    <h1 class="text-center">
				Instructions for Incline Bench Press
			    </h1>		    				 
			    <p>
				Lie on incline bench, hands outside shoulder width. Pinch shoulder blades, maintain upper back tightness. Use a
				spotter for lift-off. Lower the bar to chest in a straight line. Push back up, engaging legs and extending elbows. Repeat as needed.
			    </p>
			</div>
			<div style={{display: states[2]}}>
			    <h1 class="text-center">
				Instructions for Decline Bench Press 
			    </h1>
			    <p>			
				Lie on a decline bench with hands just outside shoulder width, feet hooked underneath. Pinch shoulder blades together,
				breathe, and get a spotter's lift off. Lower the bar to chest, then press it straight up. Repeat as needed.
			    </p>		    
			</div>
			<div style={{display: states[3]}}>
			    <h1 class="text-center">
				Instructions for Incline Dumbell Fly
			    </h1>
			    <p>
				Perform incline dumbbell flys by picking up the dumbbells with a neutral grip, sitting on an incline bench, and lying
				back while keeping the weights close to your chest. After pressing the dumbbells to the top lower to shoulder blades.
				Repeat until your set is done.
			    </p>
			</div>
		    </Row>
	

	</section>

    );
}

export default Chest;
