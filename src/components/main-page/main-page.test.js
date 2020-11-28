import {BrowserRouter} from "react-router-dom";
import {MainPageMemo} from "./main-page";
import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";
import {City} from "../../const";

const mockStore = configureStore([]);

it(`Should FavoritesItem render properly`, () => {
  const store = mockStore({
    APP: {
      activeCardId: -1,
      cities: Object.values(City),
      city: `Amsterdam`,
      sortingType: `Popular`,
    },
    USER: {
      authorizationStatus: false,
      userInfo: {email: ``},
    },
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <MainPageMemo
              city={`Amsterdam`}
              offers={mockCards}
              cities={Object.values(City)}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
