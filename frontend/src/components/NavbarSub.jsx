import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import '../styles/frontpages.css';

function NavbarComponent() {    
    return (
	<Navbar className="align-self-center bg-primary">
	    <Navbar.Brand className="text-white">Bulk Like A Beast</Navbar.Brand>
	    <Container className="d-flex justify-content-around text-white">
		<Nav.Link href="../welcome">Welcome</Nav.Link>
		<Nav.Link href="../workouts">Workouts</Nav.Link>
		<Nav.Link href="../diets">Diets</Nav.Link>
		<Nav.Link href="../equipment">Equipment</Nav.Link>
		<Nav.Link href="../about_us">About Us</Nav.Link>
	    </Container>
	</Navbar>
    );
}

export default NavbarComponent;
