import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
import { useState } from 'react';

function Leg() {    
    
    const [states, setStates] = useState(['none', 'none', 'none', 'none', 'none']); // values of indicies
    function toggle(index) {
	setStates(prevStates => prevStates.map((prevState, iterationIndex) =>
	    iterationIndex === index ? (prevState === 'block' ? 'none' : 'block') : 'none'));	
    }
    
    return (
	<section>
	    <Row className="mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="mb-5 text-center">
		    The Legs
		</h1>

		<h4>Overview</h4>
		<p>
		    The second most noticed muscle is the legs. I mean look at the guy on the right, HE'S INSANE! Now were
		    not encouraging you to get this massive but we do encourage you to build up your legs. 
		</p>
		
		<h4>Major Anatomy of the Legs</h4>
		<h5>Upper Leg Muscles</h5>
		<p>
		    Due to the odd name of many of these muscles, we decided not to include them but rather the main name they
		    fall under and their functions. With that said there are three main areas being the Anterior, Medial, and
		    Posterior muscles. The Anterior muscles mainly assist in stabalizing your body and help with balance. They
		    also help to bend/extend your knees, flex your thighs/hip points, and rotate your legs. The Medial muscles
		    help to move your leg toward the center of your body and allow you to flex, extend, and rotate your thigh.
		    Lastly the Posterior muscles, well known as the Hamstring, helps you to move your leg from front to back
		    and to rotate it at the hip socket. 
		</p>
		<h5>Lower Leg Muscles</h5>
		<p>
		    The lower leg can also be categorized in three simple areas. Starting off with the Anterior muscles which
		    help you to lift/lower your foot. The Lateral muscles, muscles outside the lower leg, help to stabalize
		    your foot while running/walking and are also the reason you can move your foot side to side. The Posterior
		    muscles, the ones on the back of the leg, help when jumping off into a sprint, lock/unlock your knee, and
		    help to maintain good posture by stabalizing your legs.
		</p>				
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Leg Workouts
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits a beginner level legs workout routine. 
		</p>
		<Table>
		    <thead>
			<tr>
			    <th>Exercise/Instructions</th>
			    <th>Sets</th>
			    <th>Reps</th>
			    <th>Workout Videos</th>
			    <th>Workout Description</th>
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td onClick={() => toggle(0)}>Leg press</td>
			    <td>5</td>
			    <td>10-15</td>			   
			    
			    <video width="320" height="120"  controls>
		<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Leg%20Press.mp4" type="video/mp4">
		    </source>
			    </video>
			    <td>Load the machine, take a seat, position feet on the sled, lower weight, lower legs, return to starting
			position, repeat for desired repetitions, ensuring proper control and safety.</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(1)}>Machine Hack Squat </td>			    
			    <td>3-5</td>
			    <td>10-15</td>			    
			      <video width="320" height="120"  controls>
		<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Machine%20Hack%20Squat.mp4" type="video/mp4">
		    </source>
			      </video>
			    <td>Load the machine, position your shoulders and back, lower the weight, reverse the movement, and repeat
			for desired repetitions, ensuring proper form and safety.</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(2)}>Lying Leg Curls</td>
			    <td>3</td>			    
			    <td>12-15</td>			  			    
			      <video width="320" height="120" controls>
		   <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/How%20To%20Do%20A%20Lying%20Leg%20Curl%20(Prone%20Leg%20Curl).mp4" type="video/mp4">
		       </source>
			      </video>
			    <td>The lying leg curl is a great exercise to isolate the hamstrings. Set up the machine with a weight and
			adjust the padding. Lay face down, tighten the hamstrings, squeeze them, curl the weight up, lower it
			back, and repeat for desired reps.</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(3)}>Seated Calf Raises</td>
			    <td>4-5</td>
			    <td>15-20</td>
			       <video width="320" height="120" controls>
		     <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Calf%20Raise%20(Toes%20Neutral).mp4" type="video/mp4">
			 </source>
			       </video>
			    <td>Place feet on a machine platform, with toes pointed forward. Position quads under knee pad, hands on
			top. Extend ankles, lower heels, dorsiflex calves, exhale, and repeat for assigned repetitions</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<div style={{display: states[0]}}>
		    <h1 class="text-center">
			Instructions for Leg Press
		    </h1>		    		
		    <p>
			Load the machine, take a seat, position feet on the sled, lower weight, lower legs, return to starting
			position, repeat for desired repetitions, ensuring proper control and safety.
		    </p>
		</div>
		<div style={{display: states[1]}}>
		    <h1 class="text-center">
			Instructions for Machine Hack Squat
		    </h1>		    				 
		    <p>
			Load the machine, position your shoulders and back, lower the weight, reverse the movement, and repeat
			for desired repetitions, ensuring proper form and safety.
		    </p>
		</div>
		<div style={{display: states[2]}}>
		    <h1 class="text-center">
			Instructions for Lying Leg Curls
		    </h1>
		    <p>
			The lying leg curl is a great exercise to isolate the hamstrings. Set up the machine with a weight and
			adjust the padding. Lay face down, tighten the hamstrings, squeeze them, curl the weight up, lower it
			back, and repeat for desired reps.
		    </p>		    
		</div>
		<div style={{display: states[3]}}>
		    <h1 class="text-center">
			Instructions for Seated Calf Raises
		    </h1>
		    <p>
			Place feet on a machine platform, with toes pointed forward. Position quads under knee pad, hands on
			top. Extend ankles, lower heels, dorsiflex calves, exhale, and repeat for assigned repetitions.
		    </p>
		</div>
	    </Row>	    
	</section>

    );
}

export default Leg;
