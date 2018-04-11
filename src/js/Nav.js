import React, { Component } from 'react'
import uuid from 'uuid'
import Scroll from 'react-scroll'
import NavItem from './NavItem'

//Variables necessary for React Scroll package
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
let scroller   = Scroll.scroller;


class Nav extends Component {
	
	/* Functions necessary for React Scroll */
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
						liClass=" nav-li--home"
						id={uuid()}
						faClass="fa-home"
						clickEvent={this.scrollToTop}
						srText="Home"
					/>

					<NavItem 
						liClass=""
						id={uuid()}
						faClass="fa-user"
						clickEvent={this.scrollToAbout}
						srText="About"
					/>

					<NavItem 
						liClass=" nav-li--edu"
						id={uuid()}
						faClass="fa-graduation-cap"
						clickEvent={this.scrollToEdu}
						srText="Education"
					/>

					<NavItem 
						liClass=""
						id={uuid()}
						faClass="fa-wrench"
						clickEvent={this.scrollToSkills}
						srText="Skills"
					/>

					<NavItem 
						liClass=""
						id={uuid()}
						faClass="fa-briefcase"
						clickEvent={this.scrollToWork}
						srText="Work"
					/>

					<NavItem 
						liClass=""
						id={uuid()}
						faClass="fa-paper-plane-o"
						clickEvent={this.scrollToContact}
						srText="Contact"
					/>

				</ul>
			</nav>
		);
	}
}


export default Nav



