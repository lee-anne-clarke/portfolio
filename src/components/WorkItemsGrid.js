import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faTimes,
	faTint,
	faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';
import { faFileCode } from '@fortawesome/free-regular-svg-icons';
import { v4 as uuidv4 } from 'uuid';
import workItems from './workItems'


export default function WorkItemsGrid() {
	const [workItemsList] = useState(workItems);

	// Track the ID or index of the currently open modal (null if none are open)
  const [openModalId, setOpenModalId] = useState(null);

  // Functions to close and open the modal
	const handleOpenModal = (id) => {
		setOpenModalId(id);
		document.body.classList.add('u-no-overflow'); // Prevent <body> scrolling when modal is open
	};

	const handleCloseModal = () => {
		setOpenModalId(null);
		document.body.classList.remove('u-no-overflow');
	};

	// Close modal on 'Escape' key press for better accessibility
	useEffect(() => {
		const handleKeyDown = (e) => {
			if (e.key === 'Escape') {
				handleCloseModal();
			}
		};

		if (openModalId) {
			window.addEventListener('keydown', handleKeyDown);
		}

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [openModalId]);


	// ** Generate content for each modal with the data from `workItems.js` **

	const renderWorkItemContent = (item, i) => {

		const modalId = `workItem${i}`;
		const isOpen = openModalId === modalId;

		return (
			<div className={`workitem sort ${item.sortClasses}`} key={uuidv4()}>
			  
				<button 
					type="button"
					className="workitem__modal-open-btn"
					onClick={() => handleOpenModal(modalId)} 
				>
					<figure className="workitem__fig">
					    <Image className="workitem__img" src={item.imgSource} alt={`${item.titleShort} screenshot`} />
					    
					    <figcaption className="workitem__caption">
					      <h3 className="h3--workitem">{item.titleShort}</h3>
					      <p>{item.description}</p>                 
					    </figcaption>
					</figure>
				</button>


				{ isOpen && (
					<div className="modal" id={modalId}>
						<div className="modal__inner">

							<button 
								type="button" 
								className="btn btn--modal-close" 
								onClick={handleCloseModal}
							>
								<FontAwesomeIcon className="modal__icon" icon={faTimes} />CLOSE
							</button>

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

							{ item.modalImgOneSrc &&
								<Image className="modal__img" src={item.modalImgOneSrc} alt={item.modalImgOneAlt} /> 
							}

							{ item.modalImgTwoSrc && 
								<Image className="modal__img" src={item.modalImgTwoSrc} alt={item.modalImgTwoAlt} /> 
							}

							<button 
								type="button" 
								className="btn btn--modal-close" 
								onClick={handleCloseModal}
							>
								<FontAwesomeIcon className="modal__icon" icon={faTimes} />CLOSE
							</button>

						</div>

					</div>
				)} {/* END .modal */}

			</div> // END .workitem
		);
	} // END OF renderWorkItemContent()



	return (
		<div>
			{workItemsList.map(renderWorkItemContent)}
		</div>
	);
	
}

