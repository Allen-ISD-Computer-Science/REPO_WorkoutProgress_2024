import {Col, Button } from 'react-bootstrap';

import '../styles/diets.css'
import waterBottle from '../images/bottle.png';
import proteinShake from '../images/caramelProteinShake.png';
import Gatorade from '../images/bGatorade.png';
import Nav from '../components/Navbar.jsx';

function Diets() {
    return (
	<section>
	    <Nav />
	    
	    <center>
		<tLabel> Diets Page
		    
		</tLabel>
	    </center>
	    
	    
	    <row>
		
		<center>
		    
		    
		    
		</center>
	    </row>
	    <rowL>
		
		<levelcolumn>
		    <img src={waterBottle} alt="2" class="workouts img-fluid"/>
		    <Button href="https://muscleandfitness.com/nutrition/healthy-eating/ultimate-diet-plan-beginners/" className="workouts_btn-style">New</Button>
		    <h1 className="subintL">		    
			Diets for is this working athletes,
			foods to fuel your body
			and build growth
		    </h1>
		</levelcolumn>
		<levelcolumn>
		    <img src={Gatorade} alt="2" class="workouts img-fluid" />
		    <Button href="https://www.healthline.com/nutrition/eat-after-workout" className="workouts_btn-style">Intermediate</Button>
		    <h1 className="subintL">
			Diets for skilled athletes that limit
			unhealthy additives, but do not
			compromise on flavor.
		    </h1>
		</levelcolumn>
		<levelcolumn>
		    <img src={proteinShake} alt="2" class="workouts img-fluid"/>
		    <Button href="https://static.buffalostateathletics.com/custompages/Strength/STR-Athlete%20Basic%20Nutrition.pdf" className="workouts_btn-style">Pro</Button>
		    <h1 className="subintL">
			Diets for seasoned athletes, focus
			on specific nutrition groups for
		    maximum performance.</h1>

		</levelcolumn>
		
	    </rowL>
	    <row>
	    </row>
	    <row>
		<center>
		    <Col>
			<Button href="https://www.healthline.com/nutrition/high-protein-foods" className="workouts_btn-style">Protein</Button>
			<Button href="https://static.buffalostateathletics.com/custompages/Strength/STR-Athlete%20Basic%20Nutrition.pdf" className="workouts_btn-style">Low Carbs</Button>
			<Button href="https://www.livescience.com/why-a-balanced-diet-is-important" className="workouts_btn-style">Balenced Diet</Button>
		    </Col>
		    <Col>			
			
			
			
			
			
			
		    </Col>
		    <Col>
			
			
			
			
			
			
		    </Col>
		</center>
	    </row>

	    
	</section>
	
    );
}

export default Diets;
