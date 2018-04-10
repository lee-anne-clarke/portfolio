import React, { Component } from 'react'


class WorkSorting extends Component {
	componentDidMount() {
		const sortAll = document.querySelectorAll('.sort');

		// Buttons
		const sortBtns = document.querySelectorAll('.btn-sort');
		const btnSortAll = document.getElementById('btnSortAll');
		const btnSortWP = document.getElementById('btnSortWP');
		const btnSortDrupal = document.getElementById('btnSortDrupal');
		const btnSortVue = document.getElementById('btnSortVue');
		const btnSortReact = document.getElementById('btnSortReact');
		const btnSortBootstrap = document.getElementById('btnSortBootstrap');
		const btnSortFoundation = document.getElementById('btnSortFoundation');
		const btnSortEmails = document.getElementById('btnSortEmails');
		const btnSortOther = document.getElementById('btnSortOther');


		// Sort all
		btnSortAll.addEventListener('click', () => {
    	for (let i of sortAll) {
				i.style.display = 'inline-block';  
    	}

    	// Add the active class to the button
    	for (let j of sortBtns) {
    		if ( j === btnSortAll ) {
    			btnSortAll.classList.add('active');
    		} else {
    			j.classList.remove('active');
    		}
    	}
    });
		
		// Sort individual categories
    function sortItems(theClassName, theBtn) {
    	for (let i of sortAll) {
    		if ( i.classList.contains(theClassName) ) {
					i.style.display = 'inline-block';
	    	} else {
	    		i.style.display = 'none';
	    	}
    	}

    	// Add the active class to the active button
    	for (let j of sortBtns) {
    		if ( j === theBtn ) {
    			theBtn.classList.add('active');
    		} else {
    			j.classList.remove('active');
    		}
    	}
    }

    // Button events
    btnSortWP.addEventListener('click', () => {
    	sortItems('sort-wp', btnSortWP);
    });

    btnSortDrupal.addEventListener('click', () => {
    	sortItems('sort-drupal', btnSortDrupal);
    });

    btnSortVue.addEventListener('click', () => {
    	sortItems('sort-vue', btnSortVue);
    });

    btnSortReact.addEventListener('click', () => {
    	sortItems('sort-react', btnSortReact);
    });

		btnSortBootstrap.addEventListener('click', () => {
    	sortItems('sort-bs', btnSortBootstrap);
    });

		btnSortFoundation.addEventListener('click', () => {
    	sortItems('sort-foundation', btnSortFoundation);
    });

		btnSortEmails.addEventListener('click', () => {
    	sortItems('sort-emails', btnSortEmails);
    });

		btnSortOther.addEventListener('click', () => {
    	sortItems('sort-other', btnSortOther);
    });
	}

	render() {
		return (
			<ul className="work__sorting">
				<li>
					<button className="btn-sort active" id="btnSortAll">All</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortWP">WordPress</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortDrupal">Drupal</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortVue">Vue.js</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortReact">React</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortBootstrap">Bootstrap</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortFoundation">Foundation</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortEmails">Emails</button>
				</li>

				<li>
					<button className="btn-sort" id="btnSortOther">Other</button>
				</li>
			</ul>
		);
	}
}


export default WorkSorting