import Nav from '../components/Navbar.jsx';
import {Row, Col} from 'react-bootstrap';
import { motion, useScroll } from "framer-motion";
function AboutUs() {
    
    
    return (
	<section>
	    <Nav />
	    <h1>
		Meet the TEAM
	    </h1>
	    
	    <Row >
		
		<Col>
		    <div class="float-right v-stack d-inline">
			<h1 class="">Our Goal</h1>
			<p class="">
			    The team here at Bulk Like A Beast values fitness and desires for all to
			    be the best verison of themselves. This website is meant to be informative
			    and provide helpful advice to those in the gym or who are just getting
			    started.
			</p>
		    </div>
		</Col>

	    </Row>
	    
	    <Row className="m-0">
		<Col className="mx-5 d-flex justify-content-center">
		    <img
			class="about_images"
			alt="kyle"
			src={"https://raw.githubusercontent.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/main/img/about_us.jpg"}
		    />
		    <div>
			<h1>Kyle The Beast</h1>
			Kyle is the UX/UI desginer of this project and is our CEO.
			He also is an active gym goer and encourages many not into
			fitness to join.
		    </div>
		</Col>		
	    </Row>
	    
	    <Row className="m-0">
		<Col className="mx-5 d-flex justify-content-center">
		    <img
			class="about_images"
			alt="myoram"
			src={"../images/myoram.gif"}			
		    />
		    <div>
			<h1>Myoram</h1>
			Myoram, the former CEO, is the product manager. He ensures
			that our users concerns are heard and dealt with. While he
			is not the most active person in fitness, he does wish for
			many to also become fit. 
		    </div>		    
		</Col>

	    </Row>
	    <Row>
		<Col>		    
		</Col>
		<Col>
		    <div>Daniel</div>
		    <div>
			Daniel is our DBA, even though we didn't really utilize
			the DBA to often. Outside of the project he's Allen High's
			number 1 basketball player, best point guard in the nation.			
		    </div>
		</Col>

	    </Row>

	</section>
    );
}

export default AboutUs;
