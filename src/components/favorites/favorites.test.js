import {BrowserRouter} from "react-router-dom";
import {Favorites} from "./favorites";
import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

it(`Should CitiesPlaceCard render correctly`, () => {
  const store = mockStore({
    APP: {
      activeCardId: -1,
      city: `Amsterdam`,
      sortingType: `Popular`,
    },
    USER: {
      authorizationStatus: false,
      userInfo: {email: ``},
    },
    DATA: {
      offers: []
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <Favorites
              offers={mockCards}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
