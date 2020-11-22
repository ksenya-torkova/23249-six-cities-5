import {CitiesList} from "./cities-list";
import React from "react";
import renderer from "react-test-renderer";

const noop = () => {};
const cities = [
  `Paris`,
  `Cologne`,
  `Brussels`,
  `Amsterdam`,
  `Hamburg`,
  `Dusseldorf`,
];

it(`Should CitiesList render properly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          changeCity={noop}
          cities={cities}
          currentCity={cities[0]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
