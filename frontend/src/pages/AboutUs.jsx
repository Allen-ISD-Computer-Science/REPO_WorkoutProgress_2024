import Stack from 'react-bootstrap/Stack';
import {Carousel, Col} from 'react-bootstrap';
import test_img from '../images/pixelman_still.png';

function AboutUs() {
    return(	
	<body>
	    <Stack gap={3} className="mx-5 border border-danger">
		<Col>
		    <h1>
			Our Goal
		    </h1>
		    <p class="h3 mr-10">
			Here at Bulk-Like-A-Beast we encourage all to start their fitness journey.
			Weather you are just getting started or already in the fitness game, our mission
			is to assist you in achieving your dream physique.			
		    </p>		    
		</Col>
		<Carousel>
			<Carousel.Item className="text-center">
			    <img src={test_img} alt="test#1" class="img-fluid"/>
			    <Carousel.Caption className="d-block">			    
				<h3>Name</h3>
				<p>My name is Matt</p>			    
			    </Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	    </Stack>
	</body>
    );
}


export default AboutUs;
