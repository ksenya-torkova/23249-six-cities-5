import {CitiesList} from "./cities-list";
import React from "react";
import renderer from "react-test-renderer";
import {City} from "../../const";

const noop = () => {};

it(`Should CitiesList render properly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          changeCity={noop}
          cities={Object.values(City)}
          currentCity={`Paris`}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
