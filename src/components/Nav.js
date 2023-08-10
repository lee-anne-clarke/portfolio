import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { v4 as uuidv4 } from 'uuid';
import NavItem from './NavItem';
import { 
	faHome,
	faUser,
	faGraduationCap,
	faWrench,
	faBriefcase,
	faPaperPlane
} 
from '@fortawesome/free-solid-svg-icons';


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
						key={uuidv4()}
						liClass="nav-li--home"
						faIcon={faHome}
						clickEvent={this.scrollToTop}
						srText="Home"
					/>

					<NavItem 
						key={uuidv4()}
						liClass=""
						faIcon={faUser}
						clickEvent={this.scrollToAbout}
						srText="About"
					/>

					<NavItem 
						key={uuidv4()}
						liClass="nav-li--edu"
						faIcon={faGraduationCap}
						clickEvent={this.scrollToEdu}
						srText="Education"
					/>

					<NavItem 
						key={uuidv4()}
						liClass=""
						faIcon={faWrench}
						clickEvent={this.scrollToSkills}
						srText="Skills"
					/>

					<NavItem 
						key={uuidv4()}
						liClass=""
						faIcon={faBriefcase}
						clickEvent={this.scrollToWork}
						srText="Work"
					/>

					<NavItem 
						key={uuidv4()}
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



