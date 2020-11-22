import {Favorites} from "./favorites";
import {mockOffer} from "../../const";
import React from "react";
import renderer from "react-test-renderer";

const mockOffers = [];
mockOffers.push(mockOffer);
mockOffers.push(mockOffer);
mockOffers.push(mockOffer);

it(`Should Favorites render correctly`, () => {
  const tree = renderer
    .create(
        <Favorites
          offers={mockOffers}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
