import {FavoritesLocationsItem} from "./favorites-locations-item";
import {mockCards} from "./../../const";
import React from "react";
import renderer from "react-test-renderer";

it(`Should FavoritesLocationsItem render properly`, () => {
  const tree = renderer
    .create(
        <FavoritesLocationsItem
          city={`Amsterdam`}
          offers={mockCards}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
