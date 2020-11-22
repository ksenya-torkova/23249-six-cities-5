import {BrowserRouter} from "react-router-dom";
import {MainHeader} from "./main-header";
import React from "react";
import renderer from "react-test-renderer";

const userInfo = {
  email: `ksenya.torkova`,
  avatarUrl: `img/001.png`
};

it(`Should MainHeader render properly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <MainHeader
            authorizationStatus={false}
            isMainPage={true}
            userInfo={userInfo}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
