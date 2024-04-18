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
			</tr>
			<tr>
			    <td>Barbell Front Raise</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Barbell%20Front%20Raise.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Upright Row</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Barbell%20Upright%20Row.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Dumbbell Later Raise</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Dumbbell%20Lateral%20Raise.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Dumbbell Reverse Fly</td>
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Machine%20Reverse%20Fly.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Dumbbell Shoulder Press</td>
			    <td>4</td>
			    <td>8</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/e8e25fbea08ffb670f9843fc88e1f651eb8dab66/Seated%20Dumbbell%20Press%20(Bilateral).mp4" type="video/mp4">
				</source>
				</video>
			</tr>
		    </tbody>

		</Table>

	    </Row>

	</section>

	
    );

}


export default Shoulder;
