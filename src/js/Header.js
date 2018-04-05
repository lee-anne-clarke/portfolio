import React from 'react'


function Header() {
	return (  
		<header className="header">
			<h1>Lee-Anne Clarke</h1>
			<p className="jobtitle">Front-End Web Developer</p>
			<p className="myemail">lac @ lee-anne-clarke.com</p>

			<div className="divider">
				<a className="btn-header" href="https://github.com/lee-anne-clarke/" target="blank">
					<i className="fa fa-github btn-header-fa"><span>Github</span></i>
				</a>			
			</div>
		</header>
	);
}


export default Header