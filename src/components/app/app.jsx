import {appTypes} from "../../prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import {selectCityOffers} from "../../selectors";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import MainPage from "../main-page/main-page";
import PrivateRoute from "../private-route/private-route";
import React from "react";
import Room from "../room/room";

const App = (props) => {
  const {
    reviews,
    offers,
  } = props;

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
            reviews = {reviews}
          />
        </Route>
        <PrivateRoute
          exact
          path = {`/favorites`}
          render = {() => <Favorites
            offers = {offers}
          />}
        />
        <Route path="/login" exact>
          <Login />
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

const mapStateToProps = ({APP, DATA}) => ({
  offers: selectCityOffers({APP, DATA}),
});

export {App};
export default connect(mapStateToProps)(App);
