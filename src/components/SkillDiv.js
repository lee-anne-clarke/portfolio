import React from 'react';


export default function SkillDiv(props) {
	return (
		<div className={`skill skill--${props.skillClass}`}>
			<span>{props.text}</span>
		</div>
	);
}

