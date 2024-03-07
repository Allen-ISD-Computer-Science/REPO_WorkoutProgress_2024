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
	fontWeight: 'bold'   
    };
    return (
	<section>
	    <Nav />
	    
		<div className="text-box">
		    <h1 className="header-1" style={{ marginRight: spacing + 'em', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'center', color: 'green', marginBottom: '20px' }}
		 	>Welcome to Gym Starter: Bulk Like a Beast! Unleash your inner beast and reach your fitness goals. Lets Get Started!
		

		    </h1>
		</div>
	    <div class="input-section">
		<label class="first">First Name
		    <br></br>
		    <span class="required-color">*</span>
		</label>
		<input type="text " placeholder="Enter First Name" id="first-input" required
		       />
      
    </div>
    <div class="input-section">
	<label class="last">Last Name
	    <br></br>
	    <span class="required-color">*</span>
	</label>
      <input type="text " placeholder="Enter Last Name" id="last-input" required
      />
      
      
    </div>
    <div class="input-section">
	<label class="email">Email
	    <br></br>
	    <span class="required-color">*</span>
	</label>
      <input type="email" placeholder="Enter Email" id="email" required />
      
      
      </div>
	<div class="input-section">
	    <label class="fitness-level">Fitness Level
		<br></br>
		<span class="required-color">*</span>
	    </label>
      
  <select id="fit-level-input">
    <option value="">Select a fitness level</option>
    <option value="option1">Beginner</option>
    <option value="option2">Intermediate</option>
    <option value="option3">Advanced</option>
</select>
<div class="input-section">
  
<select id="fit-goal-input">
  <option value="">Select a fitness goal</option>
  <option value="option1">Weight Loss</option>
  <option value="option2">Muscle Building</option>
</select>
<div class="input-section">
    <label class="diets">Diet
	<span class="required-color">*</span>
    </label>
  
</div>
    <select id="diet-input">
  <option value="">Select a diet</option>
  <option value="option1">Balanced Diet</option>
  <option value="option2">Calorie Control</option>
  <option value="option3">High Protein</option>
  <option value="option3">Low Carb Diet</option>
</select>
    </div>
    <div class="input-section">
      <br></br>
	<label class="password">Password
	    <span class="required-color">*</span>
	</label>
      <input
        type="password"
        placeholder="Enter Password"
        id="password"
        required
      />
      <br></br>
    </div>
	    <div class="input-section">
		<br></br>
	<label class="confirm">Confirm Password
	    <span class="required-color">*</span>
	</label>
	</div>
	<input
        type="password"
        id="verify-password"
        placeholder="Confirm Password"
          required
      />
    	</div>
	    </section>
    )
	    
}
    	   
export default Register;

