import React from 'react';
import { SkillProg, SkillCMS } from './SkillDivs';
import Divider from './Divider';


function Skills() {
	return (  
		<section className="skills">
			<h2>Skills</h2> 

			<section className="skills__set">
				<h3 className="h3-skillsset">Programming &amp; Design</h3>

				<div className="skills__set-left">
					<SkillProg text="HTML5" skillClass="html5" />
					<SkillProg text="Less" skillClass="less" />
					<SkillProg text="JavaScript" skillClass="js" />
					<SkillProg text="Foundation" skillClass="fd" />
					<SkillProg text="Vue.js" skillClass="vue" />
				</div>

				<div className="skills__set-right">
					<SkillProg text="CSS3" skillClass="css3" />
					<SkillProg text="Sass" skillClass="sass" />
					<SkillProg text="React" skillClass="react" />
					<SkillProg text="Bootstrap" skillClass="bootstrap" />
					<SkillProg text="Photoshop" skillClass="ps" />
				</div>
			</section>


			<section className="skills__set">
				<h3 className="h3-skillsset">Content Management Systems</h3>

				<div className="skills__set-left">
					<SkillCMS text="WordPress" skillClass="wp" />
					<SkillCMS text="Sitecore" skillClass="sitecore" />
				</div>

				<div className="skills__set-right">
					<SkillCMS text="Drupal" skillClass="drupal" />
					<SkillCMS text="SharePoint" skillClass="sharepoint" />
				</div>
			</section>

			<Divider />
		</section>
	);
}


export default Skills;