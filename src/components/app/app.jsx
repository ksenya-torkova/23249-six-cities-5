import {appTypes} from "../../prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {selectCityOffers, getAuthorizationStatus} from "../../selectors";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import MainPage from "../main-page/main-page";
import withPrivateRoute from "../../hocs/with-private-route/with-private-route";
import React from "react";
import Room from "../room/room";

const App = (props) => {
  const {
    authorizationStatus,
    offers,
  } = props;

  const LoginWithPrivateRoute = withPrivateRoute(Login, !authorizationStatus);
  const FavoritesWithPrivateRoute = withPrivateRoute(Favorites, authorizationStatus, `/login`);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage
            offers = {offers}
          />
        </Route>
        <Route path="/offer/:id" exact>
          <Room
            offers = {offers}
          />
        </Route>
        <Route
          exact
          path = {`/favorites`}
          render = {() => <FavoritesWithPrivateRoute
            offers = {offers}
          />}
        />
        <Route path="/login" exact>
          <LoginWithPrivateRoute />
        </Route>
        <Route>
          <React.Fragment>
            <h1>
              404.
              <br />
              <small>Sorry, nothing found</small>
            </h1>
          </React.Fragment>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = appTypes;

const mapStateToProps = ({APP, DATA, USER}) => ({
  offers: selectCityOffers({APP, DATA}),
  authorizationStatus: getAuthorizationStatus({USER}),
});

export {App};
export default connect(mapStateToProps)(App);
