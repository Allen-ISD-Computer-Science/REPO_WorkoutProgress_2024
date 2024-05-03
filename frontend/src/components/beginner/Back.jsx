import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
import { useState } from 'react';

function Back() {    
    
    const [states, setStates] = useState(['none', 'none', 'none', 'none', 'none']); // values of indicies
    function toggle(index) {
	setStates(prevStates => prevStates.map((prevState, iterationIndex) =>
	    iterationIndex === index ? (prevState === 'block' ? 'none' : 'block') : 'none'));	
    }
    
    return (
	<section>
	    <Row className="mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="mb-5 text-center">
		    The Back
		</h1>

		<h4>Overview</h4>
		<p>
		    Another major muscle is your back. It's not noticable in every day to day life, but is essential to build on. Imagine
		    looking at someone with a well defined front body only for their back to be flat or weak compared to their other
		    muscles. So in all working this muscle helps keep balance with all other muscles. 
		</p>
		
		<h4>Major Anatomy of your Back</h4>
		<h5>Lats</h5>
		<p>
		    Of the two major parts of your back is your Lats. This muscle is mainly responsible for internal rotation, adduction
		    and extension of your arms. So for example when you roate your entire arm your lats are functioning.
		</p>
		<h5>Upper and Lower Traps</h5>		
		<p>
		    The other major part of your back is your back is your traps. If you were to put your hand on your upper back near
		    the spine but not on the spine, thats your traps. If you move your head up or down you can actually feel that muscle
		    moving, well more specifically thats your upper traps. You can also feel them when you twist your torso, shrug, or
		    when you throw a ball. Most importantly they assist in you in keeping your posture.
		</p>
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Back Workouts
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits a beginner level back workout routine. 
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
			    <td onClick={() => toggle(0)}>Behind Neck Lat Pull Downs</td>
			    <td>3-4</td>
			    <td>12-15</td>			   
			      <video width="320" height="120" controls>
		     <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Behind%20the%20Neck%20Lat%20Pulldown%20Double%20Overhand.mp4" type="video/mp4">
			 </source>
			      </video>
			    <td>To perform a lat pulldown, attach a wide grip handle to the machine, seated, and grip it with a pronated grip. Depress shoulder
			blades, flex elbow, extend shoulder, pull handle behind neck, and repeat for desired repetitions.</td>
			</tr>
			<tr>
		    <td onClick={() => toggle(1)}>Seated Cable Rows</td>			    
			    <td>3-4</td>
			    <td>12-15</td>
			     <video width="320" height="120" controls>
		     <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/How%20to%20Seated%20Cable%20Row%20with%20Hunter%20Labrada%20Exercise%20Guide.mp4" type="video/mp4">
			 </source>
			     </video>
			    <td>Set a weight on a weight stack and attach a bar to a seated row machine. Grasp the bar neutrally, pull the weight up, pull the
			handle into your stomach, squeeze, pause, and slowly lower the weight back to the starting position.To perform a lat pulldown,
			attach a wide grip handle to the machine, seated, and grip it with a pronated grip. Depress shoulder blades, flex elbow,
			extend shoulder, pull handle behind neck,
			and repeat for desired repetitions.</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(2)}>Deadlifts</td>
			    <td>4-5</td>			    
			    <td>8-12</td>
			    <video width="320" height="120" controls>
		     <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Conventional%20Deadlift.mp4" type="video/mp4">
			 </source>
			    </video>
			    <td>The conventional deadlift involves positioning the bar over shoelaces, assuming a hip width stance, pushing hips back and hinge
			forward, grasping the bar with a shoulder width, inhaling, and pulling up slightly while allowing hips to drop in a seesaw fashion.
			Positioning lats and pushing the floor away, the bar tracks in a straight line, and then reversing the movement. Repeat for
			desired repetitions.</td>
			</tr>
			<tr>
			    <td onClick={() => toggle(3)}>Cable Face Pull</td>
			    <td>3</td>
			    <td>15</td>
			    <video width="320" height="120" controls>
		     <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Cable Face Pull.mp4" type="video/mp4">
			 </source>
			    </video>
			    <td>Perform a split stance with pronated grip, inhale, and pull a rope towards your face, then slowly lower the
			rope and repeat for desired repetitions.To perform a lat pulldown, attach a wide grip handle to the machine, seated, and grip it
			with a pronated grip. Depress shoulder blades, flex elbow, extend shoulder, pull handle behind neck, and repeat for desired repetitions.</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<div style={{display: states[0]}}>
		    <h1 class="text-center">
			Instructions for Back Neck Lat Pull Downs
		    </h1>		    		
		    <p>
			To perform a lat pulldown, attach a wide grip handle to the machine, seated, and grip it with a pronated grip. Depress shoulder
			blades, flex elbow, extend shoulder, pull handle behind neck, and repeat for desired repetitions.
		    </p>
		</div>
		<div style={{display: states[1]}}>
		    <h1 class="text-center">
			Instructions for Seated Cable Rows
		    </h1>		    				 
		    <p>
			Set a weight on a weight stack and attach a bar to a seated row machine. Grasp the bar neutrally, pull the weight up, pull the
			handle into your stomach, squeeze, pause, and slowly lower the weight back to the starting position.To perform a lat pulldown,
			attach a wide grip handle to the machine, seated, and grip it with a pronated grip. Depress shoulder blades, flex elbow,
			extend shoulder, pull handle behind neck,
			and repeat for desired repetitions.
		    </p>
		</div>
		<div style={{display: states[2]}}>
		    <h1 class="text-center">
			Instructions for Deadlifts
		    </h1>
		    <p>
			The conventional deadlift involves positioning the bar over shoelaces, assuming a hip width stance, pushing hips back and hinge
			forward, grasping the bar with a shoulder width, inhaling, and pulling up slightly while allowing hips to drop in a seesaw fashion.
			Positioning lats and pushing the floor away, the bar tracks in a straight line, and then reversing the movement. Repeat for
			desired repetitions.
		    </p>		    
		</div>
		<div style={{display: states[3]}}>
		    <h1 class="text-center">
			Instructions for Cable Face Pull
		    </h1>
		    <p>
			ructions Exercise 4: Perform a split stance with pronated grip, inhale, and pull a rope towards your face, then slowly lower the
			rope and repeat for desired repetitions.To perform a lat pulldown, attach a wide grip handle to the machine, seated, and grip it
			with a pronated grip. Depress shoulder blades, flex elbow, extend shoulder, pull handle behind neck, and repeat for desired repetitions.
		    </p>
		</div>
	    </Row>	    
	</section>

    );
}

export default Back;
