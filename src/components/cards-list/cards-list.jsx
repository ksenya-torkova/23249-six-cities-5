import {cardListTypes} from "../../prop-types";
import CitiesPlaceCard from "../cities-place-card/cities-place-card";
import React, {PureComponent} from "react";

class CardList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: null,
    };
  }

  render() {
    const {rooms} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">

        {rooms.map((room) => (
          <CitiesPlaceCard
            cardData = {room}
            key = {room.id}
            onMouseEnter = {() => {
              this.setState(() => ({
                activeCard: room.id,
              }));
            }}
          />
        ))
        }
      </div>
    );
  }
}

CardList.propTypes = cardListTypes;

export default CardList;
