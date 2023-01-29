import React from 'react';
import githublogo from '../images/Github Icon.png';
import instagramlogo from '../images/Instagram Icon.png';

function Footer() {
	return (
		<footer>
			<a
				className="footer--github"
				href="https://github.com/dang-jason"
				target="_blank"
			>
				<img src={githublogo} alt="github" />
			</a>
			<a
				className="footer--instgram"
				href="https://www.instagram.com/jason.dang/"
				target="_blank"
			>
				<img src={instagramlogo} alt="github" />
			</a>
		</footer>
	);
}

export default Footer;
