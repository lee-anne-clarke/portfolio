import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	faTimes,
	faTint,
	faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

import { faFileCode } from '@fortawesome/free-regular-svg-icons';

import workItems from './workItems'


export default function WorkItemsGrid() {
	const [workItemsList] = useState(workItems);

	useEffect(() => {
		//Add "u-no-overflow" class to <body> when modal is opened; remove when modal is closed
		let openModalBtn = document.querySelectorAll('.workitem__modal-checkbox-lbl');
		let closeModalBtn = document.querySelectorAll('.btn--modal-close');

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
	}, []);


	const renderWorkItemContent = (item, i) => {

		let modalViewProjStyle,
				modalImgTwoStyle,
				modalViewRepoStyle,
				modalViewTempOneStyle,
				modalViewTempTwoStyle,
				modalViewTempThreeStyle
	  

	  // ** Generate modal content for each Work item with the content from the workItems.js array **

	  i += 1; //start index at 1 instead of 0

		return (
			<div className={`workitem sort ${item.sortClasses}`} key={i}>
				<input 
					type="checkbox" 
					className="workitem__modal-checkbox" 
					id={`workItem${i}`} 
				/>
			  
				<label className="workitem__modal-checkbox-lbl" htmlFor={`workItem${i}`}>
					<figure className="workitem__fig">
					    <Image className="workitem__img" src={item.imgSource} alt={`${item.titleShort} screenshot`} />
					    
					    <figcaption className="workitem__caption">
					      <h3 className="h3--workitem">{item.titleShort}</h3>
					      <p>{item.description}</p>                 
					    </figcaption>
					</figure>
				</label>


				<div className="modal" role="dialog">
					<div className="modal__inner">

						<label className="btn btn--modal-close" htmlFor={`workItem${i}`}>
					    	<FontAwesomeIcon className="modal__icon" icon={faTimes} />CLOSE
					    </label>

						<h3 className="h3--modal">{item.titleShort}</h3>
						<h4>{item.description}</h4> 

						{item.modalSummary}

						<div className="modal__view_proj">
							{ item.projectURL && 
								<div>
									<a 
										className="btn btn--viewproject" 
										href={item.projectURL} 
										target="_blank" 
										rel="noreferrer noopener">
										<FontAwesomeIcon className="modal__icon" icon={faExternalLinkAlt} />view the project
									</a>
								</div>
							}

							{ item.projectRepo && 
								<div className="u-mt-2">
									<a 
										className="btn btn--viewproject" 
										href={`https://github.com/lee-anne-clarke/${item.projectRepo}`} 
										target="_blank" 
										rel="noreferrer noopener">
										<FontAwesomeIcon className="modal__icon" icon={faFileCode} />view the repo
									</a>
								</div>
							}

							{ item.projTemplateURLOne && 
								<div>
									<a className="btn btn--viewproject" href={item.projTemplateURLOne} target="_blank" rel="noreferrer noopener">
										<FontAwesomeIcon className="modal__icon" icon={faTint} />template 1
									</a>
								</div>
							}

							{ item.projTemplateURLTwo &&
								<div className="u-mt-2">
									<a className="btn btn--viewproject" href={item.projTemplateURLTwo} target="_blank" rel="noreferrer noopener">
										<FontAwesomeIcon className="modal__icon" icon={faTint} />template 2
									</a>
								</div>
							}

							{ item.projTemplateURLThree && 
								<div className="u-mt-2">
									<a className="btn btn--viewproject" href={item.projTemplateURLThree} target="_blank" rel="noreferrer noopener">
									<FontAwesomeIcon className="modal__icon" icon={faTint} />template 3
									</a>
								</div>
							}

						</div> {/* END .modal__view_proj*/}

						{/* The code below is necessary because the image has to load first and THEN the Image component. Otherwise, there will be errors in the console. */}

						{ item.modalImgOneSrc &&
							<Image className="modal__img" src={item.modalImgOneSrc} alt={item.modalImgOneAlt} /> 
						}

						{ item.modalImgTwoSrc && 
							<Image className="modal__img" src={item.modalImgTwoSrc} alt={item.modalImgTwoAlt} /> 
						}

						<label className="btn btn--modal-close btn--modal-close-btm" htmlFor={`workItem${i}`}>
						<FontAwesomeIcon className="modal__icon" icon={faTimes} />CLOSE
						</label>

					</div>

				</div> {/* END .modal */}

			</div> // END .workitem
		);
	} // END OF renderWorkItemContent()



	return (
		<div>
			{workItemsList.map(renderWorkItemContent)}
		</div>
	);
	
}

