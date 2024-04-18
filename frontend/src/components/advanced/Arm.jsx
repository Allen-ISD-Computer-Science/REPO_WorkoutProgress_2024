import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';
function Arm() {
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		Friday: Arms </h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits an advanced level workout routine.
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
			    <td>Standing Barbell Curl</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Standing%20Barbell%20Curl.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Preacher Curls</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Preacher%20Curls.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Cable Curl</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Cable%20Curl.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Close Grip Bench Press</td>
			    <td>4</td>
			    <td>6</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Bench%20Press%20Close%20Grip.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Skull Crushers</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/EZ%20Bar%20Skullcrusher.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Tricep Kickback</td>
			    <td>3</td>
			    <td>8-10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Seated%20Bent%20Over%20Tricep%20Dumbbell%20Kickback.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Barbell Wrist Curl</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Supinated%20Barbell%20Wrist%20Curt.mp4" type="video/mp4">
				</source>
				</video>
			</tr>

		    </tbody>
		</Table>
		
	    </Row>
	</section>
	
    );
}
export default Arm;
