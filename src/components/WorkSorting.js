import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import workSortBtnList from './workSortBtnList'


export default function WorkSorting() {
	const [sortingState] = useState(workSortBtnList);

	useEffect(() => {
		const sortAll = document.querySelectorAll('.sort');

		// Buttons
		const sortBtns = document.querySelectorAll('.btn--sort');
		const btnSortAll = document.getElementById('btnSortAll');
		const btnSortReact = document.getElementById('btnSortReact');
		const btnSortVue = document.getElementById('btnSortVue');
		const btnSortBootstrap = document.getElementById('btnSortBootstrap');
		const btnSortFoundation = document.getElementById('btnSortFoundation');
		const btnSortEmails = document.getElementById('btnSortEmails');
		const btnSortOther = document.getElementById('btnSortOther');

		// *** "All" button ****
		btnSortAll.addEventListener('click', () => {
			// Show all Work items 
	    	for (let i of sortAll) {
					i.style.display = 'inline-block';  
	    	}

	    	// Add the 'active' class to the button and remove it from every other button
	    	for (let j of sortBtns) {
	    		if ( j === btnSortAll ) {
	    			btnSortAll.classList.add('active');
	    		} else {
	    			j.classList.remove('active');
	    		}
	    	}
    	});
	
		// **** Category buttons ****
	    const sortItems = (theClassName, theBtn) => {
	    	// Display the selected category's items
	    	for (let i of sortAll) {
	    		if ( i.classList.contains(theClassName) ) {
					i.style.display = 'inline-block';
		    	} else {
		    		i.style.display = 'none';
		    	}
	    	}

	    	// Add the 'active' class to the button and remove it from every other button
	    	for (let j of sortBtns) {
	    		if ( j === theBtn ) {
	    			theBtn.classList.add('active');
	    		} else {
	    			j.classList.remove('active');
	    		}
	    	}
	    }

	    
		btnSortReact.addEventListener('click', () => {
			sortItems('sort-react', btnSortReact);
		});

		btnSortVue.addEventListener('click', () => {
			sortItems('sort-vue', btnSortVue);
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
	}, []);


	return (
		<ul className="work__sorting">
			{sortingState.map(({ id, btnClass, btnID, btnText }) => (
				<li className="ws-li" key={uuidv4()}>
					<button className={`btn btn--sort ${btnClass}`} id={btnID}>
						{btnText}
					</button>
				</li>
			))}
		</ul>
	);
}

