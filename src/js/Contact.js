import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
	faUser, 
	faEnvelope,
	faGlobe,
	faPencilAlt,
	faPaperPlane
} from '@fortawesome/free-solid-svg-icons';


class Contact extends React.Component {
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
		let contactForm = document.getElementById('contactForm');
		const Name = this.state.contactName;
		const Email = this.state.contactEmail;
		const Message = this.state.contactMsg;
		const formValidMsg = document.getElementById('formValidMsg');
		const formInvalidMsg = document.getElementById('formInvalidMsg');

    if (Name && Email && Message) {
			contactForm.style.display = 'none';
			formValidMsg.style.display = 'block';
    } else {
    	formInvalidMsg.style.display = 'block';
    	event.preventDefault();
    }
  }

  render() {
    return (
			<section className="contact">
				<h2>Contact</h2>

	      <form 
	      	className="form" 
	      	action="mail.php" 
	      	method="post" 
	      	id="contactForm" 
					onSubmit={this.handleSubmit}>
	      
					<div className="form__group">
						<input 
					    className="form__field" 
					    type="text" 
					    name="contactName" 
					    id="contactName" 
					    value={this.state.contactName}
							onChange={this.handleInputChange} />

				    <label className="form__label" htmlFor="contactName">
			        <FontAwesomeIcon className="fa-fw form__label-icon" icon={faUser} />
			        <span className="form__label-text">Name *</span>
				    </label>
					</div>


					<div className="form__group">
						<input 
							className="form__field" 
							type="email" 
							name="contactEmail" 
							id="contactEmail" 
							value={this.state.contactEmail}
							onChange={this.handleInputChange} />

						<label className="form__label" htmlFor="contactEmail">
							<FontAwesomeIcon className="fa-fw form__label-icon" icon={faEnvelope} />
							<span className="form__label-text">Email *</span>
						</label>
					</div>


					<div className="form__group">
						<input 
							className="form__field" 
							type="url" 
							name="contactWebsite" 
							id="contactWebsite" />

						<label className="form__label" htmlFor="contactWebsite">
							<FontAwesomeIcon className="fa-fw form__label-icon" icon={faGlobe} />
							<span className="form__label-text">Website</span>
						</label>
					</div>


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
	      </form>

	      <div className="form__msg form__msg--valid" id="formValidMsg">
					<p>Thank you!</p>
	      </div>
			</section>
    );
  }
}


export default Contact;