import React, { useState } from 'react'
import '../styles/Quotes.css'


function Quotes() {

    const [quote,setQuote] = useState({
	text: "Difficulties",
	author: "Mike Tyson, the white Tiger",
    });
    
    return (
	<section>
	<div className = 'container'>
	    <div className = "quote">{quote.text}</div>
	    <div>
	<div className = "line"></div>
	<div className = "bottom">
	    <div className ="author">{quote.author}</div>
	    </div>
	</div>
	    </div>
	    
	    
	    
	    </section>
    );
}

export default Quotes;
