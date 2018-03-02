import React from 'react'


function SkillsButton(props) {
	return (
		<button className={`skills__btn ${props.classes}`}>
			<span>{props.text}</span>
		</button>
	);
}


export default SkillsButton