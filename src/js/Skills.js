import React from 'react'
import SkillsButton from './SkillsButton'


function Skills() {
	return (  
		<section className="skills">
			<h2>Skills</h2> 

			<section className="skills__set">
				<h3 className="skills__set-title">Programming &amp; Design</h3>

				<div className="skills__set-left">
					<SkillsButton text="HTML5" classes="fa fa-html5 skills__btn--prog skills__btn--html5" />
					<SkillsButton text="Less" classes="skills__btn--prog skills__btn--less" />
					<SkillsButton text="JavaScript" classes="skills__btn--prog skills__btn--js" />
					<SkillsButton text="Foundation" classes="skills__btn--prog skills__btn--fd" />
					<SkillsButton text="Vue.js" classes="skills__btn--prog skills__btn--vue" />
				</div>

				<div className="skills__set-right">
					<SkillsButton text="CSS3" classes="fa fa-css3 skills__btn--prog skills__btn--css3" />
					<SkillsButton text="Sass" classes="skills__btn--prog skills__btn--sass" />
					<SkillsButton text="React" classes="skills__btn--prog skills__btn--react" />
					<SkillsButton text="Bootstrap" classes="skills__btn--prog skills__btn--bs" />
					<SkillsButton text="Photoshop" classes="skills__btn--prog skills__btn--ps" />
				</div>
			</section>


			<section className="skills__set">
				<h3 className="skills__set-title">Content Management Systems</h3>

				<div className="skills__set-left">
					<SkillsButton text="WordPress" classes="fa fa-wordpress skills__btn--cms skills__btn--wordpress" />
					<SkillsButton text="Sitecore" classes="skills__btn--cms skills__btn--sitecore" />
				</div>

				<div className="skills__set-right">
					<SkillsButton text="Drupal" classes="fa fa-drupal skills__btn--cms skills__btn--drupal" />
					<SkillsButton text="SharePoint" classes="skills__btn--cms skills__btn--sp" />
				</div>
			</section>

			<div className="divider">
				<i className="fa fa-anchor"></i> 
			</div>

		</section>
	);
}


export default Skills