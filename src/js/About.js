import React from 'react';


function About() {
  return (
		<section className="section about">
			<h2>About</h2>

			<div className="about__intro">
				<h3>Hi there! <span className="about-br"><br /></span>I'm Lee-Anne.</h3>
				<p>I have extensive experience in web development, content management, and email development. I love to create clean interfaces, and I am passionate about responsive design.</p>

				<p>This site was built with <a className="btn" href="https://facebook.github.io/react/" target="_blank" rel="noreferrer noopener">React</a></p>
			</div>
		</section>
  );
}


export default About;