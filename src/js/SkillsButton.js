import React, { Component } from 'react'
import '../normalize.min.css'
import '../styles.css'


class SkillsButton extends Component {
	render() {
		return (
			<button className={`skills__btn ${this.props.classes}`}>
				<span>{this.props.text}</span>
			</button>
		);
	}
}


export default SkillsButton