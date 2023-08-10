import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnchor } from '@fortawesome/free-solid-svg-icons';


export default function Divider() {
	return (  
	  <div className="divider">
	    <FontAwesomeIcon icon={faAnchor} />
	  </div>
	);
}