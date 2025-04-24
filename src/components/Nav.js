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


// Variables for React Scroll
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

	const scrollerBase = (anchor) => {
		scroller.scrollTo(anchor, {smooth: true,});
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
					faIcon={faUser}
					clickEvent={() => scrollerBase('aboutAnchor')}
					srText="About"
				/>

				<NavItem 
					key={uuidv4()}
					liClass="nav-li--edu"
					faIcon={faGraduationCap}
					clickEvent={() => scrollerBase('eduAnchor')}
					srText="Education"
				/>

				<NavItem 
					key={uuidv4()}
					faIcon={faWrench}
					clickEvent={() => scrollerBase('skillsAnchor')}
					srText="Skills"
				/>

				<NavItem 
					key={uuidv4()}
					faIcon={faBriefcase}
					clickEvent={() => scrollerBase('workAnchor')}
					srText="Work"
				/>

				<NavItem 
					key={uuidv4()}
					faIcon={faPaperPlane}
					clickEvent={() => scrollerBase('contactAnchor')}
					srText="Contact"
				/>

			</ul>
		</nav>
	);
}






