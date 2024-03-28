import Nav from '../components/Navbar.jsx';
import {Container, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Welcome() {

    return (
	<section class="overflow-hidden m-0 p-0 vh-100 vw-100">	    	    	   
	    <div class="welcome_bg w-100 h-100">
		
		<div class="welcome_animated-title  ml-5">
		    <div class="text-top">
			<div>
			    <span class="welcome_font">welcome to</span>
			    <span class="welcome_font">bulk like a beast</span>
			</div>
		    </div>
		    <div class="text-bottom">
			<div><a href="./about_us"><button class="welcome_font rounded border-dark border-5 bg-transparent">get started<FontAwesomeIcon  icon={faArrowRight} /></button></a></div>
		    </div>
		</div>
	    </div>	    
	</section>
    );
}

export default Welcome;
