import React, { useEffect } from 'react';
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
} from '@fortawesome/free-solid-svg-icons';


//Variables for React Scroll
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
let scroller   = Scroll.scroller;


export default function Nav() {
	useEffect(() => {
		scrollSpy.update();

		return() => {
			Events.scrollEvent.remove('begin');
			Events.scrollEvent.remove('end');
		};

	}, []);


	const scrollToTop = () => {
		scroll.scrollToTop();
	}

	const scrollToAbout = () => {
		scroller.scrollTo('aboutAnchor', {smooth: true,});
	}

	const scrollToEdu = () => {
		scroller.scrollTo('eduAnchor', {smooth: true,});
	}

	const scrollToSkills = () => {
		scroller.scrollTo('skillsAnchor', {smooth: true,});
	}

	const scrollToWork = () => {
		scroller.scrollTo('workAnchor', {smooth: true,});
	}

	const scrollToContact = () => {
		scroller.scrollTo('contactAnchor', {smooth: true,});
	}


	return (
		<nav className="nav">
			<ul className="nav-list">

				<NavItem 
					key={uuidv4()}
					liClass="nav-li--home"
					faIcon={faHome}
					clickEvent={scrollToTop}
					srText="Home"
				/>

				<NavItem 
					key={uuidv4()}
					liClass=""
					faIcon={faUser}
					clickEvent={scrollToAbout}
					srText="About"
				/>

				<NavItem 
					key={uuidv4()}
					liClass="nav-li--edu"
					faIcon={faGraduationCap}
					clickEvent={scrollToEdu}
					srText="Education"
				/>

				<NavItem 
					key={uuidv4()}
					liClass=""
					faIcon={faWrench}
					clickEvent={scrollToSkills}
					srText="Skills"
				/>

				<NavItem 
					key={uuidv4()}
					liClass=""
					faIcon={faBriefcase}
					clickEvent={scrollToWork}
					srText="Work"
				/>

				<NavItem 
					key={uuidv4()}
					liClass=""
					faIcon={faPaperPlane}
					clickEvent={scrollToContact}
					srText="Contact"
				/>

			</ul>
		</nav>
	);
}






