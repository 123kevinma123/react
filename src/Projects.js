import React, { useEffect, useState } from 'react';
import Menu from './Menu.js';
import './About.css';
import './Menu.css';
import './Projects.css';
import avionicsWebsite from './avionicsWebsite.png';
import unixShell from './shell.png';
import airbrake from './airbrake.png';
import flightComputer from './flightComputer.png';
import telemetrum from './telemetrum.png';
import pokemonWebsite from './pokemonWebsite.png';
import airBrakeCode from './airbrakeCode.png';

const AboutSubContent = () => {
	return (
		<div className='container'>
			<div className='project'>
				<div className='project-image'>
					<img
						src={flightComputer}
						alt='Rocketry Flight Computer'
					/>
				</div>
				<div className='project-details'>
					<div className='proj_title'>
						<a
							href='https://github.com/PSP-Spaceport-Avionics/Flight-Computer'
							className='project-title'>
							Rocketry Flight Computer
						</a>
					</div>
					Engineered a high-performance flight computer using STM32
					microcontrollers with integrated GPS, accelerometer, and
					barometers. Utilized FreeRTOS for real-time task scheduling.
				</div>
			</div>
			<div className='project'>
				<div className='project-image'>
					<img
						src={airBrakeCode}
						alt='Rocketry Airbrake System'
					/>
				</div>
				<div className='project-details'>
					<div className='proj_title'>
						<a
							href='https://github.com/PSP-Spaceport-Avionics/Dragster'
							className='project-title'>
							Rocketry Airbrake System
						</a>
					</div>
					Developed a real-time parachute deployment system for rocket
					deceleration. Designed a slave device with an SPI handshake
					protocol to interface with the Telemetrum flight computer.
				</div>
			</div>
			<div className='project'>
				<div className='project-image'>
					<img
						src={unixShell}
						alt='Unix Shell'
					/>
				</div>
				<div className='project-details'>
					<div className='proj_title'>
						<a
							href='https://www.cs.purdue.edu/homes/cs290/lab2-shell/'
							className='project-title'>
							Unix Shell
						</a>
					</div>
					Designed a Unix shell in C/C++ with features like piping,
					redirection, job control, and signal handling. Implemented
					lexical analysis with Lex and grammar parsing with Yacc to
					handle complex commands.
				</div>
			</div>
			<div className='project'>
				<div className='project-image'>
					<img
						src={avionicsWebsite}
						alt='Avionics Website Project'
					/>
				</div>
				<div className='project-details'>
					<div className='proj_title'>
						<a
							href='https://github.com/PSP-Spaceport-Avionics/Avionics-Website'
							className='project-title'>
							Avionics Website
						</a>
					</div>
					Developed a Next.js website for Spaceport Avionics to
					enhance visibility and attract sponsorships. Leveraged
					Docker and AWS EKS for seamless deployment.
				</div>
			</div>

			<div className='project'>
				<div className='project-image'>
					<img
						src={pokemonWebsite}
						alt='Pokemon Price Estimator'
					/>
				</div>
				<div className='project-details'>
					<div className='proj_title'>
						<a
							href='https://github.com/kevinma0421/PokemonPriceEstimator'
							className='project-title'>
							Pokemon Card Estimator
						</a>
					</div>
					Developed a tool to aggregate graded Pokémon card data using
					Puppeteer, Express.js, and React. Integrated historical data
					graphs with Chart.js for informed decision-making.
				</div>
			</div>
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
