import React from 'react'
import '../normalize.min.css'
import '../styles.css'

import reactlogo from '../img/react-logo.png'


function AboutSection() {
	let styles = {
		width: 22
	}

  return (
	<section className="about">
	    <h2>About</h2>
	    
	    <div className="about__intro">
	        <span className="greeting">Hi there! <span className="greeting__br"><br /></span>I'm Lee-Anne.</span>
	        <p>I have extensive experience in web development, content management, and email development. I love to create clean interfaces, and I am passionate about responsive design.</p>

	        <p>This site was built with <a href="https://facebook.github.io/react/" target="_blank">React<img style={styles} src={reactlogo} alt="React logo" /></a></p>
	    </div>
	</section>
  );
}


export default AboutSection