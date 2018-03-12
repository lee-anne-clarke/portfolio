import React, { Component } from 'react'
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
	ModalSummaryBea
} from './ModalSummary'


class WorkItemsGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			workItems: [
			  {
			    id: 1,
			    title: "NAHB Int'l Builders' Show",
			    titleFull: "NAHB International Builders' Show 2017",
			    itemImgSrc: require("../img/buildersshow.jpg"),
			    description: "site relaunch",
			    sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/buildersshow-full-1.jpg"),
			    modalImgOneAlt: "NAHB International Builders' Show 2017 screen cap - homepage",
			    modalImgTwoSrc: require("../img/buildersshow-full-2.jpg"),
			    modalImgTwoAlt: "NAHB International Builders' Show 2017 screen cap - inside page",
			    modalSummary: <ModalSummaryNAHB />,
			    projectURL: "http://www.buildersshow.com/"
			  },

		    {
			    id: 2,
			    title: "Grandstand",
			    titleFull: "Grandstand",
			    itemImgSrc: require("../img/grandstand.jpg"),
			    description: "landing page",
			    sortClasses: "sort-foundation sort-vue",
			    modalImgOneSrc: require("../img/grandstand-full.jpg"),
			    modalImgOneAlt: "Grandstand landing page screen cap - full",
			    modalSummary: <ModalSummaryGranstand />,
			    projectURL: "https://getgrandstand.com/"
		  	},

			  {
			    id: 3,
			    title: "Viable",
			    titleFull: "Viable",
			    itemImgSrc: require("../img/viable.jpg"),
			    description: "landing page",
			    sortClasses: "sort-foundation sort-vue",
			    modalImgOneSrc: require("../img/viable-full.jpg"),
			    modalImgOneAlt: "Viable landing page screen cap - full",
			    modalSummary: <ModalSummaryViable />,
			    projectURL: "https://viable.af/"
			  },

			  {
			  	id: 4,
			    title: "Bracco",
			    titleFull: "Bracco: Learn the Truth",
			    itemImgSrc: require("../img/bracco.jpg"),
			    description: "microsite",
			    sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/bracco-full.jpg"),
			    modalImgOneAlt: "Grandstand landing page screen cap - full",
			    modalSummary: <ModalSummaryBracco />,
			    projectURL: "/work/bracco/",
			    projectRepo: "bracco"
			  },

			  {
			  	id: 5,
			    title: "Fiservices",
			    titleFull: "Fiservices",
			    itemImgSrc: require("../img/fiservices.jpg"),
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
			  	id: 6,
			    title: "Silver Spark Jewelry",
			    titleFull: "Silver Spark Jewelry",
			    itemImgSrc: require("../img/silverspark.jpg"),
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
			  	id: 7,
				  title: "The Fresh Grocer",
				  titleFull: "The Fresh Grocer",
				  itemImgSrc: require("../img/freshgrocer.jpg"),
				  description: "mock website redesign",
				  sortClasses: "sort-react",
			    modalImgOneSrc: require("../img/freshgrocer-full.jpg"),
			    modalImgOneAlt: "The Fresh Grocer screen cap - full",
			    modalSummary: <ModalSummaryFresh />,
			    projectURL: "/work/freshgrocer/",
			    projectRepo: "freshgrocer"
			  },

			  {
			  	id: 8,
			    title: "Upserve",
			    titleFull: "Upserve",
			    itemImgSrc: require("../img/upserve.jpg"),
			    description: "landing page templates",
			    sortClasses: "",
			    modalImgOneSrc: require("../img/upserve-full.jpg"),
			    modalImgOneAlt: "Upserve marketing landing page template screen cap - full",
			    modalSummary: <ModalSummaryUpserve />,
			    projTempURLOne: "/work/upserve/upserve1.html",
			    projTempURLTwo: "/work/upserve/upserve2.html",
			    projTempURLThree: "/work/upserve/upserve3.html",
			  },

			  {
			  	id: 9,
			    title: "itslearning, inc.",
			    titleFull: "itslearning, inc.",
			    itemImgSrc: require("../img/itslearning-cp.jpg"),
			    description: "channel partner page template",
			    sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/itslearning-cp-full.jpg"),
			    modalImgOneAlt: "itslearning channel partner page screen cap - full",
			    modalSummary: <ModalSummaryITSLContact />,
			    projectURL: "http://info.itslearning.net/US-Partner-Landing-Page.html",
			  },

			  {
			  	id: 10,
					title: "City Hospital",
					titleFull: "City Hospital",
					itemImgSrc: require("../img/cityhospital.jpg"),
					description: "homepage prototype",
					sortClasses: "sort-bs",
			    modalImgOneSrc: require("../img/cityhospital-full.jpg"),
			    modalImgOneAlt: "City Hospital screen cap - full",
			    modalSummary: <ModalSummaryCity />,
			    projectURL: "/work/cityhospital/",
			    projectRepo: "cityhospital"
			  },

			  {
			  	id: 11,
			    title: "Modern Signal",
			    titleFull: "Modern Signal",
			    itemImgSrc: require("../img/teampage.jpg"),
			    description: "client employee page",
			    sortClasses: "",
			    modalImgOneSrc: require("../img/teampage-full.jpg"),
			    modalImgOneAlt: "Modern Signal client employee page screen cap - full",
			    modalSummary: <ModalSummaryModSig />,
			    projectURL: "/work/teampage/",
			    projectRepo: "teampage"
			  },

			  {
			  	id: 12,
			    title: "itslearning, inc.",
			    titleFull: "itslearning, inc.",
			    itemImgSrc: require("../img/itslearning-email.jpg"),
			    description: "email templates",
			    sortClasses: "sort-emails",
			    modalImgOneSrc: require("../img/itslearning-email-full.jpg"),
			    modalImgOneAlt: "itslearning email template screen cap - full",
			    modalSummary: <ModalSummaryITSLEmail />,
			    projTempURLOne: "/work/itslearning/emailtemplates/emailtemp1.html",
			    projTempURLTwo: "/work/itslearning/emailtemplates/emailtemp2.html"
			  },

			  {
			    id: 13,
			    title: "Chanel",
			    titleFull: "Chanel",
			    itemImgSrc: require("../img/chanel.jpg"),
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
			    id: 14,
					title: "Beatrice's Salon",
					titleFull: "Beatrice's Spa and Beauty Salon",
					itemImgSrc: require("../img/beatrice.jpg"),
					description: "mock business website",
			    sortClasses: "sort-drupal",
			    modalImgOneSrc: require("../img/beatrice-full-1.jpg"),
			    modalImgOneAlt: "Beatrice Spa and Beauty Salon screen cap - homepage",
			    modalImgTwoSrc: require("../img/beatrice-full-2.jpg"),
			    modalImgTwoAlt: "Beatrice Spa and Beauty Salon screen cap - inside page",
			    modalSummary: <ModalSummaryBea />,
			    projectURL: "/work/beatrice/"
			  }
			]
		}

		this.eachWorkItem = this.eachWorkItem.bind(this)
	}


  componentDidMount() {
    //Add "u-no-overflow" class to body element when modal is open; remove when closed
    let openModal = document.querySelectorAll('.modal-open');
    let closeModal = document.querySelectorAll('.modal-close');

    for (let i of openModal) {
      i.addEventListener('click', () => {
        document.body.classList.add('u-no-overflow');
      });
    }

    for (let i of closeModal) {
      i.addEventListener('click', () => {
        document.body.classList.remove('u-no-overflow');
      });
    }
  }


	eachWorkItem(item, i) {

		// ** Hide project/image links as needed **
		let modalViewProjStyle,
				modalImgTwoStyle,
				modalViewRepoStyle,
				modalViewTempOneStyle,
				modalViewTempTwoStyle,
				modalViewTempThreeStyle

	  if (item.modalImgTwoSrc) {
	  	modalImgTwoStyle = {display: 'inline'}
	  } else {
	  	modalImgTwoStyle = {display: 'none'}
	  }

	  if (item.projectRepo) {
			modalViewRepoStyle = {
				display: 'block',
				marginTop: '2rem'
			}
	  } else {
	  	modalViewRepoStyle = {display: 'none'}
	  }

	  if (item.projTempURLOne) {
			modalViewTempOneStyle = {
				display: 'block',
				marginTop: '2rem'
			}
			modalViewProjStyle = {display: 'none'}
	  } else {
	  	modalViewTempOneStyle = {display: 'none'}
	  }

	  if (item.projTempURLTwo) {
			modalViewTempTwoStyle = {
				display: 'block',
				marginTop: '2rem'
			}
	  } else {
	  	modalViewTempTwoStyle = {display: 'none'}
	  }

	  if (item.projTempURLThree) {
			modalViewTempThreeStyle = {
				display: 'block',
				marginTop: '2rem'
			}
	  } else {
	  	modalViewTempThreeStyle = {display: 'none'}
	  }
	  

	  // ** Dynamically generate each Work item with the content from the "workItems" array **
	  i += 1; //start index at 1 instead of 0

		return (
			<div key={i} index={i} className={`work__item sort ${item.sortClasses}`}>
	      <input className="modal-checkbox" type="checkbox" name={`workItem${i}`} id={`workItem${i}`} />
	      
	      <label className="modal-label modal-open" htmlFor={`workItem${i}`}>
	        <figure className="work__item__fig">
	        <img src={item.itemImgSrc} alt={item.titleFull} />
	  
	        <figcaption className="work__item__caption">
	          <h3>{item.title}</h3>
	          <p>{item.description}</p>                                        
	        </figcaption>
	  
	        </figure>
	      </label>

	      <div className="modal-overlay" role="dialog">
	        <div className="modal-content">

	          <label className="modal-label modal-close" htmlFor={`workItem${i}`}>
	            <i className="fa fa-close"></i>CLOSE
	          </label>

	          <h3>{item.titleFull}</h3>
	          <h4>{item.description}</h4> 

			      <img src={item.modalImgOneSrc} alt={item.modalImgOneAlt} />
			      <img style={modalImgTwoStyle} src={item.modalImgTwoSrc} alt={item.modalImgTwoAlt} />

	          {item.modalSummary}

	          <div style={modalViewProjStyle} className="modal-viewproject">
	          	<a href={item.projectURL} target="_blank"><i className="fa fa-external-link"></i>view project</a>
	          </div>

	          <div style={modalViewRepoStyle} className="modal-viewproject">
							<a href={`https://github.com/lee-anne-clarke/${item.projectRepo}`} target="_blank"><i className="fa fa-file-code-o"></i>view the repo</a>
	          </div>

	          <div style={modalViewTempOneStyle} className="modal-viewproject">
							<a href={item.projTempURLOne} target="_blank"><i className="fa fa-tint"></i>template 1</a>
	          </div>

	          <div style={modalViewTempTwoStyle} className="modal-viewproject">
							<a href={item.projTempURLTwo} target="_blank"><i className="fa fa-tint"></i>template 2</a>
	          </div>

	          <div style={modalViewTempThreeStyle} className="modal-viewproject">
							<a href={item.projTempURLThree} target="_blank"><i className="fa fa-tint"></i>template 3</a>
	          </div>

	          <label className="modal-label modal-close modal-close--bottom" htmlFor={`workItem${i}`}>
	            <i className="fa fa-close"></i>CLOSE
	          </label>
	        </div>
	      </div>

	    </div>
		)
	}


	render() {
	  return (
	  	<div>
	  		{this.state.workItems.map(this.eachWorkItem)}
	  	</div>
	  );
	}
}


export default WorkItemsGrid
