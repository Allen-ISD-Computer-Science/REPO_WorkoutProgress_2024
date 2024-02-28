import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Back() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Thursday: Back
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
			    <td>Seated Row</td>
			    <td>4</td>
			    <td>10</td>			   
			</tr>
			<tr>
			    <td>Bent Over Barbell Row</td>		
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
			    <td>Bent Over Row</td>
			    <td>3</td>
			    <td>12</td>			   
			</tr>
			<tr>
			    <td>Smith Machine Upright Row</td>			    
			    <td>3</td>
			    <td>8-10</td>			    
			</tr>
		
		    </tbody>
		</Table>

	    </Row>
	</section>

    );
}

export default Back;
