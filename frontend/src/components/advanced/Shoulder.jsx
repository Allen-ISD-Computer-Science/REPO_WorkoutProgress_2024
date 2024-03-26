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
			</tr>
			<tr>
			    <td>Barbell Front Raise</td>
			    <td>3</td>
			    <td>10</td>
			</tr>
			<tr>
			    <td>Upright Row</td>
			    <td>4</td>
			    <td>8</td>
			</tr>
			<tr>
			    <td>Dumbbell Later Raise</td>
			    <td>4</td>
			    <td>8</td>
			</tr>
			<tr>
			    <td>Dumbbell Reverse Fly</td>
			    <td>3</td>
			    <td>10</td>
			</tr>
			<tr>
			    <td>Dumbbell Shoulder Press</td>
			    <td>4</td>
			    <td>8</td>
			</tr>
		    </tbody>

		</Table>

	    </Row>

	</section>

	
    );

}


export default Shoulder;
