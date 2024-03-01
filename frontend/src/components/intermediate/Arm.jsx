import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Arm() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Friday: Arms
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
			    <td>Lying Tricep Extension</td>
			    <td>3</td>
			    <td>8-10</td>			   
			</tr>
			<tr>
			    <td>One Arm Dumbbell Extension</td>		
			    <td>3</td>
			    <td>10</td>			    
			</tr>
			<tr>
			    <td>Tricep Extension</td>
			    <td>3</td>
			    <td>10</td>
				    
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
			    <td>Close Grip Bench Press</td>
			    <td>4</td>
			    <td>10-10-8-6</td>			   
			</tr>
			<tr>
			    <td>Lying Dumbbell Extension</td>			    
			    <td>3</td>
			    <td>10</td>			    
			</tr>
			<tr>
			    <td>Tricep Kickback</td>
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