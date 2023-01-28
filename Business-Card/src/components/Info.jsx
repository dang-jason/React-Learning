import React from 'react';
import portrait from '../images/jason-coding.png';
import linkedinLogo from '../images/linkedin.png';
import mailLogo from '../images/mail.png';

function Info() {
	return (
		<header>
			<img src={portrait} alt="Jason Dang" className="header--portrait" />
			<h1 className="header--name">Jason Dang</h1>
			<p className="header--nametag">Electrical and Computer Engineer</p>
			<p className="header--website">Website tba</p>
			<div className="socials">
				<a className="social social--email" href="mailto:jasondang619@gmail.com" target="_blank">
					<img src={mailLogo} alt="email" className="socials--emaillogo" />
					<p>Email</p>
				</a>
				<a className="social social--linkedin" href="https://www.linkedin.com/in/jasdang/" target="_blank">
					<img
						src={linkedinLogo}
						alt="linkedin"
						className="socials--linkedinlogo"
					/>
					<p>LinkedIn</p>
				</a>
			</div>
		</header>
	);
}

export default Info;
