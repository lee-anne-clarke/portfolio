import React, { useEffect } from 'react';
import Scroll from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

// variables for React Scroll
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;
let scroller   = Scroll.scroller;


export default function Header() {
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

	return (  
		<header className="header">
			<h1>Lee-Anne Clarke</h1>
			<p className="header__item header__item--jobtitle">Front-End Software Engineer</p>
			<p className="header__item header__item--email">lac @ lee-anne-clarke.com</p>
			<p>
				<a className="btn--header" href="https://github.com/lee-anne-clarke/" target="blank">github</a>
			</p>

			<div className="divider">
				<button className="btn" onClick={scrollToAbout}>
					<FontAwesomeIcon className="" icon={faArrowDown} />
					<span className="u-sr">Scroll down</span>
				</button>			
			</div>
		</header>
	);
}
