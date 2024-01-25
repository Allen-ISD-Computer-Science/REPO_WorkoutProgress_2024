import Stack from 'react-bootstrap/Stack';
import {Row, Col, Card} from 'react-bootstrap';

import test_img from '../images/pixelman_still.png';


function AboutUs() {
    return(	
	<body>
	    <Stack gap={3} className="mx-5 border border-danger">
		<Row>
		    <h1>
			Our Goal
		    </h1>
		    <p class="h3 mr-10">
			Here at Bulk-Like-A-Beast we encourage all to start their fitness journey.
			Weather you are just getting started or already in the fitness game, our mission
			is to assist you in achieving your dream physique.			
		    </p>		    
		</Row>
		<Row>
		    //use a carousel instead, looks weird with cards. this is for info on founders
		</Row>
	    </Stack>
	</body>
    );
}


export default AboutUs;
