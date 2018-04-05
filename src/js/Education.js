import React from 'react'


function Education() {
  return (  
    <section className="edu">
      <h3 className="h3-edu">Education</h3>

      <ul className="fa-ul edu__list">

        <li className="edu__li">
          <i className="fa fa-li fa-flag edu__icon-flag"></i>
          <span>
          	<span className="edu__degree">Advanced Certificate 
          		<span className="edu__br"><br /></span>&mdash; 
          		Web Design and Development
          	</span> {/* END .edu__degree */}
          	<br />

            <i className="fa fa-university edu__icon-uni"></i> Sessions College for Professional Design
          </span>
        </li>

        <li className="edu__li">
          <i className="fa fa-li fa-flag edu__icon-flag"></i>
          <span>
            <span className="edu__degree">
            	Bachelor of Arts 
            	<span className="edu__br"><br /></span>&mdash; 
            	Asian Studies
            </span> {/* END .edu__degree */}
            <br />
            
            <i className="fa fa-university edu__icon-uni"></i> The George Washington University
          </span>
        </li>
      </ul>


      <div className="divider">
        <i className="fa fa-anchor"></i> 
      </div>
    </section>
  );
}


export default Education

