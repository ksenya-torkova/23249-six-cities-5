import {BrowserRouter} from "react-router-dom";
import {FavoritesCard} from "./favorites-card";
import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

it(`Should FavoritesItem render properly`, () => {
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesCard
              cardData={mockCards[0]}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
