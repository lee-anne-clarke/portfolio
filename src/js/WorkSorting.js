import React, { Component } from 'react'


class WorkSorting extends Component {
	componentDidMount() {
		const sortAll = document.querySelectorAll('.sort');
		const sortBtns = document.querySelectorAll('.btn-sort');

		const sortAllBtn = document.getElementById('sortAllBtn');
		const sortWpBtn = document.getElementById('sortWpBtn');
		const sortDrupalBtn = document.getElementById('sortDrupalBtn');
		const sortVueBtn = document.getElementById('sortVueBtn');
		const sortReactBtn = document.getElementById('sortReactBtn');
		const sortBootstrapBtn = document.getElementById('sortBootstrapBtn');
		const sortFoundationBtn = document.getElementById('sortFoundationBtn');
		const sortEmailsBtn = document.getElementById('sortEmailsBtn');

		sortAllBtn.addEventListener('click', () => {
	    	for (let i of sortAll) {
		        i.style.display = 'inline-block';  
	    	}

	    	for (let j of sortBtns) {
	    		if ( j === sortAllBtn ) {
	    			sortAllBtn.classList.add('btn-sort--active');
	    		} else {
	    			j.classList.remove('btn-sort--active');
	    		}
	    	}
	    });

	    function sortItems(theClassName, theBtn) {
	    	for (let i of sortAll) {
	    		if ( i.classList.contains(theClassName) ) {
		        	i.style.display = 'inline-block';
		    	} else {
		    		i.style.display = 'none';
		    	}
	    	}

	    	for (let j of sortBtns) {
	    		if ( j === theBtn ) {
	    			theBtn.classList.add('btn-sort--active');
	    		} else {
	    			j.classList.remove('btn-sort--active');
	    		}
	    	}
	    }

	    sortWpBtn.addEventListener('click', () => {
	    	sortItems('sort-wp', sortWpBtn);
	    });

	    sortDrupalBtn.addEventListener('click', () => {
	    	sortItems('sort-drupal', sortDrupalBtn);
	    });

	    sortVueBtn.addEventListener('click', () => {
	    	sortItems('sort-vue', sortVueBtn);
	    });

	    sortReactBtn.addEventListener('click', () => {
	    	sortItems('sort-react', sortReactBtn);
	    });

		sortBootstrapBtn.addEventListener('click', () => {
	    	sortItems('sort-bs', sortBootstrapBtn);
	    });

		sortFoundationBtn.addEventListener('click', () => {
	    	sortItems('sort-foundation', sortFoundationBtn);
	    });

		sortEmailsBtn.addEventListener('click', () => {
	    	sortItems('sort-emails', sortEmailsBtn);
	    });
	}

	render() {
		return (
			<ul className="work__sorting">
				<li>
					<button className="btn-sort btn-sort--active" id="sortAllBtn">All</button>
				</li>

				<li>
					<button className="btn-sort" id="sortWpBtn">WordPress</button>
				</li>

				<li>
					<button className="btn-sort" id="sortDrupalBtn">Drupal</button>
				</li>

				<li>
					<button className="btn-sort" id="sortVueBtn">Vue.js</button>
				</li>

				<li>
					<button className="btn-sort" id="sortReactBtn">React</button>
				</li>

				<li>
					<button className="btn-sort" id="sortBootstrapBtn">Bootstrap</button>
				</li>

				<li>
					<button className="btn-sort" id="sortFoundationBtn">Foundation</button>
				</li>

				<li>
					<button className="btn-sort" id="sortEmailsBtn">Emails</button>
				</li>
			</ul>
		);
	}
}


export default WorkSorting