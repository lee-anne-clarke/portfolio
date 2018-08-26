import React, { Component } from 'react';
import {
	ModalSummaryNAHB,
  ModalSummaryGranstand,
  ModalSummaryViable,
  ModalSummaryBracco,
  ModalSummaryFiserv,
  ModalSummarySilver,
  ModalSummaryFresh,
	ModalSummaryUpserve,
	ModalSummaryITSLContact,
	ModalSummaryCity,
	ModalSummaryModSig,
	ModalSummaryITSLEmail,
	ModalSummaryChanel,
	ModalSummaryLAC,
	ModalSummaryPhotoSearch,
	ModalSummaryGDC
} from './ModalSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
	faTimes,
	faTint,
	faExternalLinkAlt
} from '@fortawesome/free-solid-svg-icons';

import { faFileCode } from '@fortawesome/free-regular-svg-icons';


class WorkItemsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workItems: [
		    {
			    titleShort: "Grandstand",
			    imgSource: require("../img/grandstand.jpg"),
			    description: "landing page",
			    sortClasses: "sort-foundation sort-vue",
			    modalImgOneSrc: require("../img/grandstand-full.jpg"),
			    modalImgOneAlt: "Grandstand landing page screen cap - full",
			    modalSummary: <ModalSummaryGranstand />,
			    projectURL: "https://getgrandstand.com/"
		  	},

			  {
			    titleShort: "Viable",
			    imgSource: require("../img/viable.jpg"),
			    description: "landing page",
			    sortClasses: "sort-foundation sort-vue",
			    modalImgOneSrc: require("../img/viable-full.jpg"),
			    modalImgOneAlt: "Viable landing page screen cap - full",
			    modalSummary: <ModalSummaryViable />,
			    projectURL: "https://viable.af/"
			  },

			  {
			    titleShort: "International Builders' Show",
			    imgSource: require("../img/buildersshow.jpg"),
			    description: "site relaunch",
			    sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/buildersshow-full-1.jpg"),
			    modalImgOneAlt: "NAHB International Builders' Show 2017 screen cap - homepage",
			    modalImgTwoSrc: require("../img/buildersshow-full-2.jpg"),
			    modalImgTwoAlt: "NAHB International Builders' Show 2017 screen cap - inside page",
			    modalSummary: <ModalSummaryNAHB />
			  },

			  {
			    titleShort: "Great Design Co.",
			    imgSource: require("../img/gdc.jpg"),
			    description: "mock design agency",
			    sortClasses: "sort-react",
			    modalImgOneSrc: require("../img/gdc-full-1.jpg"),
			    modalImgOneAlt: "Great Design Co. screen cap - homepage",
			    modalImgTwoSrc: require("../img/gdc-full-2.jpg"),
			    modalImgTwoAlt: "Great Design Co. screen cap - project page",
			    modalSummary: <ModalSummaryGDC />,
			    projectURL: "/work/greatdesignco/",
			    projectRepo: "greatdesignco"
			  },

			  {
				  titleShort: "The Fresh Grocer",
				  imgSource: require("../img/freshgrocer.jpg"),
				  description: "mock website redesign",
				  sortClasses: "sort-react",
			    modalImgOneSrc: require("../img/freshgrocer-full.jpg"),
			    modalImgOneAlt: "The Fresh Grocer screen cap - full",
			    modalSummary: <ModalSummaryFresh />,
			    projectURL: "/work/freshgrocer/",
			    projectRepo: "freshgrocer"
			  },

			  {
				  titleShort: "Lee-Anne-Clarke.com",
				  imgSource: require("../img/portfolio.jpg"),
				  description: "my portfolio",
				  sortClasses: "sort-react",
			    modalImgOneSrc: require("../img/portfolio-full.jpg"),
			    modalImgOneAlt: "Lee-Anne-Clarke.com screen cap - full",
			    modalSummary: <ModalSummaryLAC />,
			    projectRepo: "portfolio"
			  },

			  {
			    titleShort: "Bracco: Learn the Truth",
			    imgSource: require("../img/bracco.jpg"),
			    description: "microsite",
			    sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/bracco-full.jpg"),
			    modalImgOneAlt: "Grandstand landing page screen cap - full",
			    modalSummary: <ModalSummaryBracco />,
			    projectURL: "/work/bracco/",
			    projectRepo: "bracco"
			  },

			  {
			    titleShort: "Upserve",
			    imgSource: require("../img/upserve.jpg"),
			    description: "landing page templates",
			    sortClasses: "sort-other",
			    modalImgOneSrc: require("../img/upserve-full.jpg"),
			    modalImgOneAlt: "Upserve marketing landing page template screen cap - full",
			    modalSummary: <ModalSummaryUpserve />,
			    projTempURLOne: "/work/upserve/upserve1.html",
			    projTempURLTwo: "/work/upserve/upserve2.html",
			    projTempURLThree: "/work/upserve/upserve3.html",
			  },

			  {
			    titleShort: "itslearning, inc.",
			    imgSource: require("../img/itslearning-cp.jpg"),
			    description: "channel partner page template",
			    sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/itslearning-cp-full.jpg"),
			    modalImgOneAlt: "itslearning channel partner page screen cap - full",
			    modalSummary: <ModalSummaryITSLContact />,
			    projectURL: "http://info.itslearning.net/US-Partner-Landing-Page.html",
			  },

			  {
					titleShort: "City Hospital",
					imgSource: require("../img/cityhospital.jpg"),
					description: "homepage prototype",
					sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/cityhospital-full.jpg"),
			    modalImgOneAlt: "City Hospital screen cap - full",
			    modalSummary: <ModalSummaryCity />,
			    projectURL: "/work/cityhospital/",
			    projectRepo: "cityhospital"
			  },

			  {
			    titleShort: "Modern Signal",
			    imgSource: require("../img/teampage.jpg"),
			    description: "client employee page",
			    sortClasses: "sort-other",
			    modalImgOneSrc: require("../img/teampage-full.jpg"),
			    modalImgOneAlt: "Modern Signal client employee page screen cap - full",
			    modalSummary: <ModalSummaryModSig />,
			    projectURL: "/work/teampage/",
			    projectRepo: "teampage"
			  },

			  {
			    titleShort: "itslearning, inc.",
			    imgSource: require("../img/itslearning-email.jpg"),
			    description: "email templates",
			    sortClasses: "sort-emails",
			    modalImgOneSrc: require("../img/itslearning-email-full.jpg"),
			    modalImgOneAlt: "itslearning email template screen cap - full",
			    modalSummary: <ModalSummaryITSLEmail />,
			    projTempURLOne: "/work/itslearning/emailtemplates/emailtemp1.html",
			    projTempURLTwo: "/work/itslearning/emailtemplates/emailtemp2.html"
			  },

			  {
			    titleShort: "Chanel",
			    imgSource: require("../img/chanel.jpg"),
			    description: "mock website redesign",
			    sortClasses: "sort-drupal",
			    modalImgOneSrc: require("../img/chanel-full-1.jpg"),
			    modalImgOneAlt: "Chanel screen cap - homepage",
			    modalImgTwoSrc: require("../img/chanel-full-2.jpg"),
			    modalImgTwoAlt: "Chanel screen cap - inside page",
			    modalSummary: <ModalSummaryChanel />,
			    projectURL: "/work/chanel/"
			  },

			  {
			    titleShort: "Fiservices",
			    imgSource: require("../img/fiservices.jpg"),
			    description: "mock financial services website",
			    sortClasses: "sort-wp",
			    modalImgOneSrc: require("../img/fiservices-full-1.jpg"),
			    modalImgOneAlt: "Fiservices screen cap - homepage",
					modalImgTwoSrc: require("../img/fiservices-full-2.jpg"),
			    modalImgTwoAlt: "Fiservices screen cap - inside page",
			    modalSummary: <ModalSummaryFiserv />,
			    projectURL: "/work/fiservices/"
			  },

			  {
			    titleShort: "Silver Spark Jewelry",
			    imgSource: require("../img/silverspark.jpg"),
			    description: "mock business website",
			    sortClasses: "sort-wp",
			    modalImgOneSrc: require("../img/silverspark-full-1.jpg"),
			    modalImgOneAlt: "Silver Spark Jewelry screen cap - homepage",
					modalImgTwoSrc: require("../img/silverspark-full-2.jpg"),
			    modalImgTwoAlt: "Silver Spark Jewelry screen cap - inside page",
			    modalSummary: <ModalSummarySilver />,
			    projectURL: "/work/silverspark/"
			  },

			  {
			    titleShort: "Flickr photo search",
			    imgSource: require("../img/photosearch.jpg"),
			    description: "independent project",
			    sortClasses: "sort-other",
			    modalImgOneSrc: require("../img/photosearch-full.jpg"),
			    modalImgOneAlt: "Flickr photo search screen cap - full",
			    modalSummary: <ModalSummaryPhotoSearch />,
			    projectURL: "/work/photosearch/",
			    projectRepo: "photosearch"
			  },
			]
		}

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

		// ** Hide project content as needed **

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
		        <img className="workitem__img" src={item.imgSource} alt={`${item.titleShort} screen cap`} />
		        
		        <figcaption className="workitem__caption">
		          <h3 className="h3-workitem">{item.titleShort}</h3>
		          <p>{item.description}</p>                 
		        </figcaption>
	        </figure>
	      </label>


	      <div className="modal" role="dialog">
	        <div className="modal-content">

	          <label className="btn-modal-close" htmlFor={`workItem${i}`}>
	            <FontAwesomeIcon className="modal-icon" icon={faTimes} />CLOSE
	          </label>

	          <h3 className="h3-modal">{item.titleShort}</h3>
	          <h4>{item.description}</h4> 

			      <img className="modal-img" src={item.modalImgOneSrc} alt={item.modalImgOneAlt} />
			      <img className="modal-img" style={modalImgTwoStyle} src={item.modalImgTwoSrc} alt={item.modalImgTwoAlt} />

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
	}


	render() {
	  return (
	  	<React.Fragment>
	  		{this.state.workItems.map(this.eachWorkItem)}
	  	</React.Fragment>
	  );
	}
}


export default WorkItemsGrid;
