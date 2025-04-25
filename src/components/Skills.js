import React from 'react';
import SkillItem from './SkillItem';
import Divider from './Divider';


export default function Skills() {
	return (  
		<section className="section skills">
			<h2>Skills</h2> 

			<div className="skills__set">
				<div className="skills__set-left">
					<SkillItem text="JavaScript" skillClass="js" />
					<SkillItem text="Vue.js" skillClass="vue" />
					<SkillItem text="HTML5" skillClass="html5" />
					<SkillItem text="Less" skillClass="less" />
					<SkillItem text="Foundation" skillClass="fd" />
				</div>

				<div className="skills__set-right">
					<SkillItem text="React" skillClass="react" />
					<SkillItem text="Node.js" skillClass="node" />
					<SkillItem text="CSS3" skillClass="css3" />
					<SkillItem text="Sass" skillClass="sass" />	
					<SkillItem text="Bootstrap" skillClass="bootstrap" />
				</div>
			</div>

			<Divider />
		</section>
	);
}
