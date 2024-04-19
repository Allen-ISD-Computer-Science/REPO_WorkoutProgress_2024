import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Back() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Thursday: Back
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits a intermediate level workouts routine. 
		</p>
		<Table>
		    <thead>
			<tr>
			    <th>Exercise</th>
			    <th>Sets</th>
			    <th>Reps</th>			    
			    <th>Workout Videos</th>
			    <th>Workout Description</th>
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td>Seated Row</td>
			    <td>4</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Cable%20Row.mp4" type="video/mp4">
				</source>
			    </video>
			     <td>Set the appropriate weight on the weight stack and attach a close-grip bar or V-bar to the seated row machine.
Grasp the bar with a neutral grip (palms facing in).
Keeping your legs slightly bent and your back straight, pull the weight up slightly off the stack. You should be sitting straight upright with your shoulders back. This is the starting position.
Keeping your body in position, pull the handle into your stomach.
Pull your shoulder blades back, squeeze, pause, and then slowly lower the weight back to the starting position.
Repeat for desired reps.</td>
			    </tr>
			<tr>
			    <td>Bent Over Barbell Row</td>		
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Bent%20Over%20Barbell%20Row.mp4" type="video/mp4">
			    </source>
			    </video>
			    <td>Assume a standing position while holding the bar using a double overhand grip.
Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.
Pull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.
Repeat for the desired number of repetitions.</td>
		</tr>
		       </tbody>
		</Table>
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
			    <td>Bent Over Row</td>
			    <td>3</td>
			    <td>12</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Bent%20Over%20Dumbbell%20Row%20Unilateral.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Assume a standing position while holding the bar using a double overhand grip.
Hinge forward until your torso is roughly parallel with the floor (or slightly above) and then begin the movement by driving the elbows behind the body while retracting the shoulder blades.
Pull the bar towards your belly button until it touches your body and then slowly lower the bar back to the starting position under control.
Repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Smith Machine Upright Row</td>			    
			    <td>3</td>
			    <td>8-10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Standing%20Smith%20Machine%20Upright%20Row.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Select the desired weight and load it onto a barbell.
Unrack the bar by rotating the safety latches off the j-hooks.
Inhale, brace your abs, and then lead the movement by driving the elbows high as you pull the bar to chest height.
When the bar has reached its peak, reverse the movement slowly while controlling the bar back to the starting position.
Repeat for the desired number of repetitions.</td>
			</tr>
		
		    </tbody>
		</Table>

	    </Row>
	</section>

    );
}

export default Back;
