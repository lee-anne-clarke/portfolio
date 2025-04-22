import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
	return (  
		<header className="header">
			<h1>Lee-Anne Clarke</h1>
			<p className="header-jobtitle">Front-End Software Engineer</p>
			<p className="header-email">lac @ lee-anne-clarke.com</p>

			<div className="divider">
				<a className="btn-header" href="https://github.com/lee-anne-clarke/" target="blank">
					<FontAwesomeIcon className="btn-header-icon" icon={faGithub} />
					<span>Github</span>
				</a>			
			</div>
		</header>
	);
}
