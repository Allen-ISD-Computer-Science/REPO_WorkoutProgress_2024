import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Shoulder() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Tuesday: Shoulders
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
			    <td>Barbell Front Raise</td>
			    <td>4</td>
			    <td>12</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Barbell%20Front%20Raise.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Select the desired weight and load it onto a barbell.
Assume a shoulder width stance and grasp the bar at shoulder width with a pronated grip.
Inhale, brace your abs, and raise the arms vertically while keeping the elbows nearly locked out.
Once the arms are parallel with the floor, slowly lower the bar back to the starting position.Repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Dumbbell Lateral Raise</td>		
			    <td>4</td>
			    <td>15, 12, 8, 8 (adding weight)</td>			                             <video width="320" height="120" controls>
															 <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Dumbbell%20Lateral%20Raise.mp4" type="video/mp4">
															 </source>
														     </video>
			    <td>Select the desired weight from the rack, then take a few steps back into an open area.
Take a deep breath and raise the dumbbells to shoulder height using a neutral grip (palms facing in) while keeping the elbows slightly bent.
Slowly lower the dumbbells back to the starting position under control. Repeat for the desired number of repetitions.</td>
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
			<td>Seated Dumbbell Press</td>
			<td>4</td>
			<td>10-10-8-8</td>
			<video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Dumbbell%20Press%20(Bilateral).mp4" type="video/mp4">
			    </source>
			</video>
			<td>Set up an adjustable angle bench to 90 degrees and select the desired weight from the rack.
Pick up the dumbbells from the floor using a neutral grip (palms facing in). Position the end of the dumbbells on your knees and sit down on the bench.
Using a safe and controlled motion, kick your knees up one at a time in order to get each dumbbell into place.
Once the dumbbells are in place, rotate your palms so they are facing forward.
Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.
Slowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).Repeat for the desired number of repetitions.</td>
		    </tr>
		    <tr>
			<td>One Arm Cable Lateral Raise</td>
			<td>3</td>
			<td>12</td>
			<video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Single%20Arm%20Cable%20Lateral%20Raise.mp4" type="video/mp4">
			    </source>
			</video>
			<td>Position a cable at the lowest position possible and attach a single handle.
Reach across your body and grab the handle with a neutral grip.
Keep the elbow slightly bent and pull the handle across your body and raise laterally.
Slowly lower the handle back to the starting position under control. Repeat for the desired number of repetitions.</td>
		    </tr>
		</tbody>
	</Table>
	</Row>
	</section>

    );
}

export default Shoulder;
