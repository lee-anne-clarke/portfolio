import React, { Component } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	faTimes,
	faTint,
	faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

import { faFileCode } from '@fortawesome/free-regular-svg-icons';

import workItems from './workItems'



class WorkItemsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = { workItems }
		
		this.eachWorkItem = this.eachWorkItem.bind(this)
	}


	componentDidMount() {
		//Add ".u-no-overflow" to <body> when modal is opened; remove when it's closed
		let openModalBtn = document.querySelectorAll('.modal-open');
		let closeModalBtn = document.querySelectorAll('.btn-modal-close');

		for (let i of openModalBtn) {
		  i.addEventListener('click', () => {
		    document.body.classList.add('u-no-overflow');
		  });
		}

		for (let i of closeModalBtn) {
		  i.addEventListener('click', () => {
		    document.body.classList.remove('u-no-overflow');
		  });
		}
	}



	eachWorkItem(item, i) {

		let modalViewProjStyle,
				modalImgTwoStyle,
				modalViewRepoStyle,
				modalViewTempOneStyle,
				modalViewTempTwoStyle,
				modalViewTempThreeStyle

		// ** Show/hide project content as needed **

		if (item.modalImgTwoSrc) {
			modalImgTwoStyle = {display: 'inline'}
		} else {
			modalImgTwoStyle = {display: 'none'}
		}

		if (!item.projectURL) {
			modalViewProjStyle = {display: 'none'}
		}

		if (item.projectRepo) {
			modalViewRepoStyle = {
				display: 'block',
				marginTop: '2em'
			}
		} else {
			modalViewRepoStyle = {display: 'none'}
		}

		if (item.projTempURLOne) {
			modalViewTempOneStyle = {
				display: 'block',
				marginTop: '2em'
			}
			modalViewProjStyle = {display: 'none'}
		} else {
			modalViewTempOneStyle = {display: 'none'}
		}

		if (item.projTempURLTwo) {
			modalViewTempTwoStyle = {
				display: 'block',
				marginTop: '2em'
			}
		} else {
			modalViewTempTwoStyle = {display: 'none'}
		}

		if (item.projTempURLThree) {
			modalViewTempThreeStyle = {
				display: 'block',
				marginTop: '2em'
			}
		} else {
			modalViewTempThreeStyle = {display: 'none'}
		}
	  

	  // ** Dynamically generate each Work item with the content from the "workItems" array **

	  i += 1; //start index at 1 instead of 0

		return (
			<div className={`workitem sort ${item.sortClasses}`} key={i}>
				<input className="modal-checkbox" type="checkbox" name={`workItem${i}`} id={`workItem${i}`} />
			  
				<label className="modal-label modal-open" htmlFor={`workItem${i}`}>
					<figure className="workitem__fig">
					    {/*<img className="workitem__img" src={item.imgSource} alt={`${item.titleShort} screen cap`} />*/}

					    <Image className="workitem__img" src={item.imgSource} alt={`${item.titleShort} screen cap`} />
					    
					    <figcaption className="workitem__caption">
					      <h3 className="h3-workitem">{item.titleShort}</h3>
					      <p>{item.description}</p>                 
					    </figcaption>
					</figure>
				</label>


				<div className="modal" role="dialog">
					<div className="modal-inner">

					  <label className="btn-modal-close" htmlFor={`workItem${i}`}>
					    <FontAwesomeIcon className="modal-icon" icon={faTimes} />CLOSE
					  </label>

					  <h3 className="h3-modal">{item.titleShort}</h3>
					  <h4>{item.description}</h4> 

					  {/* The code below is necessary because the image has to load first and THEN the Image component. Otherwise, there will be errors in the console. */}
					  	
					  { 
					  	item.modalImgOneSrc &&
					  	<Image className="modal-img" src={item.modalImgOneSrc} alt={item.modalImgOneAlt} /> 
					  }
					  	
					  { item.modalImgTwoSrc && 
					  	<Image className="modal-img" style={modalImgTwoStyle} src={item.modalImgTwoSrc} alt={item.modalImgTwoAlt} /> 
					  }

					  	
					  {item.modalSummary}
				

					  <div style={modalViewProjStyle}>
					  	<a 
					  		className="btn-viewproject" 
					  		href={item.projectURL} 
					  		target="_blank" 
					  		rel="noreferrer noopener">
					  		<FontAwesomeIcon className="modal-icon" icon={faExternalLinkAlt} />view the project
					  	</a>
					  </div>

					  <div style={modalViewRepoStyle}>
							<a 
								className="btn-viewproject" 
								href={`https://github.com/lee-anne-clarke/${item.projectRepo}`} 
								target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon className="modal-icon" icon={faFileCode} />view the repo
							</a>
					  </div>

					  <div style={modalViewTempOneStyle}>
							<a className="btn-viewproject" href={item.projTempURLOne} target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon className="modal-icon" icon={faTint} />template 1
							</a>
					  </div>

					  <div style={modalViewTempTwoStyle}>
							<a className="btn-viewproject" href={item.projTempURLTwo} target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon className="modal-icon" icon={faTint} />template 2
							</a>
					  </div>

					  <div style={modalViewTempThreeStyle}>
							<a className="btn-viewproject" href={item.projTempURLThree} target="_blank" rel="noreferrer noopener">
								<FontAwesomeIcon className="modal-icon" icon={faTint} />template 3
							</a>
					  </div>

					  <label className="btn-modal-close btn-modal-close--bottom" htmlFor={`workItem${i}`}>
					    <FontAwesomeIcon className="modal-icon" icon={faTimes} />CLOSE
					  </label>

					</div>
				</div>

			</div> // END .workitem
		);
	} // END OF eachWorkItem


	render() {
	  return (
	  	<div>
	  		{this.state.workItems.map(this.eachWorkItem)}
	  	</div>
	  );
	}
}


export default WorkItemsGrid;
