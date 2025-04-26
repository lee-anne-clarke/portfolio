import React, { useState, useEffect } from 'react';
import { useActionState } from 'react';
import { useFormStatus } from "react-dom";
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
	
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [hasInvalidFields, setHasInvalidFields] = useState(false);
	const [isMsgTooShort, setIsMsgTooShort] = useState(false);
	const [hasFormError, setHasFormError] = useState(false);
	const { pending } = useFormStatus();


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


  const handleSubmit = async (formData) => {
		let contactName = formData.get("contactName");
		let contactEmail = formData.get("contactEmail");
		let contactWebsite = formData.get("contactWebsite");
		let contactMsg = formData.get("contactMsg");

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
		    }

	  	} else {
	  		setIsMsgTooShort(true);
	  	}

	  } else {
	  	setHasInvalidFields(true);
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
							fieldName="contactName"
							fieldLabel="Name *"
							fieldType="text"
							fieldMinLength="2"
							iconName={faUser}
						/>
						
						<FormField 
							fieldName="contactEmail"
							fieldLabel="Email *"
							fieldType="email"
							fieldMinLength="5"
							iconName={faEnvelope}
						/>

						<FormField 
							fieldName="contactWebsite"
							fieldLabel="Website"
							fieldType="text"
							iconName={faGlobe}
						/>

						<div className="form__group">
							<textarea 
								className="form__field form__field--ta" 
								name="contactMsg"
								id="message"
								rows="7" 
								minLength="10">
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

						<button className="btn btn--submit" type="submit" disabled={pending}>
							{pending ? "Sending..." : "Submit"}
							<FontAwesomeIcon className="btn--submit__icon" icon={faPaperPlane} />
						</button>
					</div>
					
				</form>

			</section>
	  );
  }
  

}


