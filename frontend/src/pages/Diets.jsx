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
	    <div className="text-box">
		
		<tLabel> Diets Page
		</tLabel>
	    </div>
	    
	    <row>
		
		
		<img src={waterBottle} alt="2" class="workouts img-fluid"/>
		<img src={Gatorade} alt="2" class="workouts img-fluid" />
		<img src={proteinShake} alt="2" class="workouts img-fluid"/>
	    </row>
	    <row>
		<Button href="https://muscleandfitness.com/nutrition/healthy-eating/ultimate-diet-plan-beginners/" className="workouts_btn-style">New</Button>
		<Button href="./intermediate" className="workouts_btn-style">Intermediate</Button>
		<Button href="https://static.buffalostateathletics.com/custompages/Strength/STR-Athlete%20Basic%20Nutrition.pdf" className="workouts_btn-style">Pro</Button>
	    </row>
	    <row>
		<Col>
		    
		    
		    <h1 className="subintL">
			Diets for is this working athletes,
			foods to fuel your body
			and build growth
		    </h1>
		</Col>
		<Col>			
		    
		    
		    
		    
		    
		    <h1 className="subintL">
			Diets for skilled athletes that limit
			unhealthy additives, but do not
			compromise on flavor.
		    </h1>
		</Col>
		<Col>
		    
		    
		    
		    
		    
		    
		    <h1 className="subintL">
			Diets for seasoned athletes, focus
			on specific nutrition groups for
		    maximum performance.</h1>
		</Col>
	    </row>
	</section>
	
    );
}

export default Diets;
