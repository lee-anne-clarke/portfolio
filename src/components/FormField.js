import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function FormField(props) {
	return (
		<div className="form__group">
			{props.isTextarea ? ( 
				<textarea 
					className="form__field form__field--ta" 
					name={props.fieldName}
					id={props.fieldName}
					rows="7" 
					minLength={props.fieldMinLength}
					required={props.fieldIsRequired}>
				</textarea>

			   ) : (
			   <input className="form__field" 
			    	   type={props.fieldType} 
			    	   name={props.fieldName} 
			    	   id={props.fieldName} 
			    	   minLength={props.fieldMinLength}
			    	   required={props.fieldIsRequired}
			   	/>
			  )}

		    <label className="form__label" htmlFor={props.fieldName}>
		        <FontAwesomeIcon className="fa-fw form__label-icon" icon={props.iconName} />
		        <span className="form__label-text">{props.fieldLabel}</span>
		    </label>
		</div>
	);
}