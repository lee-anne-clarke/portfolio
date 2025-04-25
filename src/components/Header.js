import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


export default function Header() {
	return (  
		<header className="header">
			<h1>Lee-Anne Clarke</h1>
			<p className="header__text header__text--jobtitle">Front-End Software Engineer</p>
			<p className="header__text header__text--email">lac @ lee-anne-clarke.com</p>

			<div className="header__btn-wrap">
				<a className="btn--header" href="https://github.com/lee-anne-clarke/" title="Github" target="blank">
					<FontAwesomeIcon icon={faGithub} />
					<span className="u-sr">My Github</span>
				</a>			
			</div>
		</header>
	);
}
