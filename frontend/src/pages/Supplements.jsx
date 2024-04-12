
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
			Don't get too woried about supplements as a beginner, you can start out with  simple nature made daily vitamin, or vitamin c vitamins.
		    </h1>
			</levelcolumn>
		    <levelcolumn>
		    <h1 className="subintL">
			Now at an intermediate level you can start doing more work into your nutrition. Based off of your diet and goals we can help you find supplements t your workout Journey.
		    </h1>
			</levelcolumn>
		    <levelcolumn>
		    <h1 className="subintL">
			For pros, supplements are a important part of working out, to make sure you get the most efficiet nuutrints for your body.
		    </h1>
			</levelcolumn>


		</row>
			    </section>	    
	</body>
    );




}

export default Supplements;
