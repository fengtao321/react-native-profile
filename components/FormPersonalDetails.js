import { AppBar } from "@react-native-material/core";
import React from 'react';
// import {
//     TextField,
// } from 'react-native-material-textfield';
import styles from '../styles';

export default class FormPersonalDetails extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.previousStep();    
  }

  render() {
    const { values, handleChange } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            title="Enter Personal Details"
            style={styles.appBar}
          />
          <div style={styles.form}>
            {/* <TextField 
              hintText="Enter Your Occupation"
              floatingLabelText="Occupation"
              onChange={handleChange('occupation')}
              defaultValue={values.occupation}
            /> */}
            <br />
            {/* <TextField 
              hintText="Enter Your City"
              floatingLabelText="City"
              onChange={handleChange('city')}
              defaultValue={values.city}
            /> */}
            <br />
            {/* <TextField 
              hintText="Enter Your Bio"
              floatingLabelText="Bio"
              onChange={handleChange('bio')}
              defaultValue={values.bio}
            /> */}
            <br />
            <div style={styles.buttons}>
              {/* <RaisedButton 
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              /> */}
              {/* <RaisedButton 
                label="Back"
                style={styles.button}
                onClick={this.back}
              />  */}
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
