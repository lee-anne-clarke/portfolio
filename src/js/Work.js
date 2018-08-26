import React, { Component } from 'react';
import WorkSorting from './WorkSorting';
import WorkItemsGrid from './WorkItemsGrid';
import Divider from './Divider';


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

				<Divider />
			</section>
		);
	}
}


export default Work;