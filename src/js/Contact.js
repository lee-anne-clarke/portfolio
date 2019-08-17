import React, { Component } from 'react';
import axios from 'axios';
import qs from 'qs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faUser, 
	faEnvelope,
	faGlobe,
	faPencilAlt,
	faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import FormItem from './FormItem'


class Contact extends Component {
  componentDidMount() {
    const formFields = document.querySelectorAll(".form__field");
    const formInvalidMsg = document.getElementById('formInvalidMsg');
		
	for (let field of formFields) {
		
		// ** Hide invalid message on form field focus ** 
		field.addEventListener('focus', () => {
			formInvalidMsg.style.display = 'none';
		});	

		// ** Add a special class to form field if it's filled in ** 
		field.addEventListener('blur', () => {

			if (field.value) {
				field.classList.add('form__field--filled');
			} else {
				field.classList.remove('form__field--filled');
			}
		});		
	}
  }

  constructor(props) {
    super(props);
    this.state = {
      contactName: '',
      contactEmail: '',
      contactWebsite: '',
      contactMsg: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
  	const name = event.target.name;
  	const value = event.target.value;

    this.setState({
    	[name]: value
    });
  }

  handleSubmit(event) {
  	event.preventDefault();

		const contactForm = document.getElementById('contactForm');
		const formValidMsg = document.getElementById('formValidMsg');
		const formInvalidMsg = document.getElementById('formInvalidMsg');
		const Name = this.state.contactName;
		const Email = this.state.contactEmail;
		const Website = this.state.contactWebsite;
		const Message = this.state.contactMsg;

		let data = { 
		  contactName: Name,
		  contactEmail: Email,
		  contactWebsite: Website,
		  contactMsg: Message
		};

		// If the required form fields are filled in, process & submit the form
		if (Name && Email && Message) {
			axios({
					method: 'post',
					url: 'mail.php', 
		  			data: qs.stringify(data),
				})
				// Upon successful submission, hide the form & display the form valid msg
				.then((response) => {
					contactForm.style.display = 'none';
					formValidMsg.style.display = 'block';
				})
				.catch((error) => {
					console.log(error);
					formInvalidMsg.style.display = 'block';
			});

		// If not, display the form invalid message
		} else {
			formInvalidMsg.style.display = 'block';
		}
  }

  render() {
    return (
		<section className="section contact">
			<h2>Contact</h2>

			<form 
				className="form" 
				action="mail.php" 
				method="post" 
				id="contactForm" 
				onSubmit={this.handleSubmit}>

				<p className="u-text-center">
					You can email me at lac @ lee-anne-clarke.com, or use the form below.
				</p>

				<div className="form-inner">
					<FormItem 
						itemName="contactName"
						inputValue={this.state.contactName}
						changeEvent={this.handleInputChange}
						iconName={faUser}
						itemLabel="Name *"
					/>
					
					<FormItem 
						itemName="contactEmail"
						inputValue={this.state.contactEmail}
						changeEvent={this.handleInputChange}
						iconName={faEnvelope}
						itemLabel="Email *"
					/>

					<FormItem 
						itemName="contactWebsite"
						inputValue={this.state.contactWebsite}
						changeEvent={this.handleInputChange}
						iconName={faGlobe}
						itemLabel="Website"
					/>

					<div className="form__group">
						<textarea 
							className="form__field form__field--ta" 
							rows="7" 
							name="contactMsg" 
							id="contactMsg"
							value={this.state.contactMsg}
							onChange={this.handleInputChange}>
						</textarea>

						<label className="form__label" htmlFor="contactMsg">
							<FontAwesomeIcon className="fa-fw form__label-icon" icon={faPencilAlt} />
							<span className="form__label-text">Message *</span>
						</label>
					</div>


					<div className="form__msg" id="formInvalidMsg">
						<p className="form__msg-invalid">Please fill in all required fields.</p>
					</div>

					<button className="btn-submit" type="submit">
						Submit
						<FontAwesomeIcon className="btn-submit__icon" icon={faPaperPlane} />
					</button>
				</div>
			</form>

	      <div className="form__msg form__msg--valid" id="formValidMsg">
			<p>Thank you!</p>
	      </div>
		</section>
    );
  }
}


export default Contact;