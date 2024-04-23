
import { Row, Col, Button } from 'react-bootstrap';
import '../styles/supplements.css'
import Nav from '../components/Navbar.jsx';

function Supplements() {
    const spacing = 2;
    return (
	
	
	<body>
	    <Nav />
	    
	    <section>
		<center>
		    <tLabel> Supplements Page </tLabel>
		</center>
		
<row>
		    <levelcolumn>
		    	<Button href="https://www.muscleandfitness.com/supplements/build-muscle/your-first-supplement-stack-2/" className="workouts_btn-style">New</Button>
		    </levelcolumn>
		    
		    		    
		    <levelcolumn>
			
		    	<Button href="https://interplexus.com/" className="workouts_btn-style">Intermediate</Button>
		    </levelcolumn>
		    
		    		    
		    <levelcolumn>
		    	<Button href="https://docs.google.com/document/d/1IQogYW-MvzKp0_eiOtFoXk1oMHRJDIsehw7y377Laww/edit" className="workouts_btn-style">Pro</Button>
		    </levelcolumn>
		    
		    
		    
		</row>

		
		<row>
		    <levelcolumn>
		    <h1 className="subintL">
			Don't get too woried about supplements as a beginner, you can start out with simple nature made daily vitamin, or vitamin c.
		    </h1>
			</levelcolumn>
		    <levelcolumn>
		    <h1 className="subintL">
			Now at an intermediate level prioritizing good nutrition is essential if you wanna see better results in the weight room. Based off of your diet and goals we can help you find supplements to aid your workout journey.
		    </h1>
			</levelcolumn>
		    <levelcolumn>
		    <h1 className="subintL">
			For pros, supplements are what give the athlete an extra step ahead of their competition, and unsure that they are doing everything they can to become their best self.
		    </h1>
			</levelcolumn>


		</row>
			    </section>	    
	</body>
    );




}

export default Supplements;
