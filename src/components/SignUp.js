import React, { Component } from 'react';
import { inject } from 'mobx-react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

@inject('authStore')
class SignUp extends Component {
  handleSubmitForm = async (e) => {
    e.preventDefault();
    await this.props.authStore.signUp()
    this.props.history.replace('/welcome')
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h5" component="h2">
              Sign up
            </Typography>
            <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmitForm}>
              <TextField
                id="outlined-email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={(e) => this.props.authStore.setEmail(e.target.value)}
              />

              <TextField
                id="outlined-password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                fullWidth
                onChange={(e) => this.props.authStore.setPassword(e.target.value)}
              />

              <Button variant="contained" color="primary" className={classes.button} type="submit">
                Sign in
              </Button>
            </form>

          </CardContent>
        </Card>
      </div>
    );
  }
}

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  card: {
    minWidth: 500,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
    marginRight: 8,
  },
});

SignUp.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUp);