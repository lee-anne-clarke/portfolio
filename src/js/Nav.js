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
					<li className="btn--home">
						<a className="fa fa-home" onClick={this.scrollToTop}><span>Home</span></a>
					</li>

					<li>
						<a className="fa fa-user" onClick={this.scrollToAbout}><span>About</span></a>
					</li>

					<li className="btn--edu">
						<a className="fa fa-graduation-cap" onClick={this.scrollToEdu}><span>Education</span></a>
					</li>

					<li>
						<a className="fa fa-wrench" onClick={this.scrollToSkills}><span>Skills</span></a>
					</li>

					<li> 
						<a className="fa fa-diamond" onClick={this.scrollToWork}><span>Work</span></a>
					</li>

					<li>
						<a className="fa fa-paper-plane-o" onClick={this.scrollToContact}><span>Contact</span></a>
					</li>
				</ul>
			</nav>
		);
	}
}


export default Nav



