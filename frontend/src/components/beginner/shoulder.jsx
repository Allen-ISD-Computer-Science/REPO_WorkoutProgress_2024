import {Row, Table} from 'react-bootstrap/';
import '../../styles/workouts.css';

function Chest() {    
    return (
	<section>
	    <Row className="mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="mb-5 text-center">
		    The Shoulders: An Overlooked Muscle
		</h1>

		<h4>Overview</h4>
		<p>
		    The shoulders aren't one of those muscles that is shown off as much as like the legs or chest. Still, it is vital
		    that shoulders are worked on as they create an incredible synergy with the rest of the muscles on the upper body.
		    Just look at Kevin Levrone, while you may not have similar genetics as he did you can not deny that good shoulders
		    help advance the structure of the body.
		</p>
		
		<h4>Major Anatomy of the Shoulders</h4>
		<h5>The Anterior Deltoid</h5>
		<p>
		    The main function of this muscle is shoulder flexion, which is like the arm being raised up or down. 
		</p>
		<h5>Pectoralis Minor</h5>
		<p>
		    This muscle sits right underneat the Clavicular fibers of your Pec Mejor. It originates on your upper rib cage and goes
		    through the edge of the sholder blade. It helps to pull the scapula foward and assists with shoulder and upper arm
		    stability.		    
		</p>				
	    </Row>
	    <Row className="info mx-lg-6 mx-md-5 mx-sm-3 mx-4">
		<h1 class="text-center">
		    Chest Workouts
		</h1>
		<p class="text-center">
		    Here is what we gathered that we think best fits a beginner level chest workout routine. 
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
			    <td>3-4</td>
			    <td>10-12</td>			   
			</tr>
			<tr>
			    <td>Incline Bench Press</td>			    
			    <td>3-4</td>
			    <td>10-15</td>			    
			</tr>
			<tr>
			    <td>Decline Bench Press</td>
			    <td>4-5</td>			    
			    <td>10-15</td>			  			    
			</tr>
			<tr>
			    <td>Incline Dumbell Fly</td>
			    <td>3</td>
			    <td>10-15</td>
			</tr>
		    </tbody>
		</Table>
	    </Row>
	</section>

    );
}

export default Chest;
