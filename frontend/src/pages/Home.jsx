import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Home() {
    return (
	<div className="Home">
	    <Router>
		<Navbar />
		<Switch>
		    <Route path="/" exact />
		</Router>
		
