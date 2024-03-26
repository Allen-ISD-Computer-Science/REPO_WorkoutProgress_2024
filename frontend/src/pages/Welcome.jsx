import Nav from '../components/Navbar.jsx';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

function Welcome() {

    return (
	    
	<section>
	    <Nav />
	    <div class="d-flex h-100 vh-100 overflow-hidden">
		<Col className="">
		    <h1>
			Welcome to Gym Starter Bulk like a Beast!
		    </h1>
		</Col>		
		<Col className="">
		    <div class="d-flex h-90 welcome_image-1">
			
		    </div>
		</Col>
	    </div>
	</section>
    );
}

export default Welcome;
