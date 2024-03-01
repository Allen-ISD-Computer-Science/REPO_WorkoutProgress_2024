import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Chest() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Monday: Chest and Triceps
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
			    <td>Barbell Bench Press</td>
			    <td>5</td>
			    <td>6-8-8-10-10</td>			   
			</tr>
			<tr>
			    <td>Incline Barbell Bench Press</td>			    
			    <td>4</td>
			    <td>8</td>			    
			</tr>
			<tr>
			    <td>Dumbbell Flys</td>
			    <td>4</td>
			    <td>10-10-12-12</td>
			</tr>
			<tr>
			    <td>Chest Dip</td>
			    <td>4</td>			    
			    <td>Until Failure</td>			  			    
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
			    <td>Lying Tricep Extension</td>
			    <td>3</td>
			    <td>8-10-10</td>
			</tr>
			<tr>
			    <td>Tricep Dip</td>
			    <td>3</td>
			    <td>Until Failure</td>
			</tr>
			<tr>
			    <td>Tricep Extension</td>
			    <td>4</td>
			    <td>10</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	</section>

    );
}
export default Chest;
