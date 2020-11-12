import {appTypes} from "../../prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {connect} from "react-redux";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import MainPage from "../main-page/main-page";
import React from "react";
import Room from "../room/room";
import {getOffers} from "../../selectors";

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
        <Route path="/favorites" exact>
          <Favorites
            offers = {offers}
          />
        </Route>
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

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});

export {App};
export default connect(mapStateToProps)(App);
