import '../styles/frontpages.css';
import Button from 'react-bootstrap/Button';

function Beginner() {
    
    return (

	<section>	
	    <div class="title">
	<h1>Navigation</h1>
	    </div>
	    <div class="navigation">
		<img src="https://raw.githubusercontent.com/Myoram1/Digital-Portfolio/master/Game_design_map_regarding_gym.jpg" alt="map" />
		<Button href= "https://reac-bootstrap.netlify.app/docs/components/buttons/" className="btn">
		    </Button>
	    </div>
	    <div class="pin diets">
		<span>Diets</span>
	    </div>
	    <div class="pin workouts">
		<span>Workouts</span>
	    </div>
	    <div class="pin credits">
		<span>Credits</span>
	    </div>

	</section>
    );
}

export default Beginner;
