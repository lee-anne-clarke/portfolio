import grandstandThumb from '../img/grandstand.jpg';
import grandstandFull from '../img/grandstand-full.jpg';
import viableThumb from '../img/viable.jpg';
import viableFull from '../img/viable-full.jpg';
import buildersThumb from '../img/buildersshow.jpg';
import buildersFull1 from '../img/buildersshow-full-1.jpg';
import buildersFull2 from '../img/buildersshow-full-2.jpg';
import gdcThumb from '../img/gdc.jpg';
import gdcFull1 from '../img/gdc-full-1.jpg';
import gdcFull2 from '../img/gdc-full-2.jpg';
import freshgrocerThumb from '../img/freshgrocer.jpg';
import freshgrocerFull from '../img/freshgrocer-full.jpg';
import portfolioThumb from '../img/portfolio.jpg';
import braccoThumb from '../img/bracco.jpg';
import braccoFull from '../img/bracco-full.jpg';
import upserveThumb from '../img/upserve.jpg';
import upserveFull from '../img/upserve-full.jpg';
import itsPartnerThumb from '../img/itslearning-cp.jpg';
import itsPartnerFull from '../img/itslearning-cp-full.jpg';
import cityHospitalThumb from '../img/cityhospital.jpg';
import cityHospitalFull from '../img/cityhospital-full.jpg';
import teampageThumb from '../img/teampage.jpg';
import teampageFull from '../img/teampage-full.jpg';
import itsEmailThumb from '../img/itslearning-email.jpg';
import itsEmailFull from '../img/itslearning-email-full.jpg';
import fisThumb from '../img/fiservices.jpg';
import fisFull1 from '../img/fiservices-full-1.jpg';
import fisFull2 from '../img/fiservices-full-2.jpg';
import silversparkThumb from '../img/silverspark.jpg';
import silversparkFull1 from '../img/silverspark-full-1.jpg';
import silversparkFull2 from '../img/silverspark-full-2.jpg';
import photosearchThumb from '../img/photosearch.jpg';
import photosearchFull from '../img/photosearch-full.jpg';
import socializeThumb from '../img/socialize.jpg';
import socializeFull1 from '../img/socialize-full-1.jpg';
import socializeFull2 from '../img/socialize-full-2.jpg';

import {
	ModalSummaryNAHB,
	ModalSummaryGrandstand,
	ModalSummaryViable,
	ModalSummaryBracco,
	ModalSummaryFiserv,
	ModalSummaryFresh,
	ModalSummaryUpserve,
	ModalSummaryITSLContact,
	ModalSummaryCity,
	ModalSummaryModSig,
	ModalSummaryITSLEmail,
	ModalSummaryLAC,
	ModalSummaryPhotoSearch,
	ModalSummaryGDC,
  ModalSummarySocialize
} from './ModalSummary';


const workItems = [
  {
    titleShort: "Great Design Co.",
    imgSource: gdcThumb,
    description: "mock design agency",
    sortClasses: "sort-react",
    modalImgOneSrc: gdcFull1,
    modalImgOneAlt: "Great Design Co. screen cap - homepage",
    modalSummary: <ModalSummaryGDC />,
    projectURL: "/work/greatdesignco/",
    projectRepo: "greatdesignco"
  },

    {
    titleShort: "Socialize",
    imgSource: socializeThumb,
    description: "mock social media app",
    sortClasses: "sort-python sort-bs",
    modalImgOneSrc: socializeFull1,
    modalImgOneAlt: "Socialize - homepage",
    modalImgTwoSrc: socializeFull2,
    modalImgTwoAlt: "Socialize - post detail page",
    modalSummary: <ModalSummarySocialize />,
  },
  
  {
    titleShort: "Grandstand",
    imgSource: grandstandThumb,
    description: "product landing page",
    sortClasses: "sort-foundation sort-vue",
    modalImgOneSrc: grandstandFull,
    modalImgOneAlt: "Grandstand landing page screen cap - full",
    modalSummary: <ModalSummaryGrandstand />,
  },

  {
    titleShort: "Viable",
    imgSource: viableThumb,
    description: "product landing page",
    sortClasses: "sort-foundation sort-vue",
    modalImgOneSrc: viableFull,
    modalImgOneAlt: "Viable landing page screen cap - full",
    modalSummary: <ModalSummaryViable />,
  },

  {
    titleShort: "The Fresh Grocer",
    imgSource: freshgrocerThumb,
    description: "mock website redesign",
    sortClasses: "sort-react",
    modalImgOneSrc: freshgrocerFull,
      modalImgOneAlt: "The Fresh Grocer screen cap - full",
      modalSummary: <ModalSummaryFresh />,
      projectURL: "/work/freshgrocer/",
      projectRepo: "freshgrocer"
  },

  {
    titleShort: "International Builders' Show",
    imgSource: buildersThumb,
    description: "site relaunch",
    sortClasses: "sort-bs",
    modalImgOneSrc: buildersFull1,
    modalImgOneAlt: "NAHB International Builders' Show 2017 screen cap - homepage",
    modalImgTwoSrc: buildersFull2,
    modalImgTwoAlt: "NAHB International Builders' Show 2017 screen cap - inside page",
    modalSummary: <ModalSummaryNAHB />
  },

  {
  	titleShort: "Lee-Anne-Clarke.com",
  	imgSource: portfolioThumb,
  	description: "my portfolio",
  	sortClasses: "sort-react",
      modalImgOneSrc: "",
      modalImgOneAlt: "",
      modalSummary: <ModalSummaryLAC />,
      projectRepo: "portfolio"
  },

  {
    titleShort: "Bracco: Learn the Truth",
    imgSource: braccoThumb,
    description: "microsite",
    sortClasses: "sort-bs",
    modalImgOneSrc: braccoFull,
    modalImgOneAlt: "Grandstand landing page screen cap - full",
    modalSummary: <ModalSummaryBracco />,
    projectURL: "/work/bracco/",
    projectRepo: "bracco"
  },

  {
    titleShort: "Upserve",
    imgSource: upserveThumb,
    description: "landing page templates",
    sortClasses: "sort-other",
    modalImgOneSrc: upserveFull,
    modalImgOneAlt: "Upserve marketing landing page template screen cap - full",
    modalSummary: <ModalSummaryUpserve />,
    projTempURLOne: "/work/upserve/upserve1.html",
    projTempURLTwo: "/work/upserve/upserve2.html",
    projTempURLThree: "/work/upserve/upserve3.html",
  },

  {
    titleShort: "itslearning, inc.",
    imgSource: itsPartnerThumb,
    description: "channel partner page template",
    sortClasses: "sort-bs",
    modalImgOneSrc: itsPartnerFull,
    modalImgOneAlt: "itslearning channel partner page screen cap - full",
    modalSummary: <ModalSummaryITSLContact />,
  },

  {
  	titleShort: "City Hospital",
  	imgSource: cityHospitalThumb,
  	description: "homepage prototype",
  	sortClasses: "sort-bs",
      modalImgOneSrc: cityHospitalFull,
      modalImgOneAlt: "City Hospital screen cap - full",
      modalSummary: <ModalSummaryCity />,
      projectURL: "/work/cityhospital/",
      projectRepo: "cityhospital"
  },

  {
    titleShort: "Modern Signal",
    imgSource: teampageThumb,
    description: "client employee page",
    sortClasses: "sort-other",
    modalImgOneSrc: teampageFull,
    modalImgOneAlt: "Modern Signal client employee page screen cap - full",
    modalSummary: <ModalSummaryModSig />,
    projectURL: "/work/teampage/",
    projectRepo: "teampage"
  },

  {
    titleShort: "itslearning, inc.",
    imgSource: itsEmailThumb,
    description: "email templates",
    sortClasses: "sort-emails",
    modalImgOneSrc: itsEmailFull,
    modalImgOneAlt: "itslearning email template screen cap - full",
    modalSummary: <ModalSummaryITSLEmail />,
    projTempURLOne: "/work/itslearning/emailtemplates/emailtemp1.html",
    projTempURLTwo: "/work/itslearning/emailtemplates/emailtemp2.html"
  },

  {
    titleShort: "Flickr photo search",
    imgSource: photosearchThumb,
    description: "independent project",
    sortClasses: "sort-other",
    modalImgOneSrc: photosearchFull,
    modalImgOneAlt: "Flickr photo search screen cap - full",
    modalSummary: <ModalSummaryPhotoSearch />,
    projectURL: "/work/photosearch/",
    projectRepo: "photosearch"
  },
]
		

export default workItems;