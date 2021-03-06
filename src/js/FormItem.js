import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function FormItem(props) {
	return (
		<div className="form__group">
			<input 
		    className="form__field" 
		    type="text" 
		    name={props.itemName} 
		    id={props.itemName} 
		    value={props.inputValue}
				onChange={props.changeEvent} />

		    <label className="form__label" htmlFor={props.itemName}>
	        <FontAwesomeIcon className="fa-fw form__label-icon" icon={props.iconName} />
	        <span className="form__label-text">{props.itemLabel}</span>
		    </label>
		</div>
	);
}

export default FormItem;