function AboutUs() {
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
    <>
      <section className="header" style={{ backgroundColor: 'darkblue', padding: '10px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="homepage.html" style={{ textDecoration: 'none', color: 'white' }}></a>
          <div className="nav-links" id="navLinks" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-times-circle-o" onClick={() => hideMenu()} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
              <li><a href="https://codermerlin.academy/vapor/kyle-hernandez/welcome" style={navLinkStyle}>Home</a></li>
              <li><a href="https://codermerlin.academy/vapor/kyle-hernandez/about_us" style={navLinkStyle}>About</a></li>
		<li><a href="https://codermerlin.academy/vapor/kyle-hernandez/workouts" className="workout" style={{ ...navLinkStyle, cursor: 'pointer' }}>Workout</a></li>
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
        <h1 className="header-1" style={{ marginRight: spacing + 'em', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'left', color: 'green', marginBottom: '20px' }}>
          Our Goal
        </h1>
        <div className="text-box">
          <h2 className="header-2" style={{ marginRight: spacing + 'em', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'left', color: 'blue', marginBottom: '20px' }}>
            Here at Bulk-Like-A-Beast, we encourage all to start their fitness journey. Whether you
            are just getting started or already in the fitness game, our mission is to assist you in
            achieving your dream physique.
          </h2>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
