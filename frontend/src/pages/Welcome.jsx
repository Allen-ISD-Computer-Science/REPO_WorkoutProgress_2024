function Welcome() {
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
     <div>
      <section className="header" style={{ backgroundColor: 'darkblue', padding: '10px' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="homepage.html" style={{ textDecoration: 'none', color: 'white' }}>
          </a>
          <div className="nav-links" id="navLinks" style={{ display: 'flex', alignItems: 'center' }}>
            <i className="fa fa-times-circle-o" onClick={() => hideMenu()} style={{ cursor: 'pointer', marginLeft: '10px' }}></i>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0, display: 'flex' }}>
              <li><a href="homepage.html" style={navLinkStyle}>Home</a></li>
              <li><a href="https://codermerlin.academy/vapor/kyle-hernandez/about_us" style={navLinkStyle}>About</a></li>
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
        <h1 className="header-1" style={{ marginRight: spacing + 'em', fontFamily: 'Arial', fontWeight: 'bold', textAlign: 'center', color: 'green', marginBottom: '20px' }}>
          Welcome to Gym Starter Bulk like a Beast!
        </h1>
      </div>
    </div>
  );
}

export default Welcome;
