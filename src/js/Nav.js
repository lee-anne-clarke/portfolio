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
						<a className="btn-nav fa fa-home" onClick={this.scrollToTop}><span className="u-sr">Home</span></a>
					</li>

					<li>
						<a className="btn-nav fa fa-user" onClick={this.scrollToAbout}><span className="u-sr">About</span></a>
					</li>

					<li className="nav-li-edu">
						<a className="btn-nav fa fa-graduation-cap" onClick={this.scrollToEdu}><span className="u-sr">Education</span></a>
					</li>

					<li>
						<a className="btn-nav fa fa-wrench" onClick={this.scrollToSkills}><span className="u-sr">Skills</span></a>
					</li>

					<li> 
						<a className="btn-nav fa fa-diamond" onClick={this.scrollToWork}><span className="u-sr">Work</span></a>
					</li>

					<li>
						<a className="btn-nav fa fa-paper-plane-o" onClick={this.scrollToContact}><span className="u-sr">Contact</span></a>
					</li>
				</ul>
			</nav>
		);
	}
}


export default Nav



