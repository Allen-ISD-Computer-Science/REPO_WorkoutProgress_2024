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
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Barbell%20Front%20Raise.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Dumbbell Lateral Raise</td>		
			    <td>4</td>
			    <td>15, 12, 8, 8 (adding weight)</td>			                             <video width="320" height="120" controls>
															 <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Dumbbell%20Lateral%20Raise.mp4" type="video/mp4">
															 </source>
															 </video>
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
			<video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Dumbbell%20Press%20(Bilateral).mp4" type="video/mp4">
			    </source>
			    </video>
		    </tr>
		    <tr>
			<td>One Arm Cable Lateral Raise</td>
			<td>3</td>
			<td>12</td>
			<video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Single%20Arm%20Cable%20Lateral%20Raise.mp4" type="video/mp4">
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
