import React from 'react';


export default function About() {
  return (
		<section className="section about">
			<h2>About</h2>

			<div className="about__intro">
				<h3>Hi there! <span className="about-br"><br /></span>I'm Lee-Anne.</h3>
				<p>I have extensive experience in front-end web development. I love to create clean interfaces, and I am passionate about responsive design.</p>

				<p>This site is built with <a className="btn--text" href="https://react.dev/" target="_blank" rel="noreferrer noopener">React</a> and <a className="btn--text" href="https://nextjs.org/" target="_blank" rel="noreferrer noopener">Next.js</a>.</p>
			</div>
		</section>
  );
}

