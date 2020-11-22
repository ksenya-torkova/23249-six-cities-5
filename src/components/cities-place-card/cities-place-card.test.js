import React from "react";
import renderer from "react-test-renderer";
import {CitiesPlaceCard} from "./cities-place-card";
import {mockOffer} from "../../const";

// Could not find "store" in the context of "Connect(Component)". Either wrap the root component in a <Provider>, or pass a custom React context provider to <Provider> and the corresponding React context consumer to Connect(Component) in connect options.
// Не понимаю, в чём ошибка, ни Провайдер, ни Стор не имеют отношения к этому компоненту.

const noop = () => {};

it(`Should CitiesPlaceCard render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesPlaceCard
          cardData={mockOffer}
          onMouseEnter={noop}
          onMouseLeave={noop}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
