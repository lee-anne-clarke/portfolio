import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faUniversity } from '@fortawesome/free-solid-svg-icons';
import Divider from './Divider';


export default function Education() {
  return (  
    <section className="section edu">
      <h3 className="h3-edu">Education</h3>

      <div className="edu__items">

        <div className="edu__item">
          <FontAwesomeIcon className="edu__icon-flag" icon={faFlag} />
          <div className="edu__text">
          	<p className="edu__degree">Advanced Certificate 
          		<span className="edu__br"><br /></span> &mdash; 
          		Web Design and Development
          	</p>

          	<p className="edu__uni">
            	<FontAwesomeIcon className="edu__icon-uni" icon={faUniversity} /> Sessions College for Professional Design
            </p>
          </div>
        </div>


        <div className="edu__item">
          <FontAwesomeIcon className="edu__icon-flag" icon={faFlag} />
          <div className="edu__text">
            <p className="edu__degree">
            	Bachelor of Arts 
            	<span className="edu__br"><br /></span> &mdash; 
            	Asian Studies
            </p>
            
          	<p className="edu__uni">
            	<FontAwesomeIcon className="edu__icon-uni" icon={faUniversity} /> The George Washington University
            </p>
          </div>
        </div>
      </div>

      <Divider />
    </section>
  );
}
