import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
function Shoulder()
{
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Tuesday: Shoulders
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits an advanced level workout routine.
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
			    <td>Military Press</td>
			    <td>4</td>
			    <td>8-10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Overhead%20Press.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Adjust the barbell to just below shoulder height then load the desired weight onto the bar.
Assume a shoulder width stance and place your hands at (or just outside of) shoulder width with a pronated grip on the bar.
Step underneath the bar and unrack it while keeping the spine in a neutral position.
Take two steps back, inhale, brace, tuck the chin, then press the bar to lockout overhead.
Exhale once the bar gets to lockout and reverse the movement slowly while controlling the bar back to your chest.
Repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Barbell Front Raise</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Barbell%20Front%20Raise.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Select the desired weight and load it onto a barbell. Assume a shoulder width stance and grasp the bar at shoulder width with a pronated grip. Inhale, brace your abs, and raise the arms vertically while keeping the elbows nearly locked out. Once the arms are parallel with the floor, slowly lower the bar back to the starting position.Repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Upright Row</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Barbell%20Upright%20Row.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>The barbell upright row is one of the best exercises for building the upper traps and shoulders. Load up a barbell with the weight you want to use and stand facing it with your feet at around shoulder width apart.
Grasp the barbell with an overhand grip (palms facing down), and hands slightly closer than shoulder width apart.
Pick the bar up, bending at the knees and keeping your back straight.
Keeping your back straight and eyes facing forwards, lift the bar straight up while keeping it as close to your body as possible (you should pull the bar up to around chest height - nearly touching your chin).
Pause, and then slowly lower the bar back to the starting position.
Repeat for desired reps.</td>
			</tr>
			<tr>
			    <td>Dumbbell Lateral Raise</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Dumbbell%20Lateral%20Raise.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Load the machine, take a seat, position feet on the sled, lower weight, lower legs, return to starting position, repeat for desired repetitions, ensuring proper control and safety.</td>
			</tr>
			<tr>
			    <td>Machine Reverse Fly</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Machine%20Reverse%20Fly.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Face the fly machine while seated with your chest against the pad and the handles positioned in front of your torso.
Reach forward and grasp each handle with a pronated or neutral grip.
Contract the rear delts while keeping the elbows bent and open the arms in a reverse fly motion.
Slowly lower the handles back to the starting position and repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Dumbbell Shoulder Press</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Seated%20Dumbbell%20Press%20(Bilateral).mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Set up for the exercise by grabbing a pair of dumbbells and standing up with your feet around shoulder width apart.
Raise the dumbbells to shoulder height on each side, and rotate your palms so they are facing forward. This is the starting position for the exercise.
Take a deep breath then press the dumbbells overhead by extending the elbows and contracting the deltoids.
Slowly lower the dumbbells back to the starting position (the arms should be roughly 90 degrees or slightly lower depending upon limb lengths).
Repeat for the desired number of repetitions.</td>
			</tr>
		    </tbody>

		</Table>

	    </Row>

	</section>

	
    );

}


export default Shoulder;
