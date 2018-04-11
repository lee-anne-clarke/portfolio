import React from 'react'


function NavItem(props) {
	return(
		<li className={`nav-li${props.liClass}`} key={props.id}>
			<a className={`btn-nav fa ${props.faClass}`} onClick={props.clickEvent}>
				<span className="u-sr">{props.srText}</span>
			</a>
		</li>
	)
}


export default NavItem