import React from "react";
import Nav from '../components/Navbar.jsx';
import { useState } from "react";
import '../styles/aboutus.css';


export default function AboutUs() {

    const [modal, setModal] = useState(false);
    const [data, setData] = useState({
	name: "",
	email: "",
	feedback: "",
    });

    const handleChange = (e) => {
	const { name, value } = e.target;

	setData({ ...data, [name]: value });
    };

    const HandleSubmit = (e) => {
	e.preventDefault();
	console.log(data);
    };
    return (
	<div className="App">
	    <Nav />
	    <h1 className="h1">Feedback Form</h1>

	    {!modal && (
		<button
		    classname="btn btn-red close-btn"
		    onClick={() => setModal((value) => !value)}>
			     Toogle Feedback
	    </button>
	    )}
	    <div>


		{modal && (
		    <form className="feedback" onSubmit={HandleSubmit}>
			<button className="close-btn-form" onClick={() => setModal((value) => !value)}>X</button>
			
		    <div className="m1-rem">
			<input placeholder="Name" name="name" onChange={(e) => handleChange(e)}  />
		    </div>
		    <div>
			<input placeholder="Email" name="email" onChange={(e) => handleChange(e)} />
		    </div>
		    <div className="m1-rem">>
			<input placeholder="Feedback" name="feedback" onChange={(e) => handleChange(e)} />
		    </div>
			
			<button className="btn btn-green" onClick={HandleSubmit}>Submit Feedback</button>
		
		    </form>
		)}
	    </div>
	</div>
    );
}

