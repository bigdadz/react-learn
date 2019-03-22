import React, { Component } from 'react';
// import { observer } from 'mobx-react';
import firebase from 'firebase/app';
import 'firebase/storage';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import FileTable from './FileTable'
import Grid from '@material-ui/core/Grid';

// @observer
class Welcome extends Component {
  constructor () {
    super()
  }

  handleSelectedFile(event) {
    var file = event.target.files[0]
    var storageRef = firebase.storage().ref();
    var ref = storageRef.child(file.name);
    ref.put(file).then(function (snapshot) {
      console.log('Uploaded a blob or file!');
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <input
          accept="image/*"
          className={classes.input}
          id="contained-button-file"
          multiple
          type="file"
          onChange={this.handleSelectedFile}
        />
        <label htmlFor="contained-button-file">
          <Button 
            variant="contained" 
            component="span" 
            className={classes.button}
            >
            Upload
          </Button>
        </label>

        <FileTable />
      </Grid>
    );
  }
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

Welcome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Welcome);