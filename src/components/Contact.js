import React, { useState, useEffect } from 'react';
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
import FormMsg from './FormMsg'


// useFormStatus() will only return status information for a parent <form> component. Therefore, the hook must be called from a component that is rendered inside a <form>.
function SubmitBtn() {
	const { pending } = useFormStatus();

	return(
		<button className="btn btn--submit" type="submit" disabled={pending}>
			{pending ? "Sending..." : "Submit"}
			<FontAwesomeIcon className="btn--submit__icon" icon={faPaperPlane} />
		</button>
	);
}


export default function Contact() {
	
	const [formSubmitted, setFormSubmitted] = useState(false);
	const [formHasError, setFormHasError] = useState(false);

  useEffect(() => {
    const formFields = document.querySelectorAll(".form__field");
		
		for (let field of formFields) {
		
			// Hide error message on form field focus
			field.addEventListener('focus', () => {
				setFormHasError(false);
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
    }
  }

  if (formSubmitted) {
  	return(
  		<FormMsg isValidMsg={true} msg="Thank you!" />
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
							fieldIsRequired={true}
						/>
						
						<FormField 
							fieldName="contactEmail"
							fieldLabel="Email *"
							fieldType="email"
							fieldMinLength="5"
							iconName={faEnvelope}
							fieldIsRequired={true}
						/>

						<FormField 
							fieldName="contactWebsite"
							fieldLabel="Website"
							fieldType="text"
							iconName={faGlobe}
							fieldIsRequired={false}
						/>

						<FormField 
							isTextarea={true}
							fieldName="contactMsg"
							fieldLabel="Message *"
							fieldMinLength="10"
							iconName={faPencilAlt}
							fieldIsRequired={true}
						/>

						{formHasError && (
							<FormMsg isValidMsg={false} msg="Sorry, something went wrong. Please try again." />
						)}

						<SubmitBtn />

					</div>
				</form>
			</section>
	  );
  }
  

}


