import React from 'react';
import '../styles/Navbar.css';
import logo from '../images/BeastLogo.png';


function Navbar () {
    
    return(
	<section>
	<nav>
	    <img src={logo} alt="" />
	    <ul>
		<li>Home</li>
		<li>About Us</li>
	    </ul>
	</nav>
	    </section>
	

    const handleWorkoutsClick = () => {
        if (!isLoggedIn) {
            // If not logged in, show the modal
            setShowModal(true);
        } else {
            // If logged in, navigate to workouts page
            window.location.href = './workouts';
        }
    };

    const handleModalClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <Navbar className="align-self-center bg-primary">
		<img src="favicon.ico" />
		<Container className="d-flex justify-content-between text-white display-6">
                    <Nav.Link href="./welcome">Welcome</Nav.Link>
                    <Nav.Link href="./about_us">About Us</Nav.Link>
                    <Nav.Link href="./diets">Diets</Nav.Link>
		    <Nav.Link href="./supplements">Supplements</Nav.Link>
                    <Nav.Link onClick={handleWorkoutsClick}>Workouts</Nav.Link>
                    <Nav.Link href="./register">Register</Nav.Link>
                    <Nav.Link href="./login">Login</Nav.Link>
		    <Nav.Link href="./list">List</Nav.Link>
		</Container>
            </Navbar>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Login or Sign Up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Please login or sign up to access the Workouts page.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleModalClose}>
                        Close
                    </Button>
                    <Button variant="primary" href="./login">
                        Login
                    </Button>
                    <Button variant="success" href="./register">
                        Sign Up
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default Navbar;
