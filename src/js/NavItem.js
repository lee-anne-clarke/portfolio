import React from 'react';
import uuid from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function NavItem(props) {
	return(
		<li className={`nav-li ${props.liClass}`} key={uuid()}>
			<button className="btn-nav" onClick={props.clickEvent}>
				<FontAwesomeIcon className="btn-nav__icon" icon={props.faIcon} />
				<span className="u-sr">{props.srText}</span>
			</button>
		</li>
	)
}


export default NavItem;