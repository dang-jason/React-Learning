import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import imgperson from './images/katie-zaferes.png';

export default function App() {
	return (
		<div className="app--root">
			<Navbar />
			<Hero />
			<Card
				img={imgperson}
				rating="5.0"
				reviewCount={6}
				country="USA"
				title="Life Lessons With Katie Zaferes"
				price={136}
			/>
		</div>
	);
}
