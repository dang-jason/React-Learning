import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {
	return (
		<div className="app--root">
			<Navbar />
			<Hero />
		</div>
	);
}
