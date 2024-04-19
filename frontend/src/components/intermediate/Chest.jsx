import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Chest() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Monday: Chest and Triceps
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
			    <td>Dumbbell Bench Press</td>
			    <td>3</td>
			    <td>10-10-8</td>
			       <video width="320" height="120" controls>
	  <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Dumbbell%20Bench%20Press.mp4" type="video/mp4">
	      </source>
			       </video>
			    <td>Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the bench.
To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.
Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).
Contract the chest and push the dumbbells back up to the starting position. Repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Incline Dumbbell Bench Press</td>			    
			    <td>3</td>
			    <td>10</td>
			        <video width="320" height="120" controls>
	  <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Incline%20Dumbbell%20Bench%20Press.mp4" type="video/mp4">
	      </source>
				</video>
			    <td>Pick up the dumbbells off the floor using a neutral grip (palms facing in). Position the ends of the dumbbells in your hip crease, and sit down on the edge of an incline bench.
To get into position, lay back and keep the weights close to your chest. Once you are in position, take a deep breath, and press the dumbbells to lockout at the top.
Slowly lower the dumbbells under control as far as comfortably possible (the handles should be about level with your chest).
Contract the chest and push the dumbbells back up to the starting position. Repeat for the desired number of repetitions.</td>
			
			</tr>
			<tr>
			    <td>Chest Dip</td>
			    <td>3</td>			    
			    <td>Until Failure</td>
			        <video width="320" height="120" controls>
	  <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Dip%20(Parallel%20Bars).mp4" type="video/mp4">
	      </source>
				</video>
			    <td>Step up on the dip station (if possible) and position your hands with a neutral grip.
Initiate the dip by unlocking the elbows and slowly lowering the body until the forearms are almost parallel with the floor.
Control the descent to parallel and then drive back to the starting position by pushing through the palms. Repeat for the desired number of repetitions.</td>
			
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
			    <td>Lying Tricep Extension</td>
			    <td>3</td>
			    <td>8-10</td>
			     <video width="320" height="120" controls>
	  <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Lying%20Tricep%20Extensions.mp4" type="video/mp4">
	      </source>
			     </video>
			    <td>

    Grab a pair of dumbbells and sit on the end of a flat bench with the dumbbells resting on your thighs.
    Lie back on the bench and extend the dumbbells above your head. The dumbbells should not be touching and you should be using a neutral grip (palms facing each other).
    Bending at the elbows only, keeping your elbows fixed and pointing at your hips, slowly lower the dumbbells down beside your head until they are about level with your ears.
    Pause and squeeze the triceps. Then raise the dumbbells back to the starting position. Do not lock the elbows out, and then repeat for desired reps.

</td>
			</tr>
			<tr>
			    <td>One Arm Dumbbell Extension</td>
			    <td>3</td>
			    <td>10</td>
			     <video width="320" height="120" controls>
	  <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Single%20Arm%20Dumbbell%20Extension.mp4" type="video/mp4">
	      </source>
			     </video>
			    <td>Get into the starting position for the standing one-arm dumbbell extension by grasping a dumbbell in your left hand and holding it above your head with your palm facing forward.
Your elbow should be slightly bent. You can use your right arm to stabilize your body.
Begin the movement by bending at the elbow only and slowly lowering the dumbbell behind your neck.
Once the dumbbell is down as far as possible, slowly raise it back to the starting position. Do not lock your elbow out at the top of the movement, and then repeat for desired reps.</td>
			    
			</tr>
			<tr>
			    <td>Tricep Extension</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Rope%20Tricep%20Extension.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Attach a rope to a cable stack as high as possible and assume a standing position.
Grasp the rope with a neutral grip (palms facing in) and lean forward slightly by hinging at the hips.
Initiate the movement by extending the elbows and flexing the triceps.
Pull the rope downward until the elbows are almost locked out and then slowly lower under control back to the starting position. Repeat for the desired number of repetitions.</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	</section>

    );
}

export default Chest;
