import {favoritesCardsListTypes} from "../../prop-types";
import {getOffersByCity} from "../../utils";
import {nanoid} from "nanoid";
import FavoritesCard from "../favorites-card/favorites-card";
import React, {Fragment} from "react";

const FavoritesCardsList = (props) => {
  const {city, offers} = props;

  const cityOffers = getOffersByCity(offers, city);

  return (
    <Fragment>
      {cityOffers.map((cityOffer) => (
        <FavoritesCard
          cardData = {cityOffer}
          key = {nanoid()}
        />
      ))}
    </Fragment>
  );
};

FavoritesCardsList.propTypes = favoritesCardsListTypes;

export {FavoritesCardsList};
export default React.memo(FavoritesCardsList);
