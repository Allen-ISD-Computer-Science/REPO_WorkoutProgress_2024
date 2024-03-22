import Nav from '../components/Navbar.jsx';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Welcome() {

    return (
	    
	<section>
	    <Nav />
	    <h1 class="text-center">
		Welcome to Gym Starter Bulk like a Beast!
	    </h1>
	    <img src="https://raw.githubusercontent.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/main/img/homepageimg.png" alt="React Image" />
	</section>
    );
}

export default Welcome;
