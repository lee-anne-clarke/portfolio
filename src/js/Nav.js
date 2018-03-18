import React, { Component } from 'react'
import Scroll from 'react-scroll'


//Variables necessary for React Scroll package
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
let scroller   = Scroll.scroller;


class Nav extends Component {
	
	//Functions necessary for React Scroll
	componentDidMount() {
		scrollSpy.update();
	}

	componentWillUnmount() {
		Events.scrollEvent.remove('begin');
		Events.scrollEvent.remove('end');
	}

	scrollToTop() {
		scroll.scrollToTop();
	}

	scrollToAbout() {
		scroller.scrollTo('aboutAnchor', {smooth: true,});
	}

	scrollToEdu() {
		scroller.scrollTo('eduAnchor', {smooth: true,});
	}

	scrollToSkills() {
		scroller.scrollTo('skillsAnchor', {smooth: true,});
	}

	scrollToWork() {
		scroller.scrollTo('workAnchor', {smooth: true,});
	}

	scrollToContact() {
		scroller.scrollTo('contactAnchor', {smooth: true,});
	}

	render() {
		return (
			<nav className="nav">
				<ul className="nav__list">
					<li className="nav-li-home">
						<button className="btn-nav fa fa-home" onClick={this.scrollToTop}><span>Home</span></button>
					</li>

					<li>
						<button className="btn-nav fa fa-user" onClick={this.scrollToAbout}><span>About</span></button>
					</li>

					<li className="nav-li-edu">
						<button className="btn-nav fa fa-graduation-cap" onClick={this.scrollToEdu}><span>Education</span></button>
					</li>

					<li>
						<button className="btn-nav fa fa-wrench" onClick={this.scrollToSkills}><span>Skills</span></button>
					</li>

					<li> 
						<button className="btn-nav fa fa-diamond" onClick={this.scrollToWork}><span>Work</span></button>
					</li>

					<li>
						<button className="btn-nav fa fa-paper-plane-o" onClick={this.scrollToContact}><span>Contact</span></button>
					</li>
				</ul>
			</nav>
		);
	}
}


export default Nav



