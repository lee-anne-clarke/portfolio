import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function FormItem(props) {
	return (
		<div className="form__group">
			<input 
		    className="form__field" 
		    type={props.itemType} 
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