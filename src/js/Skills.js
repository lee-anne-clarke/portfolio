import React from 'react';
import SkillDiv from './SkillDiv';
import Divider from './Divider';


function Skills() {
	return (  
		<section className="section skills">
			<h2>Skills</h2> 

			<div className="skills__set">
				<div className="skills__set-left">
					<SkillDiv text="HTML5" skillClass="html5" />
					<SkillDiv text="JavaScript" skillClass="js" />
					<SkillDiv text="Less" skillClass="less" />
					<SkillDiv text="Foundation" skillClass="fd" />
					<SkillDiv text="Vue.js" skillClass="vue" />
				</div>

				<div className="skills__set-right">
					<SkillDiv text="CSS3" skillClass="css3" />
					<SkillDiv text="React" skillClass="react" />
					<SkillDiv text="Sass" skillClass="sass" />		
					<SkillDiv text="Bootstrap" skillClass="bootstrap" />
					<SkillDiv text="Photoshop" skillClass="ps" />
				</div>
			</div>

			<Divider />
		</section>
	);
}


export default Skills;