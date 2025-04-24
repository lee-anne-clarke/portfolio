export default function FormInvalidMsg({msg}) {
	return (
		<div className="form__msg">
			<p className="form__msg-invalid">
				{msg}
			</p>
		</div>
	);
}