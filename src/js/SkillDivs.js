import React from 'react';


function SkillProg(props) {
	return (
		<div className={`skill skill--prog skill--${props.skillClass}`}>
			<span>{props.text}</span>
		</div>
	);
}

function SkillCMS(props) {
	return (
		<div className={`skill skill--cms skill--${props.skillClass}`}>
			<span>{props.text}</span>
		</div>
	);
}


export {
	SkillProg,
	SkillCMS
}