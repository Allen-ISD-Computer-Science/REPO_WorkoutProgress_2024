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
		    <img src={waterBottle} alt="2" class="workouts img-fluid"/>
		    <img src={Gatorade} alt="2" class="workouts img-fluid" />
		    <img src={proteinShake} alt="2" class="workouts img-fluid"/>
		</center>
	    </row>
	    <rowL>
		
		<levelcolumn>
		    <Button href="https://muscleandfitness.com/nutrition/healthy-eating/ultimate-diet-plan-beginners/" className="workouts_btn-style">New</Button>
		    </levelcolumn>
		<levelcolumn>
		    <Button href="https://www.healthline.com/nutrition/eat-after-workout" className="workouts_btn-style">Intermediate</Button>
		</levelcolumn>
		<levelcolumn>
		    <Button href="https://static.buffalostateathletics.com/custompages/Strength/STR-Athlete%20Basic%20Nutrition.pdf" className="workouts_btn-style">Pro</Button>
		    </levelcolumn>
		
	    </rowL>
	    <row>
		</row>
	    <row>
		<center>
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
		    </center>
	    </row>

	    <Button href="./supplements" className="workouts_btn-style">Supplements</Button>
	</section>
	
    );
}

export default Diets;
