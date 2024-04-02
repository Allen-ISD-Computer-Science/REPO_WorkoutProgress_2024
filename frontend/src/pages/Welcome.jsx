import Nav from '../components/Navbar.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Col } from 'react-bootstrap';
import '../styles/welcome.css';
function Welcome() {

    return (
	<section class="d-flex overflow-hidden m-0 p-0 vh-100 vw-100">
	    <Col className="title-container p-0 m-auto">
		<div class="animated-title">
		    <div class="text-top border-bottom border-dark mx-auto">
			<div class="text-center">
			    <span id="logo">bulk like a</span> <span id="beast">beast</span>
			</div>
		    </div>
		    <div class="text-bottom mx-auto">
			<div class="text-center">
			    <a href="./about_us">
				<button id="get-started" class="text-dark bg-transparent">GET STARTED<FontAwesomeIcon icon={faArrowRight} />
				</button>
			    </a>
			</div>
		    </div>		
		</div>
	    </Col>
	    <Col className="welcome_bg p-0 m-0 ">
		
	    </Col>
	</section>
    );
}

export default Welcome;
