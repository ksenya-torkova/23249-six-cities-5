import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api/api";
import {fetchOffersList} from "./store/api-actions";
import {generateReviewsList} from "./mocks/reviews";
import {getRandomInteger} from "./utils";
import {Provider} from "react-redux";
import App from "./components/app/app";
import React from "react";
import ReactDOM from "react-dom";
import rootReducer from "./store/reducers/root-reducer";
import thunk from "redux-thunk";

const api = createAPI();

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(fetchOffersList());

ReactDOM.render(
    <Provider store = {store}>
      <App
        reviews = {generateReviewsList(getRandomInteger(1, 5))}
      />
    </Provider>,
    document.querySelector(`#root`)
);
