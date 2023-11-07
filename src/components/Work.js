import React, { Component } from 'react';
import WorkSorting from './WorkSorting';
import WorkItemsGrid from './WorkItemsGrid';
import Divider from './Divider';


export default function Work() {
	return (
		<section className="section work">
			<h2>Work</h2>

			<div className="work__inner">
				<p>A selection of projects I have worked on</p>

				<WorkSorting />
				<WorkItemsGrid />
			</div>

			<Divider />
		</section>
	);
}

