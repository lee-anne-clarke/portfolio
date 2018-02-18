import React, { Component } from 'react'
import '../normalize.min.css'
import '../styles.css'


// Work screencaps

import beatriceFull1 from '../img/beatrice-full-1.jpg'
import beatriceFull2 from '../img/beatrice-full-2.jpg'
import braccoFull from '../img/bracco-full.jpg';
import buildersshowFull1 from '../img/buildersshow-full1.jpg'
import buildersshowFull3 from '../img/buildersshow-full3.jpg'
import chanelFull1 from '../img/chanel-full-1.jpg'
import chanelFull2 from '../img/chanel-full-2.jpg'
import cityhospitalFull from '../img/cityhospital-full.jpg'
import fiservicesFull1 from '../img/fiservices-full-1.jpg'
import fiservicesFull2 from '../img/fiservices-full-2.jpg'
import freshgrocerFull from '../img/freshgrocer-full.jpg'
import grandstandFull from '../img/grandstand-full.jpg'
import itslearningCpFull from '../img/itslearning-cp-full.jpg'
import itslearningEmailFull from '../img/itslearning-email-full.jpg'
import silversparkFull1 from '../img/silverspark-full-1.jpg'
import silversparkFull2 from '../img/silverspark-full-2.jpg'
import teampageFull from '../img/teampage-full.jpg'
import upserveFull from '../img/upserve-full.jpg'
import viableFull from '../img/viable-full.jpg'



// array of objects containing the content for the Work items

const workItemsArray = [
  {
    title: "NAHB Int'l Builders' Show",
    titleFull: "NAHB International Builders' Show 2017",
    src: require("../img/buildersshow.jpg"),
    description: "site relaunch",
    sortClasses: "sort-bootstrap",
    modalContent: <ModalContent1 />,
    id: 1
  },

    {
    title: "Grandstand",
    titleFull: "Grandstand",
    src: require("../img/grandstand.jpg"),
    description: "landing page",
    sortClasses: "sort-foundation sort-vue",
    modalContent: <ModalContent2 />,
    id: 2
  },

  {
    title: "Viable",
    titleFull: "Viable",
    src: require("../img/viable.jpg"),
    description: "landing page",
    sortClasses: "sort-foundation sort-vue",
    modalContent: <ModalContent3 />,
    id: 3
  },

  {
    title: "Bracco",
    titleFull: "Bracco: Learn the Truth",
    src: require("../img/bracco.jpg"),
    description: "microsite",
    sortClasses: "sort-bs",
    modalContent: <ModalContent4 />,
    id: 4
  },

  {
    title: "Fiservices",
    titleFull: "Fiservices",
    src: require("../img/fiservices.jpg"),
    description: "mock financial services website",
    sortClasses: "sort-wp",
    modalContent: <ModalContent5 />,
    id: 5
  },

  {
    title: "Silver Spark Jewelry",
    titleFull: "Silver Spark Jewelry",
    src: require("../img/silverspark.jpg"),
    description: "mock business website",
    sortClasses: "sort-wp",
    modalContent: <ModalContent6 />,
    id: 6
  },

  {
    title: "Fresh Grocer",
    titleFull: "Fresh Grocer",
    src: require("../img/freshgrocer.jpg"),
    description: "mock website redesign",
    sortClasses: "sort-react",
    modalContent: <ModalContent7 />,
    id: 7
  },

  {
    title: "Upserve",
    titleFull: "Upserve",
    src: require("../img/upserve.jpg"),
    description: "landing page templates",
    sortClasses: "sort-bs",
    modalContent: <ModalContent8 />,
    id: 8
  },

  {
    title: "itslearning, inc.",
    titleFull: "itslearning, inc.",
    src: require("../img/itslearning-cp.jpg"),
    description: "channel partner page template",
    sortClasses: "sort-bs",
    modalContent: <ModalContent9 />,
    id: 9
  },

  {
    title: "City Hospital",
    titleFull: "City Hospital",
    src: require("../img/cityhospital.jpg"),
    description: "homepage prototype",
    sortClasses: "sort-bs",
    modalContent: <ModalContent10 />,
    id: 10
  },

  {
    title: "Modern Signal",
    titleFull: "Modern Signal",
    src: require("../img/teampage.jpg"),
    description: "client employee page",
    sortClasses: "",
    modalContent: <ModalContent11 />,
    id: 11
  },

  {
    title: "itslearning, inc.",
    titleFull: "itslearning, inc.",
    src: require("../img/itslearning-email.jpg"),
    description: "email templates",
    sortClasses: "sort-emails",
    modalContent: <ModalContent12 />,
    id: 12
  },

  {
    title: "Chanel",
    titleFull: "Chanel",
    src: require("../img/chanel.jpg"),
    description: "mock website redesign",
    sortClasses: "sort-drupal",
    modalContent: <ModalContent13 />,
    id: 13
  },

  {
    title: "Beatrice's Salon",
    titleFull: "Beatrice's Spa and Beauty Salon",
    src: require("../img/beatrice.jpg"),
    description: "mock business website",
    sortClasses: "sort-drupal",
    modalContent: <ModalContent14 />,
    id: 14
  },
]



// SFCs containing the content for each Work item modal

function ModalContent1() {
  return (
    <div>
      <img src={buildersshowFull1} alt="NAHB International Builders' Show 2017 screen cap - full 1" />
      <br />
      <img src={buildersshowFull3} alt="NAHB International Builders' Show 2017 screen cap - full 2" />

      <p>Website created for the NAHB International Builders' Show<sup>&reg;</sup> while on contract at <a href="http://www.modernsignal.com/" target="_blank">Modern Signal</a>. Built with Bootstrap. jQuery used for search bar dropdown. <a href="https://jquerymobile.com/" target="_blank">jQuery Mobile</a> used for swipe support on image carousels. <a href="http://www.smartmenus.org/" target="_blank">SmartMenus plugin</a> used for primary navigation. <a href="https://select2.github.io/" target="_blank">Select2 plugin</a> used for customized select boxes. <a href="http://kenwheeler.github.io/slick/" target="_blank">Slick plugin</a> used for image carousels. Comps provided by client. CSS created with Sass and compiled with <a href="http://koala-app.com/" target="_blank">Koala</a>.</p>

      <a className="viewproject" href="http://www.buildersshow.com/" target="_blank"><i className="fa fa-external-link"></i>view project</a>

      <br /><br /><br />

      <a className="viewproject" href="https://github.com/lee-anne-clarke/codes/blob/master/javascript/ibs_main.js" target="_blank"><i className="fa fa-file-code-o"></i>
  main JS file</a>
    </div>
  );
}

function ModalContent2() {
  return (
    <div>
      <img src={grandstandFull} alt="Grandstand landing page screen cap - full" />
          
      <p>Landing page created for the Grandstand platform by <a href="http://isl.co/">ISL</a>. Built with Vue.js, Foundation, flexbox, Sass, and jQuery. CSS3 transitions, transforms, and keyframes used for animating the SVG elements.

        Comps provided by ISL design team. Compiled with <a href="http://gulpjs.com/" target="_blank">Gulp</a> and <a href="http://browserify.org/" target="_blank">Browserify</a>. 
      </p> 
      
      <a className="viewproject" href="https://getgrandstand.com/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
    </div>
  );
}

function ModalContent3() {
  return (
    <div>
      <img src={viableFull} alt="Viable landing page screen cap - full" />

      <p>Landing page created for the <a href="https://itunes.apple.com/us/app/viable-af/id1177117697?mt=8" target="_blank">Viable app</a> by <a href="http://isl.co/">ISL</a>. Built with Vue.js, Foundation, flexbox, Sass, and jQuery.

        Comps provided by ISL design team. Compiled with <a href="http://gulpjs.com/" target="_blank">Gulp</a> and <a href="http://browserify.org/" target="_blank">Browserify</a>. 
      </p> 

      <a className="viewproject" href="https://viable.af/" target="_blank"><i className="fa fa-external-link"></i>view project</a>                                                   
    </div>
  );
}


function ModalContent4() {
  return (
    <div>
      <img src={braccoFull} alt="Bracco Learn the Truth microsite screen cap - full" />
          
      <p>One-page microsite created for <a href="http://www.bracco.com/" target="_blank">Bracco</a> while on assignment at <a href="http://www.baileygp.com/" target="_blank">Bailey Brand Consulting</a>. Built with Bootstrap from Photoshop comps provided by client. jQuery used for Case Studies and bar graph carousel. CSS created with Sass and compiled with <a href="http://koala-app.com/" target="_blank">Koala</a>.</p>
      
      <a className="viewproject" href="/work/bracco/" target="_blank">
        <i className="fa fa-external-link"></i>view project</a>
      <br /><br /><br />

      <a className="viewproject" href="https://github.com/lee-anne-clarke/bracco" target="_blank">
        <i className="fa fa-file-code-o"></i>view the repo
      </a>
    </div>
  );
}


function ModalContent5() {
  return (
    <div>
      <img src={fiservicesFull1} alt="Fiservices screen cap - homepage" />
      <br /><br />
      <img src={fiservicesFull2} alt="Fiservices screen cap - inside page" />

      <p>A mock financial services website created for my degree program at Sessions College. Built in WordPress 4 with base theme Vantage. <a href="http://siteorigin.com/page-builder/" target="_blank">Page Builder</a> used to create and modify pages. <a href="http://wordpress.org/plugins/ml-slider/" target="_blank">Meta Slider</a> used for page headers. <a href="http://wordpress.org/plugins/custom-wp-login-widget/" target="_blank">Custom WP Login Widget</a> used for login box on homepage. <a href="http://wordpress.org/plugins/basic-google-maps-placemarks/" target="_blank">Basic Google Maps Placemarks</a> used to create map on "Find a Branch" page. <a href="http://fortawesome.github.io/Font-Awesome/" target="_blank">Font Awesome icons</a> used for navigation.</p>

      <a className="viewproject" href="/work/fiservices/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
    </div>
  );
}


function ModalContent6() {
  return (
    <div>
      <img src={silversparkFull1} alt="Silver Spark Jewelry screen cap - homepage" />
      <br /><br />
      <img src={silversparkFull2} alt="Silver Spark Jewelry screen cap - inside page" />

      <p>A mock business site created for my degree program at Sessions College. Built in WordPress 4 with base theme Butterbelly. CSS3 border-radius used for circular images on frontpage. <a href="https://wordpress.org/plugins/soliloquy-lite/" target="_blank">Soliloquy Lite</a> used to create responsive image sliders for the inner pages. <a href="http://wordpress.org/plugins/basic-google-maps-placemarks/" target="_blank">Basic Google Maps Placemarks</a> used to create map on "Contact Us" page.</p>

      <a className="viewproject" href="/work/silverspark/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
    </div>
  );
}


function ModalContent7() {
  return (
    <div>
        <img src={freshgrocerFull} alt="Fresh Grocer screen cap - full" />
        
        <p>
          Mock website redesign. Built with React and compiled for production using npm. Packages used include <a href="https://github.com/RRutsche/react-parallax" target="blank">react-parallax</a> for parallax images, <a href="https://github.com/fisshy/react-scroll" target="blank">react-scroll</a> for smooth scrolling anchor links, <a href="https://github.com/jlmakes/scrollreveal" target="blank">ScrollReveal</a> for fade-in on scroll effect, and <a href="https://github.com/negomi/react-burger-menu" target="blank">react-burger-menu</a> for mobile navigation. CSS created with Sass and compiled with <a href="http://koala-app.com/" target="_blank">Koala</a>. Free stock photos from <a href="https://unsplash.com/" target="_blank">Unsplash</a>.
        </p>
        
      <a className="viewproject" href="/work/freshgrocer/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
      <br /><br /><br />
      <a className="viewproject" href="https://github.com/lee-anne-clarke/freshgrocer" target="_blank">
        <i className="fa fa-file-code-o"></i>view the repo
      </a>
    </div>
  );
}


function ModalContent8() {
  return (
    <div>
        <img src={upserveFull} alt="Upserve marketing landing page template screen cap - full" />
        
        <p>Marketing page templates created for <a href="https://www.upserve.com/" target="_blank">Upserve</a> (formerly known as Swipely). Built with Upserve's own grid system for use within Marketo. Comps provided by client.</p>
        
      <a className="viewproject" href="/work/upserve/upserve1.html" target="_blank"><i className="fa fa-tint"></i>template 1</a>
      <br /><br />
      <a className="viewproject" href="/work/upserve/upserve2.html" target="_blank"><i className="fa fa-tint"></i>template 2</a>
      <br /><br />
      <a className="viewproject" href="/work/upserve/upserve3.html" target="_blank"><i className="fa fa-tint"></i>template 3</a>
    </div>
  );
}


function ModalContent9() {
  return (
    <div>
      <img src={itslearningCpFull} alt="itslearning channel partner page screen cap - full" />

      <p>Global contact page template created for <a href="http://www.itslearning.com/" target="_blank">itslearning</a>. Built with Bootstrap from Photoshop comps provided by client for use within <a href="http://www.marketo.com/" target="_blank">Marketo</a>. CSS3 multiple background images and background-size used for header, and @font-face used for all fonts. jQuery .toggleClass and .slideToggle used for dropdown list. </p>

      <a className="viewproject" href="http://info.itslearning.net/US-Partner-Landing-Page.html" target="_blank"><i className="fa fa-external-link"></i>view project</a>
    </div>
  );
}


function ModalContent10() {
  return (
    <div>
      <img src={cityhospitalFull} alt="City Hospital screen cap - full" />

      <p>Based on a homepage prototype created for a government SharePoint 2010 website while on contract with <a href="http://www.bixal.com/" target="_blank">Bixal</a>. <a href="http://cameronspear.com/blog/bootstrap-dropdown-on-hover-plugin/" target="_blank">Dropdown on hover plugin</a> used for primary navigation links. CSS3  @font-face used for all fonts. <a href="http://kenwheeler.github.io/slick/" target="_blank">Slick</a> used for video carousel. &nbsp;jQuery used for Calendar and "Chat With Us" box.</p>

      <a className="viewproject" href="/work/cityhospital/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
      <br /><br /><br />

      <a className="viewproject" href="https://github.com/lee-anne-clarke/cityhospital" target="_blank">
        <i className="fa fa-file-code-o"></i>view the repo
      </a>
    </div>
  );
}


function ModalContent11() {
  return (
    <div>
      <img src={teampageFull} alt="Modern Signal client employee page screen cap - full" />
          
      <p>Company employee page prototype created for a client while on contract at <a href="http://www.modernsignal.com/" target="_blank">Modern Signal</a>. Built with Bootstrap. Responsive lightbox created with jQuery. <a href="https://mixitup.kunkalabs.com/" target="_blank">MixItUp</a> jQuery plugin used for sorting. Comps provided by client. CSS created with Sass and compiled with <a href="http://koala-app.com/" target="_blank">Koala</a>.</p>
      
      <a className="viewproject" href="/work/teampage/" target="_blank">
        <i className="fa fa-external-link"></i>view project
      </a>
      <br /><br /><br />

      <a className="viewproject" href="https://github.com/lee-anne-clarke/teampage" target="_blank">
        <i className="fa fa-file-code-o"></i>view the repo
      </a>
    </div>
  );
}


function ModalContent12() {
  return (
    <div>
      <img src={itslearningEmailFull} alt="itslearning email template screen cap - full" />

      <p>Responsive marketing email templates created for <a href="http://www.itslearning.com/" target="_blank">itslearning</a> for use within <a href="http://www.marketo.com/" target="_blank">Marketo</a>. Built with HTML and CSS from Photoshop comps provided by client.</p>

      <a className="viewproject" href="/work/itslearning/emailtemplates/emailtemp1.html" target="_blank"><i className="fa fa-tint"></i>template 1</a>
      <br /><br />
      <a className="viewproject" href="/work/itslearning/emailtemplates/emailtemp2.html" target="_blank"><i className="fa fa-tint"></i>template 2</a>
    </div>
  );
}


function ModalContent13() {
  return (
    <div>
      <img src={chanelFull1} alt="Chanel screen cap - homepage" />
      <img src={chanelFull2} alt="Chanel screen cap - inside page" />

      <p>A mock site redesign created for my degree program at Sessions College. Built in Drupal 7 with base theme SimpleCorp. <a href="https://drupal.org/project/flexslider" target="_blank">FlexSlider</a> used for image slider on the homepage. <a href="http://www.no-margin-for-errors.com/projects/prettyphoto-jquery-lightbox-clone/" target="_blank">prettyPhoto lightbox</a> used for image gallery at the bottom of the homepage. <a href="http://www.juicebox.net/" target="_blank">Juicebox</a> responsive image sliders used on product pages.</p>

      <a className="viewproject" href="/work/chanel/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
    </div>
  );
}


function ModalContent14() {
  return (
    <div>
      <img src={beatriceFull1} alt="Beatrice Spa and Beauty Salon screen cap - homepage" />
      <br /><br />
      <img src={beatriceFull2} alt="Beatrice Spa and Beauty Salon screen cap - inside page" />

      <p>A mock business website created for my degree program at Sessions College. Built in Drupal 7 with base theme Responsive Green. <a href="https://drupal.org/project/flexslider" target="_blank">FlexSlider</a> used for image slider on homepage. CSS3 @font-face used for headings, and transition used for text and image hyperlinks.</p>

      <a className="viewproject" href="/work/beatrice/" target="_blank"><i className="fa fa-external-link"></i>view project</a>
    </div>
  );
}



// main component

class WorkItemsWrap extends Component {

  componentDidMount() {
    //Add "no-overflow" class to body element when modal is open; remove when closed
    let openModal = document.querySelectorAll('.modal-open');
    let closeModal = document.querySelectorAll('.modal-close');

    for (let i of openModal) {
      i.addEventListener('click', () => {
        document.body.classList.add('no-overflow');
      });
    }

    for (let i of closeModal) {
      i.addEventListener('click', () => {
        document.body.classList.remove('no-overflow');
      });
    }
  }


  render() {

    //Map method to dynamically generate Work items
    let workItems = workItemsArray.map((item, i) => {
      i += 1;
    
      return (
        <div className={`work__item sort ${item.sortClasses}`} key={item.id}>
    
          <input className="modal-checkbox" type="checkbox" name={`workItem${i}`} id={`workItem${i}`} />
          
          <label className="modal-label modal-open" htmlFor={`workItem${i}`}>
            <figure className="work__item__fig">
            <img src={item.src} alt={item.title} />
      
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
              
              {item.modalContent}

              <label className="modal-label modal-close modal-close--bottom" htmlFor={`workItem${i}`}>
                <i className="fa fa-close"></i>CLOSE
              </label>
            </div>
          </div>
    
        </div> /*end .work__item*/
      );
    });


    return <div>{workItems}</div>
  }
}


export default WorkItemsWrap



