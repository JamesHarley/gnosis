import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {Helmet } from 'react-helmet';

import * as emailjs from 'emailjs-com';

emailjs.init("user_W47IyeDlLU77G9jq8MYd2");


class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        firstName: '',
        lastName: '',
        infoText: '',
        isSubmit: false, 
        sendMessage: '',
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleSubmit(event) {
      this.setState({
        isSubmit: true, 
      });
      event.preventDefault();
      this.state.email !== '' && this.state.firstname !== '' 
      && this.state.lastName !=='' && this.state.infoText !== '' &&
      
      // parameters: service_id, template_id, template_parameters
        emailjs.send("gmail","gnosiscontact",{firstName: this.state.firstName, lastName: this.state.lastName, email:this.state.email, infoText: this.state.infoText})
        .then(function(response) {
          /**alert("Message Sent!", response.status, response.text);**/
          ReactDOM.findDOMNode(this.refs.form).reset();
        }, function(err) {
          
          alert("Error please refresh page and try again. If issue continues notify gnosisdevelops@gmail.com");
          console.log("FAILED. error=", err);
          
        });
       
         
    }
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
        
      this.setState({
        [name]: value
      });
    }
  
    render() {
      return (
          <div>
            {this.state.isSubmit === false && (
             <form onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input 
                    name="email"
                    className="form-control" 
                    field="email" 
                    placeholder="email"
                    onChange={this.handleInputChange} 
                />
            </div>
        
            <div class="form-group">
                <label for="firstName">First Name</label>
                <input 
                    name="firstName"
                    className="form-control" 
                    field="firstName" 
                    placeholder='First Name' 
                    onChange={this.handleInputChange} 
                />
            </div>

            <div class="form-group">
                <label for="lastName">Last Name</label>
                <input  
                    name="lastName"
                    className="form-control" 
                    field="lastName" 
                    placeholder='Last Name' 
                    onChange={this.handleInputChange} 
                />
            </div>

            <div class="form-group col-lg">
                <label for="textArea">Questions and Comments</label>
            </div>
            <div class="form-group col-lg">
                <textarea 
                    name="infoText"
                    field="textArea" 
                    className="form-control"
                    onChange={this.handleInputChange} 
                    placeholder='Questions, comments' />
            </div>
            <div class="form-group">
            <input className="btn btn-block btn-primary" type="submit" value="Submit" />
            </div>
            </form>
            )}
            {this.state.email === '' && (<p>Please enter an email</p>) && <formReset />}
            {this.state.isSubmit === true && (<p>Thank you for contacting us. We will be in touch shortly!</p>)}
        </div>
      );
    }
  }
  
  



class Contact extends Component {
  constructor( props ) {
    super( props );
    this.state = {};
  }

  render() {
    return (
        <div id="Contact"> 
        <Helmet>
          <meta charSet="utf-8" />
          <title>Contact | Gnosis Development</title>
        </Helmet>
              <h5> <i className="fas fa-envelope"></i> Contact Us</h5>
               <p>
                Contact us for quotes on your next app: <br />
                <ContactForm />
                </p>

           
            <p className="spacer"></p>  
      </div>
    
    ); 
  }
}

export default Contact;

  
 