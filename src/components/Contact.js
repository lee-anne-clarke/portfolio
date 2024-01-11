import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faUser, 
	faEnvelope,
	faGlobe,
	faPencilAlt,
	faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import FormItem from './FormItem'


export default function Contact() {

   const [contactName, setContactName] = useState('');
   const [contactEmail, setContactEmail] = useState('');
   const [contactWebsite, setContactWebsite] = useState('');
   const [contactMsg, setContactMsg] = useState('');
   const [formSubmitted, setFormSubmitted] = useState(false);
   const [formInvalid, setFormInvalid] = useState(false);
   const [formHasError, setFormHasError] = useState(false);
   const [submitBtnText, setSubmitBtnText] = useState('Send')


  useEffect(() => {
    const formFields = document.querySelectorAll(".form__field");
    const formInvalidMsg = document.getElementById('formInvalidMsg');
		
		for (let field of formFields) {
		
			// Hide invalid form message on form field focus

			field.addEventListener('focus', () => {
				setFormInvalid(false);
				setFormHasError(false);
			});	

			// Add a special class to form field if it's filled in

			field.addEventListener('blur', () => {
				if (field.value) {
					field.classList.add('form__field--filled');
				} else {
					field.classList.remove('form__field--filled');
				}
			});		
		}
  }, []);


  const handleSubmit = async (event) => {
  	event.preventDefault();
  	setSubmitBtnText('Sending...');

		if (contactName.length > 1 && contactEmail.length > 4 && contactMsg.length > 10) {
	  	const response = await fetch('https://formspree.io/f/mjvqzadp', {
	      method: 'POST',
	      headers: {
	        'Content-Type': 'application/json',
	      },
	      body: JSON.stringify({ contactName, contactEmail, contactWebsite, contactMsg }),
	    });

	    if (response.ok) {
	      setFormSubmitted(true);
	    } else {
	    	setFormHasError(true);
	      console.log(response);
	    }

	  } else {
	  	setFormInvalid(true);
	  	setSubmitBtnText('Send');
	  }
  }



  if (formSubmitted) {
  	return(
  		<div className="form__msg form__msg--valid" id="formValidMsg">
				<p>Thank you!</p>
			</div>
  	);

  } else {
	  return (
			<section className="section contact">
				<h2>Contact</h2>

				<form 
					className="form" 
					action="mail.php" 
					method="post" 
					id="contactForm" 
					onSubmit={handleSubmit}>

					<p className="u-text-center">
						You can email me at lac @ lee-anne-clarke.com, or use the form below.
					</p>

					<div className="form-inner">
						<FormItem 
							itemLabel="Name *"
							itemType="text"
							inputValue={contactName}
							changeEvent={(e) => setContactName(e.target.value)}
							iconName={faUser}
						/>
						
						<FormItem 
							itemLabel="Email *"
							itemType="email"
							inputValue={contactEmail}
							changeEvent={(e) => setContactEmail(e.target.value)}
							iconName={faEnvelope}
						/>

						<FormItem 
							itemLabel="Website"
							itemType="text"
							inputValue={contactWebsite}
							changeEvent={(e) => setContactWebsite(e.target.value)}
							iconName={faGlobe}
						/>

						<div className="form__group">
							<textarea 
								className="form__field form__field--ta" 
								rows="7" 
								id="contactMsg"
								value={contactMsg}
								onChange={(e) => setContactMsg(e.target.value)}>
							</textarea>

							<label className="form__label" htmlFor="contactMsg">
								<FontAwesomeIcon className="fa-fw form__label-icon" icon={faPencilAlt} />
								<span className="form__label-text">Message *</span>
							</label>
						</div>

						{formInvalid ? (
							<div className="form__msg" id="formInvalidMsg">
								<p className="form__msg-invalid">Please fill in all required fields.</p>
							</div>
						) : (``)}

						{formHasError ? (
							<div className="form__msg" id="formInvalidMsg">
								<p className="form__msg-invalid">Sorry, something went wrong. Please try again.</p>
							</div>
						) : (``)}

						<button className="btn-submit" type="submit">
							{submitBtnText}
							<FontAwesomeIcon className="btn-submit__icon" icon={faPaperPlane} />
						</button>
					</div>
					
				</form>

			</section>
	  );
  }
  

}


