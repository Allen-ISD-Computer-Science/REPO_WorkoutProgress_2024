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
			</tr>
			<tr>
			    <td>Preacher Curls</td>
			    <td>4</td>
			    <td>8</td>
			</tr>
			<tr>
			    <td>Cable Curl</td>
			    <td>4</td>
			    <td>8</td>
			</tr>
			<tr>
			    <td>Close Grip Bench Press</td>
			    <td>4</td>
			    <td>6</td>
			</tr>
			<tr>
			    <td>Skull Crushers</td>
			    <td>3</td>
			    <td>10</td>
			</tr>
			<tr>
			    <td>Tricep Kickback</td>
			    <td>3</td>
			    <td>8-10</td>
			</tr>
			<tr>
			    <td>Barbell Wrist Curl</td>
			    <td>3</td>
			    <td>10</td>
			</tr>

		    </tbody>
		</Table>
		
	    </Row>
	</section>
	
    );
}
export default Arm;
