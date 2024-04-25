import Nav from '../components/Navbar_test.jsx';
import {Row, Col} from 'react-bootstrap';
import { motion, useScroll } from "framer-motion";
import '../styles/frontpages.css'
function AboutUs() {
        
    return (
	<section>
	    <Nav />
	    
	    <h1 class="text-center">
		Meet the TEAM
	    </tLabel>
	    </center>
	    <Row>		
		<Col className="">
		    <h1 class="text-center">Our Goal</h1>
		    <p class="text-center">
			The team here at Bulk Like A Beast values fitness and desires for all to
			be the best verison of themselves. This website is meant to be informative
			and provide helpful advice to those in the gym or who are just getting
			started.
		    </p>
		</Col>
	    </Row>
	    
	    <Row className="m-0">
		<Col className="mx-5 d-flex">
		    <img
			class="about_images"
			alt="kyle"
			src={"https://github.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/blob/development/frontend/src/images/Screenshot%202024-04-10%2010.32.19%20AM.png?raw=true"}
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
		<Col className="mx-5 d-flex ">
		    <img
			class="about_images"
			alt="myoram"
			src={"https://github.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/blob/development/frontend/src/images/myoram.gif?raw=true"}
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

	    <Row className="m-0">
		<Col className="mx-5 d-flex ">
		    <img
			class="about_images"
			alt="daniel"
			src={"https://github.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/blob/development/frontend/src/images/Screenshot%202024-04-10%2010.24.24%20AM.png?raw=true"}
		    />
		    <div>
			<h1>Daniel</h1>
			Daniel is our DBA, even though we didn't really utilize
			the database to often. Outside of the project he's Allen High's
			number 1 basketball player, best point guard in the nation.			
		    </div>
		    </Col>
		    </Row>

		    <Row className="m-0">
			<Col className="mx-5 d-flex ">
			    <img
				class="about_images"
				alt="aarman"
				src={"https://github.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/blob/development/frontend/src/images/Screenshot%202024-04-10%2010.36.22%20AM.png?raw=true"}
			    />
			    <div>
				<h1>Aarman</h1>
				Aarman is the #1 player in google Snake. This guy is literally
				cracked and has some of the most insane Fornite clips ever seen.
				Not only that, his Minecraft Crystal PvP skills make technoblade
				look dead, literally. Aside from his insane skills in video
				games he was our QA Analyst, meaning he just told us whether
				their was issues.
			    </div>
			</Col>
		    </Row>

		    <Row className="m-0">
			<Col className="mx-5 d-flex ">
			    <img
				class="about_images"
				alt="theo"
				src={"https://github.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/blob/development/frontend/src/images/Screenshot%202024-04-12%20at%2010.24.05%20AM.png?raw=true"}
			    />
			    <div>
				<h1>Theo</h1>
				Theo was our release manager, meaning he helped us with issues
				related to our github. Often merge conflicts happened and he
				was there to help us. Outside of school he plays hockey and often
				misses class because he's just to good and is relied on in the
				rink. 
			    </div>
			</Col>
		    </Row>

		    <Row className="m-0">
			<Col className="mx-5 d-flex ">
			    <img
				class="about_images"
				alt="matt"
				src={"https://github.com/Allen-ISD-Computer-Science/REPO_WorkoutProgress_2024/blob/development/frontend/src/images/Screenshot%202024-04-10%2010.27.46%20AM.png?raw=true"}
			    />
			    <div>
				<h1>Matt</h1>
				Matt is our project manager and assisted in ensuring everyone was
				on task. Along with that, he often goes to the gym mainly to jog
				and do cardio. 			
			    </div>
			</Col>
		    </Row>
	
	</section>
    );
}

export default AboutUs;
