import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
import { useState } from 'react';
function Arm() {    
    
    const [states, setStates] = useState(['none', 'none', 'none', 'none', 'none', 'none']); // values of indicies
    function toggle(index) {
	setStates(prevStates => prevStates.map((prevState, iterationIndex) =>
	    iterationIndex === index ? (prevState === 'block' ? 'none' : 'block') : 'none'));	
    }
    
    return (
	<section>
	    <Row className="mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="mb-5 text-center">
		    The Arm
		</h1>

		<article>
		<h4>Overview</h4>
		    <p class>
			"You want to get big kid" - Sam Sulek
			The third most noticed muscle by many people has to be the Arms. Look at the man to the left, those arms are massive. While we
			don't encourage the need to get massive arms but we do encourage you to start making your arms look defined.
		    </p>
		</article>
		
		<h4>Major Anatomy of your Arm</h4>
		<h5>Biceps</h5>
		<p> 
		    The most important part of your arm is your biceps. Each person has either a long or court bicep, this is entirely dependent on your genetics.
		    Whatever type you may have the function is the same for all. It helps you to lift and pull objects and helps your arm to bend and flex.
		</p>
		<h5>Triceps</h5>
		<p>
		    While this muscle is not overlooked by hardcore body builders, it is somewhat in the shadow of the biceps. Your triceps extend to your
		    elbow joint, essentially they help you extend your arm. 
		</p>				
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Arm Workouts
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits a beginner level Arms workout routine. 
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
			    <td onClick={() => toggle(0)}>Tricep Cable Pushdown</td>
			    <td>3-4</td>
			    <td>12-15</td>			   
			</tr>
			<tr>
			    <td onClick={() => toggle(1)}>Alternating Dumbell Curls</td>			    
			    <td>3-4</td>
			    <td>12-15</td>			    
			</tr>
			<tr>
			    <td onClick={() => toggle(2)}>Barbell Curl</td>
			    <td>4-5</td>			    
			    <td>10-15</td>			  			    
			</tr>
			<tr>
			    <td onClick={() => toggle(3)}>Seated Overhead Cable Tricep Extension</td>
			    <td>3-4</td>
			    <td>12-15</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(4)}>Wrist Curls</td>
			    <td>3</td>
			    <td>15</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(5)}>Reverse Wrist Curls</td>
			    <td>3</td>
			    <td>15</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<div style={{display: states[0]}}>
		    <h1 class="text-center">
			Intructions Tricep Cable Pushdown
		    </h1>		    		
		    <p>
			Attach a straight bar to a cable stack as high as possible and prepare with a standing position. Now, you want
			to grab the bar with a pronated grip and slightly lean forward. Pull the handle downward until the elbows are
			almost locked out and slowly lower under control back to the starting position. You should be extending the
			elbows and flexing the triceps while performing the movement.
		    </p>
		</div>
		<div style={{display: states[1]}}>
		    <h1 class="text-center">
			Instructions Alternating Dumbell Curl
		    </h1>		    				 
		    <p>
			Position yourself straight up with the dumbbells by your side (your palms should be facing up and the dumbbells
			not touching your body). Starting with your weaker arm, curl the dumbbell up as far as possible and squeeze
			your bicep at the top of each rep. Then, slowly lower the weight down without it touching your body or taking
			the tension off your bicep. Repeat this process while alternating with the other arm.
		    </p>
		</div>
		<div style={{display: states[2]}}>
		    <h1 class="text-center">
			Instructions for barbell curl
		    </h1>
		    <p>
			Using a upperhand grip, stand straight up with your feet close together. Keep your back straight with your arms
			fully extended. Slowly curl the bar up and then slowly lower it back to the starting position.
		    </p>		    
		</div>
		
		<div style={{display: states[3]}}>
		    <h1 class="text-center">
			Instructions for Seated Overhead Cable Tricep Extension
		    </h1>
		    <p>
			Set up for the exercise by placing a 90 degree bench in front of a cable pulley machine facing away from it, attaching
			a straight bar to the low pulley, and selecting the weight you want to use on the stack. Facing away from the pulley, grab
			the bar behind your neck with an overhand grip at shoulder width and sit down with your back flat against the bench. This
			will lift the weight slightly from the stack. Keep your feet flat on the ground. Your forearms should be parallel to the
			floor at this point and your elbows should be pointed at the ceiling. You should be grasping the bar behind your head with
			your palms facing upward. You are now in the starting position. Moving only at your elbow joints slowly push the bar straight
			up until your arms are fully extended. Keep your upper arms stationary, pause, and then slowly bring the bar back to the
			starting position. Repeat this movement for desired reps.
		    </p>		    
		</div>
		<div style={{display: states[4]}}>
		    <h1 class="text-center">
			Instructions for Wrist Curls
		    </h1>
		    <p>
			Grasp a barbell at shoulder width apart using an underhand grip (palms facing up) and sit down in front of a flat bench. Kneel
			down and rest the back of your forearms on top of the bench so that your wrists are just off the end of it. Bending only at the
			wrists, let the barbell drop as far as possible. This is the starting position for the exercise. Slowly raise the bar up as far
			as possible squeezing the forearm muscles at the top of the movement. Pause, and then slowly lower the barbell back to the
			starting position. Repeat for desired reps
		    </p>
		</div>
		<div style={{display: states[5]}}>
		    <h1 class="text-center">
			Instructions for Reverse Curl Wrist
		    </h1>
		    <p>
			Set up for the reverse wrist curl by selecting a light barbell and kneeling in front of a flat bench. Grasp the barbell with
			a reverse grip (palms facing down) at around shoulder width apart. Place your forearms and elbows on the bench so that both
			wrists are hanging over the edge of the bench. This is the starting position. Begin curling your writs upwards. Focus on moving
			only the wrists, while keeping your forearms as still as possible. Lower your wrists back down to the starting position and
			repeat for the desired reps.			
		    </p>
		</div>
	    </Row>	    
	</section>

    );
}

export default Arm;
