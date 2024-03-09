import { Row, Col, Button } from 'react-bootstrap';

import '../styles/frontpages.css'
import waterBottle from '../images/bottle.png';
import proteinShake from '../images/ProteinShake.png';
import Gatorade from '../images/Gatorade.png';
import Nav from '../components/Navbar.jsx';

function Diets() {
    const spacing = 2;

    const hideMenu = () => {
	// Add logic to hide the menu
	console.log('Menu hidden');
    };

    const showMenu = () => {
	// Add logic to show the menu
	console.log('Menu shown');
    };

    const navLinkStyle = {
	textDecoration: 'none',
	color: 'white',
	padding: '10px',
	display: 'block',
	textAlign: 'center',
	fontWeight: 'bold'
    };
    return (
	<section>
	    <Nav />
		<div className="text-box">
		    <h1 className="header-1" style={{ marginRight: spacing + 'em', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'center', color: 'green', marginBottom: '20px' }}>
		 	Diets Page
		    </h1>
		</div>	    
	    <row>
		    <levelcolumn>
			<div className="imagebox">
			    <img src={waterBottle} alt="2" class="workouts img-fluid"/>
			</div>
			<Button href="./beginner" className="workouts_btn-style">New</Button>
			
			<h1 className="subintL">
			    Diets for is this working athletes,
			    foods to fuel your body
			    and build growth
			</h1>
		    </levelcolumn>
		    <levelcolumn>
			
			<div className="imagebox">
			    <img src={Gatorade} alt="2" class="workouts img-fluid" />
			</div>
			<Button href="./intermediate" className="workouts_btn-style">Intermediate</Button>
			
			<h1 className="subintL">
			    Diets for skilled athletes that limit unhealthy additives, but do not compromise on flavor.
			</h1>
		    </levelcolumn>
		    <levelcolumn>
			<div className="imagebox">
			    <img src={proteinShake} alt="2" class="workouts img-fluid"/>
			</div>
			<Button href="./advanced" className="workouts_btn-style">Pro</Button>
			
			<h1 className="subintL">
			Diets for seasoned athletes, focus on specific nutrition groups for maximum performance.</h1>

		    </levelcolumn>
		</row>
	</section>
	
    );
}

export default Diets;
