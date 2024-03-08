import React, { useState } from 'react';
import Nav from '../components/Navbar.jsx';

function Register() {
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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    fitnessLevel: '',
    fitnessGoal: '',
    diet: '',
    password: '',
    verifyPassword: '',
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form validation logic here
    if (validateForm()) {
      // Perform form submission logic
	alert('Welcome: ' + formData.firstName + " " + formData.lastName + ', you are ready to start your workouts!');
	window.open("./workouts")
    } else {
      // Handle validation errors
	alert('Sorry, please make sure you have all forms filled out before you press Submit. Please try again!!');
	// window.open("./workouts");
    }
  };

  const validateForm = () => {
    // Add your validation logic here
    // Return true if the form is valid, false otherwise
    // For simplicity, you can add basic checks like checking if required fields are not empty
    return (
      formData.firstName !== '' &&
      formData.lastName !== '' &&
      formData.email !== '' &&
      formData.fitnessLevel !== '' &&
      formData.fitnessGoal !== '' &&
      formData.diet !== '' &&
      formData.password !== '' &&
      formData.verifyPassword !== '' &&
      formData.password === formData.verifyPassword
    );
  };

 return (
    <section>
      <Nav />

      <div className="text-box">
        <h1
          className="header-1"
          style={{
            marginRight: spacing + 'em',
            fontFamily: 'Arial',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'green',
            marginBottom: '20px',
          }}
        >
          Welcome to Gym Starter: Bulk Like a Beast! Unleash your inner beast and reach your fitness goals. Lets Get Started!
        </h1>
      </div>

      <div className="input-section">
        <label className="first">
          First Name
          
          <span className="required-color">*</span>
        </label>
        <input type="text" placeholder="Enter First Name" id="first-input" required />
	  <br></br>
      </div>

      <div className="input-section">
        <label className="last">
          Last Name
          
          <span className="required-color">*</span>
        </label>
        <input type="text" placeholder="Enter Last Name" id="last-input" required />
	  <br></br>
      </div>

      <div className="input-section">
        <label className="email">
          Email
          
          <span className="required-color">*</span>
        </label>
        <input type="email" placeholder="Enter Email" id="email" required />
	  <br></br>
      </div>

      <div className="input-section">
        <label className="fitness-level">
          Fitness Level
          
          <span className="required-color">*</span>
        </label>
        <select id="fit-level-input">
          <option value="">Select a fitness level</option>
          <option value="option1">Beginner</option>
          <option value="option2">Intermediate</option>
          <option value="option3">Advanced</option>
	    <br></br>
	</select>
      </div>

      <div className="input-section">
        <label className="fitness-goal">
          Fitness Goal
          
          <span className="required-color">*</span>
        </label>
        <select id="fit-goal-input">
          <option value="">Select a fitness goal</option>
          <option value="option1">Weight Loss</option>
          <option value="option2">Muscle Building</option>
	    <br></br>
	</select>
      </div>

      <div className="input-section">
        <label className="diets">
          Diet
          <span className="required-color">*</span>
        </label>
        <select id="diet-input">
          <option value="">Select a diet</option>
          <option value="option1">Balanced Diet</option>
          <option value="option2">Calorie Control</option>
          <option value="option3">High Protein</option>
          <option value="option4">Low Carb Diet</option>
	    <br></br>
	</select>
      </div>

      <div className="input-section">
        <label className="password">
          Password
          <span className="required-color">*</span>
        </label>
        <input type="password" placeholder="Enter Password" id="password" required />
        <br></br>
      </div>

      <div className="input-section">
        <label className="confirm">
          Confirm Password
          <span className="required-color">*</span>
        </label>
        <input type="password" id="verify-password" placeholder="Confirm Password" required />
	  <br></br>
      </div>


	<div className="input-section">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </section>

 )
}
     export default Register;


