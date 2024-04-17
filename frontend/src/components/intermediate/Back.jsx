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
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Cable%20Row.mp4" type="video/mp4">
				</source>
				</video>
			    </tr>
			<tr>
			    <td>Bent Over Barbell Row</td>		
			    <td>3</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Bent%20Over%20Barbell%20Row.mp4" type="video/mp4">
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
			    <td>Bent Over Row</td>
			    <td>3</td>
			    <td>12</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Bent%20Over%20Dumbbell%20Row%20Unilateral.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Smith Machine Upright Row</td>			    
			    <td>3</td>
			    <td>8-10</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Standing%20Smith%20Machine%20Upright%20Row.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
		
		    </tbody>
		</Table>

	    </Row>
	</section>

    );
}

export default Back;
