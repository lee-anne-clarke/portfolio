import React from 'react'


function Education() {
  return (  
    <section className="edu">
      <h3 className="edu__title">Education</h3>

      <ul className="fa-ul">
        <li>
          <i className="fa fa-li fa-flag edu__icon"></i>
          <span className="edu__info">
          <span className="edu__degree">Advanced Certificate <span className="edu__br"><br /></span>&mdash; Web Design and Development</span><br />
            <i className="fa fa-university"></i> Sessions College for Professional Design
          </span>
        </li>

        <li>
          <i className="fa fa-li fa-flag edu__icon"></i>
          <span>
            <span className="edu__degree">Bachelor of Arts <span className="edu__br"><br /></span>&mdash; Asian Studies</span><br />
            <i className="fa fa-university"></i> The George Washington University
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

