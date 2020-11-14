import {ActionCreator} from "./store/action";
import {applyMiddleware, createStore} from "redux";
import {AuthorizationStatus} from "./const";
import {checkAuth, fetchOffersList} from "./store/api-actions";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api/api";
import {Provider} from "react-redux";
import App from "./components/app/app";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";

const api = createAPI(
    () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
);

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOffersList());
store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store = {store}>
      <App />
    </Provider>,
    document.querySelector(`#root`)
);
