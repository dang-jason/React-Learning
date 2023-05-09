import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js';

export default function App() {
	const cards = data.map(person => {
		return(
			<Card 
				key={person.id}
				person={person}
			/>
		)
	});
	return (
		<div className="app--root">
			<Navbar />
			<Hero />
			<section className="cards-list">
				{cards}
			</section>
		</div>
	);
}
