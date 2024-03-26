import Nav from '../components/Navbar.jsx';
import {Row, Col} from 'react-bootstrap';
import '../styles/frontpages.css';
import jonsey from "../images/jonsey.jpg"

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
