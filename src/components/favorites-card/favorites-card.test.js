import {FavoritesCard} from "./favorites-card";
import {mockOffer} from "../../const";
import React from "react";
import renderer from "react-test-renderer";

it(`Should City render correctly`, () => {
  const tree = renderer
    .create(
        <FavoritesCard
          cardData={mockOffer}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
