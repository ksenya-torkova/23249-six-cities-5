import {BrowserRouter} from "react-router-dom";
import {CitiesPlaceCard} from "./cities-place-card";
import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);
const noop = () => {};

it(`Should CitiesPlaceCard render correctly`, () => {
  const store = mockStore({
    APP: {activeCardId: -1},
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <CitiesPlaceCard
              cardData={mockCards[0]}
              onMouseEnter={noop}
              onMouseLeave={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
