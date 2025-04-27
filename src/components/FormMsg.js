export default function FormMsg({isValidMsg, msg}) {
	return (
		<p className={isValidMsg ? 'form__msg form__msg--valid' : 'form__msg form__msg--invalid'}>
			{msg}
		</p>
	);
}


