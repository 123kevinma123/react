import React, { useEffect, useState } from 'react';
import Menu from './Menu.js';
import './About.css';
import './Menu.css';

const AboutSubContent = () => {
	return (
		<div className='aboutSubContent'>
			<p className='title'>INTRODUCTION</p>
			<p className='about'>
				<br />
				&nbsp;&nbsp;&nbsp;Hey! I'm Kevin Ma, the creator of this
				website, currently a Senior in Computer Science attending Purdue
				University. In my free time, I hang out with friends, play the
				violin, and code side projects such as this website.
				<br />
				&nbsp;&nbsp;&nbsp;I am currently the Avionics and Recovery Lead
				for Purdue Space Program Spaceport America, responsible for
				leading a group of 10 indivduals in building and manufacturing
				Student Researched and Designed (SRAD) flight systems.
			</p>
			<p className='title'>
				<br />
				THIS WEBSITE
			</p>
			<p className='about'>
				<br />
				&nbsp;&nbsp;&nbsp;I love the retro-esque feeling of 8 bit games,
				which heavily inspired the theme of this website.
				<br />
				<br />
			</p>
			<p className='title'>SOCIALS</p>
			<p className='about'>
				<br />
				<a
					href='https://www.linkedin.com/in/kevinma2003/'
					className='social'>
					{' '}
					LinkedIn{' '}
				</a>
				<a
					href='https://github.com/123kevinma123'
					className='social'>
					{' '}
					GitHub{' '}
				</a>
			</p>
			{/*<p className='title'>RESUME</p>
			<p className='about'>
				<br />
				<a
					href='path/to/Resume2024.pdf'
					download='Resume2024.pdf'
					className='social'>
					Download
				</a>
			</p>*/}
		</div>
	);
};
const About = () => {
	const [isBack, setIsBack] = useState(false);

	return (
		<>
			{isBack ? (
				<Menu />
			) : (
				<div className='aboutMain'>
					<div className='aboutContent'>
						<h3>ABOUT</h3>
					</div>
					<AboutSubContent />
					<li
						className='navbar_item'
						onClick={() => setIsBack(true)}>
						<span className='menu_button'>&nbsp;BACK&nbsp;</span>
					</li>
				</div>
			)}
		</>
	);
};

export default About;
