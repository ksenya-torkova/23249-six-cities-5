import {appTypes} from "../prop-types";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Favorites from "../favorites/favorites";
import Login from "../login/login";
import MainPage from "../main-page/main-page";
import React from "react";
import Room from "../room/room";

const App = (props) => {
  const {placesAmount} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MainPage placesAmount = {placesAmount} />
        </Route>
        <Route path="/offer/:id" exact>
          <Room />
        </Route>
        <Route path="/favorites" exact>
          <Favorites />
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

export default App;
