import React from 'react';


function SkillDiv(props) {
	return (
		<div className={`skill skill--${props.skillClass}`}>
			<span>{props.text}</span>
		</div>
	);
}


export default SkillDiv;