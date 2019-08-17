import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { 
	faHome,
	faUser,
	faGraduationCap,
	faWrench,
	faBriefcase,
	faPaperPlane
} 
from '@fortawesome/free-solid-svg-icons';
import NavItem from './NavItem';

//Variables for React Scroll
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
let scroller   = Scroll.scroller;


class Nav extends Component {
	/* React Scroll */
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
				<ul className="nav-list">

					<NavItem 
						liClass="nav-li--home"
						faIcon={faHome}
						clickEvent={this.scrollToTop}
						srText="Home"
					/>

					<NavItem 
						liClass=""
						faIcon={faUser}
						clickEvent={this.scrollToAbout}
						srText="About"
					/>

					<NavItem 
						liClass="nav-li--edu"
						faIcon={faGraduationCap}
						clickEvent={this.scrollToEdu}
						srText="Education"
					/>

					<NavItem 
						liClass=""
						faIcon={faWrench}
						clickEvent={this.scrollToSkills}
						srText="Skills"
					/>

					<NavItem 
						liClass=""
						faIcon={faBriefcase}
						clickEvent={this.scrollToWork}
						srText="Work"
					/>

					<NavItem 
						liClass=""
						faIcon={faPaperPlane}
						clickEvent={this.scrollToContact}
						srText="Contact"
					/>

				</ul>
			</nav>
		);
	}
}


export default Nav;



