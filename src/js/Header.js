import React from 'react'


function Header() {
	return (  
		<header className="header">
			<h1>Lee-Anne Clarke</h1>
			<h2 className="jobtitle">Front-End Web Developer</h2>
			<h3 className="myemail">lac @ lee-anne-clarke.com</h3>

			<div className="divider">
				<a className="header__link header__link--left" href="https://github.com/lee-anne-clarke/" target="blank">
					<i className="fa fa-github"><span>Github</span></i>
				</a>			
			</div>
		</header>
	);
}


export default Header