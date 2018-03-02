import React from 'react'
import '../normalize.min.css'
import '../styles.css'


function SkillsButton(props) {
	return (
		<button className={`skills__btn ${props.classes}`}>
			<span>{props.text}</span>
		</button>
	);
}


export default SkillsButton