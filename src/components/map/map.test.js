import React from "react";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";
import Map from "./map.jsx";
import {mockCards} from "../../const";

const mockStore = configureStore([]);

it(`Should Map render properly`, () => {
  const store = mockStore({
    APP: {
      city: `Amsterdam`,
      activeCardId: -1
    },
    DATA: {
      offerById: {}
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <Map
            offers={mockCards}
          />
        </Provider>, {
          createNodeMock: () => document.createElement(`div`)
        }
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
