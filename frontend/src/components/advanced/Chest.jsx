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
			    <video width="320" height="120" controls>
			      <source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Barbell%20Bench%20Press.mp4" type="video/mp4">
			      </source>
				</video>
			      </tr>
			<tr>
			    <td>Incline Barbell Bench Press</td>			    
			    <td>4</td>
			    <td>8</td>			    
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Steve%20Kuclo%20Drops%20Some%20Knowledge%20on%20How%20to%20Incline%20Bench%20Press.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Dumbbell Flys</td>
			    <td>4</td>
			    <td>10-10-12-12</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/M&S%20Quick%20Tip_%20How%20to%20Perform%20Perfect%20Dumbbell%20Flys.mp4" type="video/mp4">
				</source>
				</video>
			</tr>
			<tr>
			    <td>Chest Dip</td>
			    <td>4</td>			    
			    <td>Until Failure</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Tricep%20Dips.mp4" type="video/mp4">
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
			    <td>Lying Tricep Extension</td>
			    <td>3</td>
			    <td>8-10-10</td>
			    <video width="320" height="120" controls>
	  <source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Lying%20Tricep%20Extensions.mp4" type="video/mp4">
	      </source>
	  </video>
			</tr>
			<tr>
			    <td>Tricep Dip</td>
			    <td>3</td>
			    <td>Until Failure</td>
			    <video width="320" height="120" controls>
				<source src="https://github.com/kylesdev91/kylesdev91.github.io/raw/master/Tricep%20Dips.mp4" type="video/mp4">
				</source>
				</video>
				</tr>
			<tr>
			    <td>Tricep Extension</td>
			    <td>4</td>
			    <td>10</td>
			    <video width="320" height="120" controls>
				<source src="https://raw.githubusercontent.com/kylesdev91/kylesdev91.github.io/master/Rope%20Tricep%20Extension.mp4" type="video/mp4">
				</source>
			    </video>
			    
			</tr>
		    </tbody>
		</Table>
	    </Row>
	</section>

    );
}
export default Chest;
