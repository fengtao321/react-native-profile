import { AppBar } from "@react-native-material/core";
import React from 'react';
import styles from '../styles';

const Success = () => (
  <MuiThemeProvider>
      <React.Fragment>
        <AppBar
          title="Success"
          style={styles.appBar}
        />  
        <h1>Thank You For Your Submission</h1>
        <p>You will get an email with further instructions</p>
    </React.Fragment>    
  </MuiThemeProvider>
);

export default Success;