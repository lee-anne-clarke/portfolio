import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function NavItem(props) {
	return(
		<li className={`nav__li ${props.liClass ? props.liClass : ''}`}>
			<button className="btn-nav" onClick={props.clickEvent}>
				<FontAwesomeIcon className="btn-nav__icon" icon={props.faIcon} />
				<span className="u-sr">{props.srText}</span>
			</button>
		</li>
	)

}

