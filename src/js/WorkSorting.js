import React, { Component } from 'react'
import uuid from 'uuid'


class WorkSorting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnListItems: [
		{
			btnClass: 'active',
			btnID: 'btnSortAll',
			btnText: 'All',
		},
		{
			btnClass: '',
			btnID: 'btnSortWP',
			btnText: 'WordPress',
		},
		{
			btnClass: '',
			btnID: 'btnSortDrupal',
			btnText: 'Drupal',
		},
		{
			btnClass: '',
			btnID: 'btnSortVue',
			btnText: 'Vue.js',
		},
		{
			btnClass: '',
			btnID: 'btnSortReact',
			btnText: 'React',
		},
		{
			btnClass: '',
			btnID: 'btnSortBootstrap',
			btnText: 'Bootstrap',
		},
		{
			btnClass: '',
			btnID: 'btnSortFoundation',
			btnText: 'Foundation',
		},
		{
			btnClass: '',
			btnID: 'btnSortEmails',
			btnText: 'Emails',
		},
		{
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
	    const sortItems = (theClassName, theBtn) => {
	    	// Display the category items
	    	for (let i of sortAll) {
	    		if ( i.classList.contains(theClassName) ) {
					i.style.display = 'inline-block';
		    	} else {
		    		i.style.display = 'none';
		    	}
	    	}

	    	// Add the active class to the button and remove it from every other button
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
					<li className="ws-li" key={uuid()}>
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