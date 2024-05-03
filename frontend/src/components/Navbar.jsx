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
	

    );
}

export default Navbar;
