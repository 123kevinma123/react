import React, { useEffect, useState } from 'react';

import './Start.css';
import './Menu.css';
import MainContent from './MainContent.js';
import Footer from './Footer.js';
import Start from './Start.js';
import Resume from './Resume.js';
import About from './About.js';
import Nasa from './Nasa.js';
import Projects from './Projects.js';

const TitleScreen = () => {
	return <Start />;
};

const MenuContent = () => {
	const [selectedSection, setSelectedSection] = useState('');

	const handleSectionChange = (section) => {
		setSelectedSection(section);
	};

	return (
		<>
			{selectedSection === '' && (
				<>
					<div className='menu_content'>
						<h1>KEVIN MA</h1>
					</div>
					<ul>
						<li
							className='navbar_item'
							onClick={() => handleSectionChange('about')}>
							<span className='menu_button'>
								&nbsp;ABOUT&nbsp;
							</span>
						</li>
						<li
							className='navbar_item'
							onClick={() => handleSectionChange('projects')}>
							<span className='menu_button'>
								&nbsp;Projects&nbsp;
							</span>
						</li>
						{/*<li
							className='navbar_item'
							onClick={() => handleSectionChange('nasa')}>
							<span className='menu_button'>
								&nbsp;APOD&nbsp;
							</span>
						</li> */}
						<li className='navbar_item'>
							<a
								href='Resume2025.pdf'
								target='_blank'
								rel='noopener noreferrer'
								className='menu_button'>
								&nbsp;RESUME&nbsp;
							</a>
						</li>
						<li
							className='navbar_item'
							onClick={() => handleSectionChange('titleScreen')}>
							<span className='menu_button'>
								&nbsp;TITLE SCREEN&nbsp;
							</span>
						</li>
					</ul>
				</>
			)}
			{selectedSection === 'about' && <About />}
			{selectedSection === 'resume' && <Resume />}
			{selectedSection === 'titleScreen' && <TitleScreen />}
			{selectedSection === 'nasa' && <Nasa />}
			{selectedSection === 'projects' && <Projects />}
		</>
	);
};
const Menu = () => {
	return <MenuContent />;
};
export default Menu;
