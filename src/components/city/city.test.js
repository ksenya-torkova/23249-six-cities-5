import React from "react";
import renderer from "react-test-renderer";
import {City} from "./city";

const noop = () => {};

it(`Should City render correctly`, () => {
  const tree = renderer
    .create(
        <City
          city={`Amsterdam`}
          isCurrent={false}
          onCityClick={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
