import Confirm from './Confirm';
import FormPersonalDetails from './FormPersonalDetails';
import FormUserDetails from './FormUserDetails';
import React from 'react';
import Success from './Success';

export default class UserForm extends React.Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    occupation: '',
    city: '',
    bio: '',
  }

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  }

  previousStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  }

  handledChange = input => e => {
    this.setState({
      [input]: e.target.value,
    });
  }

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = { firstName, lastName, email, occupation, city, bio };

    switch(step) {
      case 1:
        return (
          <FormUserDetails 
            nextStep={this.nextStep}
            handleChange={this.handledChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormPersonalDetails 
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handledChange}
            values={values}          
          />
        );        
      case 3:
        return (
          <Confirm 
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handledChange}
            values={values}
          />
        );        
      case 4:
        return (
          <Success />
        );                
    }
  }
}