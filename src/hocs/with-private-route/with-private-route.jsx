import React from "react";
import {Redirect} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import {privateRouteTypes} from "../../prop-types";

const withPrivateRoute = (Component, authorizationStatus, url = `/`) => {
  class PrivateRoute extends React.PureComponent {
    constructor(props) {
      super(props);
    }

    render() {
      if (authorizationStatus === AuthorizationStatus.AUTH) {
        return <Component {...this.props}/>;
      } else {
        return <Redirect to = {url}/>;
      }
    }
  }

  PrivateRoute.propTypes = privateRouteTypes;

  return PrivateRoute;
};

export default withPrivateRoute;
