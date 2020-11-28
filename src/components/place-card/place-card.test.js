import {BrowserRouter} from "react-router-dom";
import {PlaceCard} from "./place-card";
import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import React from "react";
import renderer from "react-test-renderer";

const mockStore = configureStore([]);
const noop = () => {};

it(`Should PlaceCard render correctly`, () => {
  const store = mockStore({
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <BrowserRouter>
            <PlaceCard
              additionalCardClass={`near-places__card`}
              additionalContentClass={``}
              additionalImageClass={`near-places__image-wrapper`}
              cardData={mockCards[0]}
              getReviewsAction={noop}
              updateActiveCardId={noop}
            />
          </BrowserRouter>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
