import React from 'react';
import imggrid from '../images/photo-grid.png';
export default function Hero() {
	return (
		<section className="hero">
			<img src={imggrid} className="hero--image" />
			<h1 className="hero--phrase">Online Experiences</h1>
			<p className="hero--text">
				Join unique interactive activities led by one-of-a-kind hosts—all
				without leaving home.
			</p>
		</section>
	);
}
