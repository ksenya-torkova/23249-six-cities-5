import {BrowserRouter} from "react-router-dom";
import MainFooter from "./main-footer";
import React from "react";
import renderer from "react-test-renderer";

it(`Should Footer render properly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MainFooter />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
