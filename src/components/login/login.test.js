import {Login} from "./login";
import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

const noop = () => {};
const mockStore = configureStore([]);

it(`Should CardList render properly`, () => {
  const store = mockStore({
    USER: {
      authorizationStatus: false,
      userInfo: {email: ``},
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Login
              city={`Amsterdam`}
              onSubmit={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
