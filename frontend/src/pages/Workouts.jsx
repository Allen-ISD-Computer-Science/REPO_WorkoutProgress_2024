import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import '../styles/frontpages.css';
import beginner_image from '../images/beginner.png';
import intermediate_image from "../images/intermediate.png";
import advanced_image from "../images/advanced.png"

function Workouts() {
  const spacing = 2;

  const hideMenu = () => {
    // Add logic to hide the menu
    console.log('Menu hidden');
  };

  const showMenu = () => {
    // Add logic to show the menu
    console.log('Menu shown');
  };

  const navLinkStyle = {
    textDecoration: 'none',
    color: 'white',
    padding: '10px',
    display: 'block',
    textAlign: 'center',
    fontWeight: 'bold',
  };

  return (
    <div>
      <section className="header" style={{ backgroundColor: 'darkblue', padding: '10px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="homepage.html" style={{ textDecoration: 'none', color: 'white' }}></a>
          <div className="nav-links" id="navLinks" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-times-circle-o" onClick={() => hideMenu()} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
		<li><a href="welcome" style={navLinkStyle}>Home</a></li>
              <li><a href="about_us" style={navLinkStyle}>About</a></li>
              <li className="workout" onClick={() => alert('You will need an account to access the workouts!')} style={{ ...navLinkStyle, cursor: 'pointer' }}>Workout</li>
              <li className="diet" onClick={() => alert('You will need an account to access the diets!')} style={{ ...navLinkStyle, cursor: 'pointer' }}>Diet</li>
              <li className="supplements" onClick={() => alert('You will need an account to access the supplements!')} style={{ ...navLinkStyle, cursor: 'pointer' }}>Supplements</li>
              <li><a href="signup.html" style={navLinkStyle}>Sign Up</a></li>
              <li><a href="login.html" style={navLinkStyle}>Log In</a></li>
            </ul>
            <i className="fa fa-times-circle-o" onClick={() => showMenu()} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
          </div>
          <i className="fa fa-bars" onClick={() => showMenu()} style={{ cursor: 'pointer' }}></i>
        </nav>
      </section>
      <div className="text-box">
        <h1
          className="header-1"
          style={{
            marginRight: spacing + 'em',
            fontFamily: 'Arial',
            fontWeight: 'bold',
	    textAlign: 'left',
            color: 'green',
            marginBottom: '20px',
          }}
        >
          Workouts!
        </h1>
	  <div className="text-box">
          <h2 className="header-2" style={{ marginRight: spacing + 'em', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'left', color: 'blue', marginBottom: '20px' }}>
            Workout is the best way to keep your body fit and healthy. Here are some of the workout plans that you can follow. Click on the button for the workout level that works best for you.
          </h2>
        </div>
      </div>
      <Row className="text-center vh-100">
        <Col className="w-33 d-flex justify-content-center align-items-center flex-column">
            <img src={beginner_image} alt="1" className="workouts img-fluid" />
            <Button href="./workouts/beginner" className="workouts_btn-style">Beginner</Button>
        </Col>

        <Col className="w-33 d-flex justify-content-center align-items-center flex-column">
            <img src={intermediate_image} alt="2" className="workouts img-fluid" />
          <Button href="./workouts/intermediate" className="workouts_btn-style">Intermediate</Button>
        </Col>

        <Col className="w-33 d-flex justify-content-center align-items-center flex-column">
          <img src={advanced_image} alt="3" className="workouts img-fluid" />
          <Button href="./advanced" className="workouts_btn-style">Advanced</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Workouts;

