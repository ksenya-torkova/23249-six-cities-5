import {CardList} from "./cards-list";
import React from "react";
import renderer from "react-test-renderer";

it(`Should CardList render properly`, () => {
  const tree = renderer
    .create(
        <CardList
          rooms={[]}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
