import React from 'react';

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
	ModalSummaryLAC,
	ModalSummaryPhotoSearch,
	ModalSummaryGDC
} from './ModalSummary';



const workItems = [
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
		


export default workItems;