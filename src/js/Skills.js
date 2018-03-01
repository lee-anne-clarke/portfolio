import React from 'react'
import '../normalize.min.css'
import '../styles.css'


function Skills() {
	return (  
		<section className="skills">
			<h2>Skills</h2> 

			<section className="skills__set">
				<h3 className="skills__set-title">Programming &amp; Design</h3>

				<div className="skills__set-left">
					<button className="fa fa-html5 skills__btn skills__btn--prog skills__btn--html5">
						<span>HTML5</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--less">
						<span>Less</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--js">
						<span>JavaScript</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--fd">
						<span>Foundation</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--vue">
						<span>Vue.js</span>
					</button>
				</div>

				<div className="skills__set-right">
					<button className="fa fa-css3 skills__btn skills__btn--prog skills__btn--css3">
						<span>CSS3</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--sass">
						<span>Sass</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--react">
						<span>React</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--bs">
						<span>Bootstrap</span>
					</button>

					<button className="skills__btn skills__btn--prog skills__btn--ps">
						<span>Photoshop</span>
					</button>
				</div>
			</section>


			<section className="skills__set">
				<h3 className="skills__set-title">Content Management Systems</h3>

				<div className="skills__set-left">
					<button className="fa fa-wordpress skills__btn skills__btn--cms skills__btn--wordpress">
						<span>WordPress</span>
					</button>

					<button className="skills__btn skills__btn--cms skills__btn--sitecore">
						<span>Sitecore</span>
					</button>
				</div>

				<div className="skills__set-right">
					<button className="fa fa-drupal skills__btn skills__btn--cms skills__btn--drupal">
						<span>Drupal</span>
					</button>

					<button className="skills__btn skills__btn--cms skills__btn--sp">
						<span>SharePoint</span>
					</button>
				</div>
			</section>

			<div className="divider">
				<i className="fa fa-anchor"></i> 
			</div>

		</section>
	);
}


export default Skills