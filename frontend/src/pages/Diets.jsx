import { Row, Col, Button } from 'react-bootstrap';

import '../styles/frontpages.css'
import waterBottle from '../images/bottle.png';
import proteinShake from '../images/ProteinShake.png';
import Gatorade from '../images/Gatorade.png';

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
	// top navihgation bar
	<div>
	    
	    <section className="header" style={{ backgroundColor: 'darkblue', padding: '10px' }}>
		<nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
		    <a href="homepage.html" style={{ textDecoration: 'none', color: 'white' }}>
		    </a>
		    <div className="nav-links" id="navLinks" style={{ display: 'flex', alignItems: 'center' }}>
			<i className="fa fa-times-circle-o" onClick={() => hideMenu()} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
			<ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
			    <li><a href="welcome" style={navLinkStyle}>Home</a></li>
			    <li><a href="about_us" style={navLinkStyle}>About</a></li>
			    <li className="workout" onClick={() => alert('You will need an account to access the workouts!')} style={{ ...navLinkStyle, cursor: 'pointer' }}>Workout</li>
			    <li className="diet" onClick={() => alert('You will need an account to access the diets!')} style={{ ...navLinkStyle, cursor: 'pointer' }}>Diet</li>
			    <li className="supplements" onClick={() => alert('You will need an account to access the supplements!')} style={{ ...navLinkStyle, cursor: 'pointer' }}>Supplements</li>
			    <li><a href="signup.html" style={navLinkStyle}>Sign Up</a></li>
			    <li><a href="login.html" style={navLinkStyle}>Log In</a></li>
			</ul>
			<i className="fa fa-times-circle-o" onClick={() => showMenu()} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
		    </div>
		    <i className="fa fa-bars" onClick={() => showMenu()} style={{ cursor: 'pointer' }}></i>
		</nav>
	    </section>
	    {/* end of nav bar*/}
	    <section>
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
	</div>
    );
}

export default Diets;
