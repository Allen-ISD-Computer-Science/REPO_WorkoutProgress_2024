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
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td>Squat</td>
			    <td>5</td>
			    <td>5-8</td>
			</tr>
			<tr>
			    <td>45 Degree Leg Press</td>
			    <td>4</td>
			    <td>10, last set until failure</td>
			</tr>
			<tr>
			    <td>Leg Extension</td>
			    <td>4</td>
			    <td>8-10</td>
			</tr>
			<tr>
			    <td>Leg Curl</td>
			    <td>4</td>
			    <td>8-10</td>
			</tr>
			<tr>
			    <td>45 Degree Calf Raises</td>
			    <td>4</td>
			    <td>12-15</td>
			</tr>
			<tr>
			    <td>Seated Calf Raises</td>
			    <td>5</td>
			    <td>15 (light)</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	</section>
    );
}

export default Leg;
