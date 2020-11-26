import {BrowserRouter} from "react-router-dom";
import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {FavoritesCardsList} from "./favorites-cards-list";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);

it(`Should FavoritesItem render properly`, () => {
  const store = mockStore({});

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <FavoritesCardsList
              city={`Amsterdam`}
              offers={mockCards}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
