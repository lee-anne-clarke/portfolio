import React, { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faUser, 
	faEnvelope,
	faGlobe,
	faPencilAlt,
	faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import FormField from './FormField'
import FormInvalidMsg from './FormInvalidMsg'


export default function Contact() {

   const [contactName, setContactName] = useState('');
   const [contactEmail, setContactEmail] = useState('');
   const [contactWebsite, setContactWebsite] = useState('');
   const [contactMsg, setContactMsg] = useState('');
   const [formSubmitted, setFormSubmitted] = useState(false);
   const [hasInvalidFields, setHasInvalidFields] = useState(false);
   const [isMsgTooShort, setIsMsgTooShort] = useState(false);
   const [hasFormError, setHasFormError] = useState(false);
   const [submitBtnText, setSubmitBtnText] = useState('Send')


  useEffect(() => {
    const formFields = document.querySelectorAll(".form__field");
		
		for (let field of formFields) {
		
			// Hide messages on form field focus
			field.addEventListener('focus', () => {
				setHasInvalidFields(false);
				setIsMsgTooShort(false);
				setHasFormError(false);
			});	

			// Add a special css class to form field if it's filled in
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
  	setSubmitBtnText('Sending...');

		if (contactName.length >= 2 && contactEmail.length >= 5) {
			if (contactMsg.length >= 10) {
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
		    	setHasFormError(true);
		    	setSubmitBtnText('Send');
		    }

	  	} else {
	  		setIsMsgTooShort(true);
	  		setSubmitBtnText('Send');
	  	}

	  } else {
	  	setHasInvalidFields(true);
	  	setSubmitBtnText('Send');
	  }
  }



  if (formSubmitted) {
  	return(
  		<div className="form__msg form__msg--valid">
				<p>Thank you!</p>
			</div>
  	);

  } else {
	  return (
			<section className="section contact">
				<h2>Contact</h2>

				<form 
					className="form" 
					id="contactForm" 
					action={handleSubmit}>

					<p className="u-text-center">
						You can email me at lac @ lee-anne-clarke.com, or use the form below.
					</p>

					<div className="form-inner">
						<FormField 
							fieldName="name"
							fieldLabel="Name *"
							fieldType="text"
							fieldMinLength="2"
							inputValue={contactName}
							iconName={faUser}
							changeEvent={(e) => setContactName(e.target.value)}
						/>
						
						<FormField 
							fieldName="email"
							fieldLabel="Email *"
							fieldType="email"
							fieldMinLength="5"
							inputValue={contactEmail}
							iconName={faEnvelope}
							changeEvent={(e) => setContactEmail(e.target.value)}
						/>

						<FormField 
							fieldName="website"
							fieldLabel="Website"
							fieldType="text"
							inputValue={contactWebsite}
							iconName={faGlobe}
							changeEvent={(e) => setContactWebsite(e.target.value)}
						/>

						<div className="form__group">
							<textarea 
								className="form__field form__field--ta" 
								name="message"
								id="message"
								rows="7" 
								minLength="10"
								value={contactMsg}
								onChange={(e) => setContactMsg(e.target.value)}>
							</textarea>

							<label className="form__label" htmlFor="message">
								<FontAwesomeIcon className="fa-fw form__label-icon" icon={faPencilAlt} />
								<span className="form__label-text">Message *</span>
							</label>
						</div>

						{hasInvalidFields && (
							<FormInvalidMsg msg="Please complete all required fields." />
						)}

						{isMsgTooShort && (
							<FormInvalidMsg msg="Message must be at least 10 characters long." />
						)}

						{hasFormError && (
							<FormInvalidMsg msg="Sorry, something went wrong. Please try again." />
						)}

						<button className="btn btn--submit" type="submit">
							{submitBtnText}
							<FontAwesomeIcon className="btn--submit__icon" icon={faPaperPlane} />
						</button>
					</div>
					
				</form>

			</section>
	  );
  }
  

}


