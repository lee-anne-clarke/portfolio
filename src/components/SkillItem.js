import React from 'react';


export default function SkillItem(props) {
	return (
		<div className={`skill skill--${props.skillClass}`}>
			<span>{props.text}</span>
		</div>
	);
}

