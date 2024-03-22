import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
import { useState } from 'react';

function Shoulder() {    
    
    const [states, setStates] = useState(['none', 'none', 'none', 'none', 'none']); // values of indicies
    function toggle(index) {
	setStates(prevStates => prevStates.map((prevState, iterationIndex) =>
	    iterationIndex === index ? (prevState === 'block' ? 'none' : 'block') : 'none'));	
    }
    
    return (
	<section>
	    <Row className="mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="mb-5 text-center">
		    The Shoulders: An Overlooked Muscle
		</h1>

		<h4>Overview</h4>
		<p>
		    The shoulders aren't one of those muscles that is shown off as much as like the legs or chest. Still, it is vital
		    that shoulders are worked on as they create an incredible synergy with the rest of the muscles on the upper body.
		    Just look at Kevin Levrone, while you may not have similar genetics as he did you can not deny that good shoulders
		    help advance the structure of the body.
		</p>
		
		<h4>Major Anatomy of the Shoulders</h4>
		<h5>The Deltoid</h5>
		<p>
		    There are three main functions for this muscle. The first being that the anterior is responsible for the flexion
		    and medial rotation of the arm. The second is the middle aspect of the deltoid helps to move the arm up 90 degrees.
		    The third function is the posterior aspect which helps with rotation of the arm.
		</p>
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Shoulder Workouts
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits a beginner level shoulders workout routine. 
		</p>
		<Table>
		    <thead>
			<tr>
			    <th>Exercise/Instructions</th>
			    <th>Sets</th>
			    <th>Reps</th>			    
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td onClick={() => toggle(0)}>Dumbell Lateral Raises</td>
			    <td>3-4</td>
			    <td>12-15</td>			   
			</tr>
			<tr>
			    <td onClick={() => toggle(1)}>Rear Delt Fly</td>			    
			    <td>3-4</td>
			    <td>12-15</td>			    
			</tr>
			<tr>
			    <td onClick={() => toggle(2)}>Seated Dumbell Press</td>
			    <td>4-5</td>			    
			    <td>10-15</td>			  			    
			</tr>
			<tr>
			    <td onClick={() => toggle(3)}>Upright Barbell Row</td>
			    <td>3-4</td>
			    <td>10-12</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<div style={{display: states[0]}}>
		    <h1 class="text-center">
			Instructions for Dumbell Lateral Raises
		    </h1>		    		
		    <p>
			Load the machine, take a seat, position feet on the sled, lower weight, lower legs, return to starting position,
			repeat for desired repetitions, ensuring proper control and safety.
		    </p>
		</div>
		<div style={{display: states[1]}}>
		    <h1 class="text-center">
			Instructions for Rear Delt Fly
		    </h1>		    				 
		    <p>
			Position cables at chest height, attach handles, grab one with a neutral grip, pull handles laterally without excessive
			shoulder blade squeezing, lower handles back to control, and repeat for desired repetitions.
		    </p>
		</div>
		<div style={{display: states[2]}}>
		    <h1 class="text-center">
			Instructions for Seated Dumbell Press
		    </h1>
		    <p>			
			Set up an adjustable angle bench, select the desired weight, pick up dumbbells, position them on knees, kick them
			up, rotate palms, take a deep breath, press overhead, lower back to starting position, and repeat for desired
			repetitions. Maintain a 90-degree angle and maintain proper limb lengths.
		    </p>		    
		</div>
		<div style={{display: states[3]}}>
		    <h1 class="text-center">
			Instructions for Upright Barbell Row
		    </h1>
		    <p>
			The barbell upright row is a great exercise for building upper traps and shoulders. Load a barbell, grip it with
			an overhand grip, and lift it up to chest height. Pause, then lower it back to the starting position. Repeat for
			desired reps.
		    </p>
		</div>
	    </Row>	    
	</section>

    );
}

export default Shoulder;
