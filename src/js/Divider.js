import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';


function Divider() {
	return (  
	  <div className="divider">
	    <FontAwesomeIcon icon={faAnchor} />
	  </div>
	);
}

export default Divider;