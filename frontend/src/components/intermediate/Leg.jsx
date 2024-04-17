
import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Leg() {    
    return (
	<section>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Wednesday: Legs
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
			    <td>Squat</td>
			    <td>4</td>
			    <td>10, 10, 8, 8</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Barbell%20Back%20Squat.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Dumbbell Lunge</td>		
			    <td>3</td>
			    <td>8 on each leg</td>			    
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Dumbbell%20Walking%20Lunge.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
		    <tr>
			<td>45 Degree Leg Press</td>
			<td>3</td>
			<td>12</td>
			<video width="320" height="120" controls>
			    <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Leg%20Press.mp4" type="video/mp4">
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
			    <td>Leg Curl</td>
			    <td>3</td>
			    <td>15</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Leg%20Curl.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Leg Extension</td>			    
			    <td>3</td>
			    <td>15</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Leg%20Extension.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
o			    <td>Standing Calf Raises</td>
			    <td>5</td>			    
			    <td>10-8-8-8-6</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Toes%20In%20Standing%20Machine%20Calf%20Raise.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Seated Calf Raises</td>
			    <td>5</td>
			    <td>15 (light)</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Seated%20Calf%20Raise%20(Toes%20Neutral).mp4" type="video/mp4">
				</source>
				</video>
			</tr>
		    </tbody>
		</Table>

	    </Row>
	</section>

    );
}

export default Leg;
