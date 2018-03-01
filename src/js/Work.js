import React, { Component } from 'react'
import WorkSorting from './WorkSorting'
import WorkItemsGrid from './WorkItemsGrid'
import '../normalize.min.css'
import '../styles.css'


class Work extends Component {
	render() {
		return (
			<section className="work">
				<h2>Work</h2>

				<div className="work__inner">
					<p>A selection of projects I have worked on.</p>

					<WorkSorting />
					<WorkItemsGrid />
				</div>

				<div className="divider">
					<i className="fa fa-anchor"></i> 
				</div>
			</section>
		);
	}
}


export default Work