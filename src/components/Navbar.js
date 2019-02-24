import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

@inject('authStore')
@observer
class Navbar extends Component {
  loginButton() {
    const { classes } = this.props;
    return (
      <div>
        <Button color="inherit">
          <Link to="/signup" className={classes.button} >Sign up</Link>
        </Button>
        <Button color="inherit">
          <Link to="/signin" className={classes.button} >Sign in</Link>
        </Button>
      </div>
    )
  }

  logoutButton() {
    return (
      <Button color="inherit" onClick={() => this.props.authStore.signOut()}>
        Sign out
      </Button>
    )
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              React + Firebase
          </Typography>
            {(this.props.authStore.currentUser == null) ? this.loginButton() : this.logoutButton()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  button: {
    color: "white",
    textDecoration: "none"
  }
};

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);