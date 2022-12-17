import { AppBar, Button, HStack, IconButton, Stack } from "@react-native-material/core";
import {
  FilledTextField,
  OutlinedTextField,
  TextField,
} from 'rn-material-ui-textfield';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import React from 'react';
import styles from '../styles';

let defaults = {
  firstname: 'Eddard',
  lastname: 'Stark',
  about:
    'Stoic, dutiful, and honorable man, considered to embody the values of the North',
};

export default class FormUserDetails extends React.Component {
  constructor(props) {
    super(props);

    this.onFocus = this.onFocus.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
    this.onSubmitFirstName = this.onSubmitFirstName.bind(this);
    this.onSubmitLastName = this.onSubmitLastName.bind(this);
    this.onSubmitAbout = this.onSubmitAbout.bind(this);
    this.onSubmitEmail = this.onSubmitEmail.bind(this);
    this.onSubmitPassword = this.onSubmitPassword.bind(this);
    this.onAccessoryPress = this.onAccessoryPress.bind(this);

    this.firstnameRef = this.updateRef.bind(this, 'firstname');
    this.lastnameRef = this.updateRef.bind(this, 'lastname');
    this.aboutRef = this.updateRef.bind(this, 'about');
    this.emailRef = this.updateRef.bind(this, 'email');
    this.passwordRef = this.updateRef.bind(this, 'password');
    this.houseRef = this.updateRef.bind(this, 'house');

    this.renderPasswordAccessory = this.renderPasswordAccessory.bind(this);

    this.state = {
      secureTextEntry: true,
      ...defaults,
    };
  }
  
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  onFocus() {
    let {errors = {}} = this.state;

    for (let name in errors) {
      let ref = this[name];

      if (ref && ref.isFocused()) {
        delete errors[name];
      }
    }

    this.setState({errors});
  }

  onChangeText(text) {
    ['firstname', 'lastname', 'about', 'email', 'password']
      .map(name => ({name, ref: this[name]}))
      .forEach(({name, ref}) => {
        if (ref.isFocused()) {
          this.setState({[name]: text});
        }
      });
  }

  onAccessoryPress() {
    this.setState(({secureTextEntry}) => ({
      secureTextEntry: !secureTextEntry,
    }));
  }

  onSubmitFirstName() {
    this.lastname.focus();
  }

  onSubmitLastName() {
    this.about.focus();
  }

  onSubmitAbout() {
    this.email.focus();
  }

  onSubmitEmail() {
    this.password.focus();
  }

  onSubmitPassword() {
    this.password.blur();
  }

  onSubmit() {
    let errors = {};

    ['firstname', 'lastname', 'email', 'password'].forEach(name => {
      let value = this[name].value();

      if (!value) {
        errors[name] = 'Should not be empty';
      } else {
        if (name === 'password' && value.length < 6) {
          errors[name] = 'Too short';
        }
      }
    });

    this.setState({errors});
  }

  updateRef(name, ref) {
    this[name] = ref;
  }

  renderPasswordAccessory() {
    let {secureTextEntry} = this.state;

    let name = secureTextEntry ? 'visibility' : 'visibility-off';

    return null;
  }

  render() {
    const { values, handleChange } = this.props;
    let {errors = {}, secureTextEntry, ...data} = this.state;
    let {firstname, lastname} = data;

    let defaultEmail = `${firstname || 'name'}@${lastname || 'house'}.com`
      .replace(/\s+/g, '_')
      .toLowerCase();
      
    return (

        <React.Fragment>
          <AppBar
            title="Enter User Details"
            style={styles.appBar}
            leading={props => (
              <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
            )}
            trailing={props => (
              <HStack>
                <IconButton
                  icon={props => <Icon name="magnify" {...props} />}
                  {...props}
                />
                <IconButton
                  icon={props => <Icon name="dots-vertical" {...props} />}
                  {...props}
                />
              </HStack>
            )}
          />
          <Stack spacing={2}  style={styles.form}>
          <TextField
              ref={this.firstnameRef}
              value={defaults.firstname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitFirstName}
              returnKeyType="next"
              label="First Name"
              error={errors.firstname}
            />

            <TextField
              ref={this.lastnameRef}
              value={defaults.lastname}
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitLastName}
              returnKeyType="next"
              label="Last Name"
              error={errors.lastname}
            />

            <TextField
              ref={this.emailRef}
              defaultValue={defaultEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitEmail}
              returnKeyType="next"
              label="Email Address"
              error={errors.email}
            />

            <TextField
              ref={this.passwordRef}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
              autoCorrect={false}
              enablesReturnKeyAutomatically={true}
              clearTextOnFocus={true}
              onFocus={this.onFocus}
              onChangeText={this.onChangeText}
              onSubmitEditing={this.onSubmitPassword}
              returnKeyType="done"
              label="Password"
              error={errors.password}
              title="Choose wisely"
              maxLength={30}
              characterRestriction={20}
              renderRightAccessory={this.renderPasswordAccessory}
            />

            <TextField
              ref={this.houseRef}
              defaultValue={data.lastname}
              label="House"
              title="Derived from last name"
              disabled={true}
            />

            <Button 
              title="Continue"
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </Stack>
        </React.Fragment>

    )
  }
}
