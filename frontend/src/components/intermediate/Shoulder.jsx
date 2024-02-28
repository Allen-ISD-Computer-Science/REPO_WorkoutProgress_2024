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
			</tr>
		    </thead>
		    <tbody>
			<tr>
			    <td>Barbell Front Raise</td>
			    <td>4</td>
			    <td>12</td>			   
			</tr>
			<tr>
			    <td>Dumbbell Lateral Raise</td>		
			    <td>4</td>
			    <td>15, 12, 8, 8 (adding weight)</td>			    
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
		    </tr>
		    <tr>
			<td>One Arm Cable Lateral Raise</td>
			<td>3</td>
			<td>12</td>
		    </tr>
		</tbody>
	</Table>
	</Row>
	</section>

    );
}

export default Shoulder;
