import React, { useState } from 'react';
import Nav from '../components/Navbar.jsx';

function Login() {
  const spacing = 2;

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

  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [isFormSuccess, setIsFormSuccess] = useState(false);


  const inputSectionStyles = {
    marginBottom: '20px',
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      if (validateForm()) {
      setModalMessage(`Welcome: ${formData.firstName} ${formData.lastName}, you are ready to resume your workouts!`);
      setModalOpen(true);
      setIsFormSuccess(true);
      resetForm();
      // Optionally, perform form submission logic here
       window.open("./workouts");
    } else {
      setModalOpen(true);
      setIsFormSuccess(false);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      verifyPassword: '',
    });
  };

  const validateForm = () => {
    let valid = true;
    let validationMessage = '';

    if (!formData.firstName.trim()) {
      valid = false;
      validationMessage += 'First Name is required. ';
    }

    if (!formData.lastName.trim()) {
      valid = false;
      validationMessage += 'Last Name is required. ';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      valid = false;
      validationMessage += 'Invalid Email format. ';
    }

    if (formData.password.trim().length < 6) {
      valid = false;
      validationMessage += 'Password should be at least 6 characters. ';
    }

    if (formData.password !== formData.verifyPassword) {
      valid = false;
      validationMessage += 'Passwords do not match. ';
    }

    if (!valid) {
      setModalMessage(validationMessage);
    }

    return valid;
  };

  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    zIndex: '1000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const contentStyles = {
    textAlign: 'center',
  };

  const buttonStyles = {
    marginTop: '10px',
  };

  const successModalStyles = {
    ...modalStyles,
    backgroundColor: 'green',
    color: 'white',
    fontWeight: 'bold',
  };

  const failureModalStyles = {
    ...modalStyles,
    backgroundColor: 'red',
    color: 'white',
    fontWeight: 'bold',
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
            Welcome back to Gym Starter: Bulk Like a Beast! Ready to continue your fitness journey and achieve your goals? Let's get started!
	</h1>
	  </div>
      <div className="input-section" style={inputSectionStyles}>
        <label className="first">
          First Name
          <span className="required-color">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter First Name"
          id="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <br></br>
      </div>

      <div className="input-section" style={inputSectionStyles}>
        <label className="last">
          Last Name
          <span className="required-color">*</span>
        </label>
        <input
          type="text"
          placeholder="Enter Last Name"
          id="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <br></br>
      </div>

      <div className="input-section" style={inputSectionStyles}>
        <label className="email">
          Email
          <span className="required-color">*</span>
        </label>
        <input
          type="email"
          placeholder="Enter Email"
          id="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <br></br>
      </div>

      <div className="input-section" style={inputSectionStyles}>
        <label className="password">
          Password
          <span className="required-color">*</span>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <br></br>
      </div>

      <div className="input-section" style={inputSectionStyles}>
        <label className="confirm">
          Confirm Password
          <span className="required-color">*</span>
        </label>
        <input
          type="password"
          placeholder="Confirm Password"
          id="verifyPassword"
          value={formData.verifyPassword}
          onChange={handleInputChange}
          required
        />
        <br></br>
      </div>

      <div className="input-section">
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {modalOpen && (
        <div style={isFormSuccess ? successModalStyles : failureModalStyles}>
          <div style={contentStyles}>
            <p>{modalMessage}</p>
            <button style={buttonStyles} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Login;
