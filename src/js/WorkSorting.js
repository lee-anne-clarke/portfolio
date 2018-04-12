import React, { Component } from 'react'
import uuid from 'uuid'


class WorkSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnListItems: [
			{ 
				id: uuid(), 
				btnClass: 'active',
				btnID: 'btnSortAll',
				btnText: 'All',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortWP',
				btnText: 'WordPress',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortDrupal',
				btnText: 'Drupal',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortVue',
				btnText: 'Vue.js',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortReact',
				btnText: 'React',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortBootstrap',
				btnText: 'Bootstrap',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortFoundation',
				btnText: 'Foundation',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortEmails',
				btnText: 'Emails',
			},
			{ 
				id: uuid(), 
				btnClass: '',
				btnID: 'btnSortOther',
				btnText: 'Other',
			},
     ],
    }
  }

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
		const { btnListItems } = this.state

		return (
			<ul className="work__sorting">
				{btnListItems.map(({ id, btnClass, btnID, btnText }) => (
					<li className="ws-li" key={id}>
						<button className={`btn-sort ${btnClass}`} id={btnID}>
							{btnText}
						</button>
					</li>
				))}
			</ul>
		);
	}
}


export default WorkSorting