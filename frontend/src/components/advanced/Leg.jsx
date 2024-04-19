import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
function Leg() {
    return	  (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Wednesday: Legs
		</h1>
		<p class="text-center">     Here is what we gathered that we think best fits an advanced level workout routine.
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
			    <td>Squat</td>
			    <td>5</td>
			    <td>5-8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Barbell%20Back%20Squat.mp4">
				</source>
			    </video>
			    <td>Set up for the exercise by setting the barbell to just below shoulder height and loading the weight you want to use. Stand under the bar with your feet at about shoulder width apart. Position the bar so that it is resting on the muscles on the top of your back, not on the back of your neck. The bar should feel comfortable. If it doesnt, try adding some padding to the bar. Now take your hands over the back and grip the bar with a wide grip for stability. You should now bend at the knees and straighten your back in preparation to take the weight off the rack. Keeping your back straight and eyes up, push up through the legs and take the weight off the rack. Take a small step back and stabilize yourself. Keeping your eyes facing forward slowly lower your body down. Dont lean forward as you come down. Your buttocks should come out and drop straight down. Squat down until your thighs are parallel with the floor, and then slowly raise your body back up by pushing through your heels. Do not lock the knees out when you stand up, and then repeat the movement.</td>
			</tr>
			<tr>
			    <td>45 Degree Leg Press</td>
			    <td>4</td>
			    <td>10, last set until failure</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Leg%20Press.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Load the machine with the desired weight and take a seat. Sit down and position your feet on the sled with a shoulder width stance. Take a deep breath, extend your legs, and unlock the safeties. Lower the weight under control until the legs are roughly 45 degrees or slightly below. Drive the weight back to the starting position by extending the knees but don’t forcefully lockout. Repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Leg Extension</td>
			    <td>4</td>
			    <td>8-10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Seated%20Leg%20Extension.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>Select the desired resistance on the weight stack and insert the pin.
Adjust the seat so that the knees are directly in line with the axis of the machine.
Sit down and position your shins behind the pad at the base of the machine.
Take a deep breath and extend your legs as you flex your quadriceps.
As you lock out the knees, exhale to complete the repetition.
Slowly lower your feet back to the starting position and repeat for the desired number of repetitions.</td>
			</tr>
			<tr>
			    <td>Leg Curl</td>
			    <td>4</td>
			    <td>8-10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Seated%20Leg%20Curl.mp4" type="video/mp4">
				</source>
			    </video>
			    <td>The lying leg curl is a great exercise to isolate the hamstrings. Set up for the leg curl by selecting the weight you want to use on the stack and adjusting the padding to suit your leg length. Lay face down on the machine. The padding should be positioned just above the back of your ankles. If its higher than that, adjust the length. Tense up the hamstrings by taking the weight slightly off the stack. This is the starting position for the exercise. Squeeze the hamstrings and curl the weight up as far as possible. Squeeze the hamstring hard, and then slowly lower the weight back to the starting position. Repeat for desired reps.</td>
				</tr>
			<tr>
			    <td>45 Degree Calf Raises</td>
			    <td>4</td>
			    <td>12-15</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Seated%20Calf%20Raise%20(Toes%20Neutral).mp4" type="video/mp4">
				</source>
				</video>
			    <td>Place feet on a machine platform, with toes pointed forward. Position quads under knee pad, hands on top. Extend ankles, lower heels, dorsiflex calves, exhale, and repeat for assigned repetitions</td>
			</tr>
			<tr>
			    <td>Seated Calf Raises</td>
			    <td>5</td>
			    <td>15 (light)</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Seated%20Calf%20Raise%20(Toes%20Neutral).mp4" type="video/mp4">
				</source>
				</video>
			    <td>Place feet on a machine platform, with toes pointed forward. Position quads under knee pad, hands on top. Extend ankles, lower heels, dorsiflex calves, exhale, and repeat for assigned repetitions</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	</section>
    );
}

export default Leg;
