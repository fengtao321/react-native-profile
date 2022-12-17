import React from 'react';
import styles from '../styles';

function formatKey(str) {
  str = str.replace(/([A-Z])/g, ' $1');
  return str[0].toUpperCase() + str.slice(1);
}

export default class Confirm extends React.Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  }

  back = e => {
    e.preventDefault();
    this.props.previousStep();
  }

  render() {
    const { values } = this.props;

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            title="Confirm"
            style={styles.appBar}
          />
          <div style={styles.form}>
            <List style={styles.list}>
              {Object.keys(values).map(key => (
                <ListItem
                  key={key}
                  primaryText={formatKey(key)}
                  secondaryText={values[key]}
                />
              ))}
            </List>
            <br />
            <div style={styles.buttons}>
              {/* <RaisedButton
                label="Confirm"
                primary={true}
                style={styles.button}
                onClick={this.continue}
              />
              <RaisedButton
                label="Back"
                style={styles.button}
                onClick={this.back}
              /> */}
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
