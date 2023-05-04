import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import data from './data.js'

export default function App() {
	const cards = data.map(person => {
		return(
			<Card 
				key={person.id}
				img={person.coverImg}
				title={person.title}
				description={person.description}
				price={person.price}
				rating={person.stats.rating}
				reviewCount={person.stats.reviewCount}
				location={person.location}
				openSpots={person.openSpots}
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
