import React from 'react'
import '../normalize.min.css'
import '../styles.css'

class ContactSection extends React.Component {

  componentDidMount() {
  	//Adds the ".form__field--filled" class to a form field if it's filled in
    const formFields = document.querySelectorAll(".form__field");

    for (let field of formFields) {
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
      contactMsg: '',
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

	        <form className="form" action="mail.php" method="post" id="contactForm" 
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
	                    <i className="fa fa-fw fa-user form__label__icon"></i>
	                    <span className="form__label__text">Name *</span>
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
	                    <i className="fa fa-fw fa-envelope form__label__icon"></i>
	                    <span className="form__label__text">Email *</span>
	                </label>
	            </div>

	            <div className="form__group">
	                <input className="form__field" 
	                type="url" 
	                name="contactWebsite" 
	                id="contactWebsite" />
	                <label className="form__label" htmlFor="contactWebsite">
	                    <i className="fa fa-fw fa-globe form__label__icon"></i>
	                    <span className="form__label__text">Website</span>
	                </label>
	           </div>   

	            <div className="form__group">
	                <textarea 
	                className="form__field" 
	                rows="7" 
	                name="contactMsg" 
	                id="contactMsg"
	                value={this.state.contactMsg}
            		onChange={this.handleInputChange}></textarea>

	                <label className="form__label" htmlFor="contactMsg">
	                    <i className="fa fa-fw fa-pencil form__label__icon"></i>
	                    <span className="form__label__text">Message *</span>
	                </label>
	            </div>
	                     
	            <div className="form__msg form__msg--invalid" id="formInvalidMsg">
	            	Please fill in all required fields.
	            </div>

	            <button className="fa fa-paper-plane-o btn-submit" type="submit">Submit</button>
	        </form>

	        <div className="form__msg form__msg--valid" id="formValidMsg">
	            <p>Thank you!</p>
	        </div>
		</section>
    );
  }
}




export default ContactSection