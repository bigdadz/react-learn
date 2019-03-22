import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

@inject('authStore')
@observer
class PrivateRoute extends React.Component {
  render() {
    const { authStore, ...restProps } = this.props;
    if (authStore.currentUser) { 
      return <Route {...restProps} /> 
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default PrivateRoute;