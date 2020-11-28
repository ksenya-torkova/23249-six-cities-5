import {mockCards} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Map from "./map.jsx";
import React from "react";
import renderer from "react-test-renderer";

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
