import React from 'react'
import SkillButton from './SkillButton'


function Skills() {
	return (  
		<section className="skills">
			<h2>Skills</h2> 

			<section className="skills__set">
				<h3 className="h3-skillsset">Programming &amp; Design</h3>

				<div className="skills__set-left">
					<SkillButton text="HTML5" classes="fa fa-html5 skills__btn--prog skills__btn--html5" />
					<SkillButton text="Less" classes="skills__btn--prog skills__btn--less" />
					<SkillButton text="JavaScript" classes="skills__btn--prog skills__btn--js" />
					<SkillButton text="Foundation" classes="skills__btn--prog skills__btn--fd" />
					<SkillButton text="Vue.js" classes="skills__btn--prog skills__btn--vue" />
				</div>

				<div className="skills__set-right">
					<SkillButton text="CSS3" classes="fa fa-css3 skills__btn--prog skills__btn--css3" />
					<SkillButton text="Sass" classes="skills__btn--prog skills__btn--sass" />
					<SkillButton text="React" classes="skills__btn--prog skills__btn--react" />
					<SkillButton text="Bootstrap" classes="skills__btn--prog skills__btn--bs" />
					<SkillButton text="Photoshop" classes="skills__btn--prog skills__btn--ps" />
				</div>
			</section>


			<section className="skills__set">
				<h3 className="h3-skillsset">Content Management Systems</h3>

				<div className="skills__set-left">
					<SkillButton text="WordPress" classes="fa fa-wordpress skills__btn--cms skills__btn--wordpress" />
					<SkillButton text="Sitecore" classes="skills__btn--cms skills__btn--sitecore" />
				</div>

				<div className="skills__set-right">
					<SkillButton text="Drupal" classes="fa fa-drupal skills__btn--cms skills__btn--drupal" />
					<SkillButton text="SharePoint" classes="skills__btn--cms skills__btn--sp" />
				</div>
			</section>

			<div className="divider">
				<i className="fa fa-anchor"></i> 
			</div>

		</section>
	);
}


export default Skills