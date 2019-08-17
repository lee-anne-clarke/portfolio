import React, { Component } from 'react';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Work from './Work';
import Contact from './Contact';
import Scroll from 'react-scroll';


//Necessary for React Scroll package
let Element = Scroll.Element;


class Main extends Component {
	render() {
		return (
			<main className="main">
				<div className="main__inner">
					
					<Element name="aboutAnchor" className="main__anchor" />
					<About />

					<Element name="eduAnchor" className="main__anchor" />
					<Education />

					<Element name="skillsAnchor" className="main__anchor" />
					<Skills />

					<Element name="workAnchor" className="main__anchor" />
					<Work />

					<Element name="contactAnchor" className="main__anchor" />
					<Contact />
				</div>
			</main>
		);
	}
}


export default Main;