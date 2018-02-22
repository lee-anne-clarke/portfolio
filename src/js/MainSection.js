import React, { Component } from 'react'
import AboutSection from './AboutSection'
import EducationSection from './EducationSection'
import SkillsSection from './SkillsSection'
import WorkSection from './WorkSection'
import ContactSection from './ContactSection'
import Scroll from 'react-scroll'
import '../normalize.min.css'
import '../styles.css'


//Necessary for React Scroll package
let Element = Scroll.Element;


class Main extends Component {
	render() {
		return (
			<main className="main">
				<div className="main__inner">
					
					<Element name="aboutAnchor" className="main__anchor" />
					<AboutSection />

					<Element name="eduAnchor" className="main__anchor" />
					<EducationSection />

					<Element name="skillsAnchor" className="main__anchor" />
					<SkillsSection />

					<Element name="workAnchor" className="main__anchor" />
					<WorkSection />

					<Element name="contactAnchor" className="main__anchor" />
					<ContactSection />
				</div>
			</main>
		);
	}
}


export default Main