import React, { Component } from 'react'
import WorkItemsWrap from './WorkItemsWrap'
import WorkSorting from './WorkSorting'
import '../normalize.min.css'
import '../styles.css'


class WorkSection extends Component {
	render() {
		return (
			<section className="work">
				<h2>Work</h2>

				<div className="work__inner">
					<p>A selection of projects I have worked on.</p>

					<WorkSorting />
					<WorkItemsWrap />
				</div>

				<div className="divider">
					<i className="fa fa-anchor"></i> 
				</div>
			</section>
		);
	}
}


export default WorkSection