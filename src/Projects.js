import React, { useEffect, useState } from 'react';
import Menu from './Menu.js';
import './About.css';
import './Menu.css';
import './Projects.css';
import avionicsWebsite from './AvionicsWebsite.png';

const AboutSubContent = () => {
	return (
		<div className='aboutSubContent'>
			<p className='title'>AVIONICS WEBSITE</p>
			<p className='about'>
				<br />
				<img
					src={avionicsWebsite}
					alt='Avionics Website Project'
					className='image'
				/>
				<br />
				<ul class='bullet-list'>
					<li>
						Built a Next.js website for Spaceport Avionics, boosting
						visibility and attracting sponsorships.
					</li>
					<li>
						Utilized Docker for containerization, with AWS ECR for
						image storage and EKS for deployment orchestration.
					</li>
					<li>
						<a
							href='https://spaavionics.vercel.app/'
							className='projects_link'>
							Website Link
						</a>
					</li>
				</ul>
			</p>
			<p className='title'>
				<br />
				POKEMON PRICE ESTIMATOR (Defunct)
			</p>
			<p className='about'>
				<br />
				<img
					src={avionicsWebsite}
					alt='Avionics Website Project'
					className='image'
				/>
				<br />
				<ul class='bullet-list'>
					<li>
						Built a Puppeteer-based web scraper with Express.js
						backend to extract, process, and integrate graded
						Pokémon card data from multiple sources.
					</li>
					<li>
						Created a frontend using React and Tailwind, enabling
						card lookup and selection based on rarity and card
						grades.
					</li>
					<li>
						Integrated historical data graphs and price listings to
						aid user decision-making on card valuations.
					</li>
				</ul>
			</p>
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
						<h3>PROJECTS</h3>
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
