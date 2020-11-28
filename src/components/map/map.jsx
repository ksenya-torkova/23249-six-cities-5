import React, {createRef, useEffect} from "react";
import {connect} from "react-redux";
import {mapTypes} from "../../prop-types";

import '../../../node_modules/leaflet/dist/leaflet.css';
import leaflet from "leaflet";

import {getHoveredOfferId, getOfferByIdFromServer, getCity} from "../../selectors";

const Map = (props) => {
  const {offers, isMainPageMap, offerById, hoveredOfferId, activeCity} = props;
  const mapRef = createRef();

  useEffect(() => {
    const icon = leaflet.icon({
      iconUrl: `/img/pin.svg`,
      iconSize: [30, 30]
    });

    const hoveredIcon = leaflet.icon({
      iconUrl: `/img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const city = offers[0].city.coordinates;
    const coordinates = isMainPageMap ?
      [city.latitude, city.longitude] :
      [offerById.coordinates.latitude, offerById.coordinates.longitude];

    const zoom = isMainPageMap ?
      offers[0].city.coordinates.zoom
      : offerById.coordinates.zoom;

    const map = leaflet.map(mapRef.current, {
      center: coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          })
      .addTo(map);

    if (!isMainPageMap) {
      leaflet
        .marker([offerById.coordinates.latitude, offerById.coordinates.longitude], {icon: hoveredIcon})
        .addTo(map);

      offers.forEach((item) => {
        leaflet
          .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
          .addTo(map);
      });
    } else {
      offers.forEach((item) => {
        if (item.id === hoveredOfferId) {
          leaflet
            .marker([item.coordinates.latitude, item.coordinates.longitude], {icon: hoveredIcon})
            .addTo(map);
        } else {
          leaflet
            .marker([item.coordinates.latitude, item.coordinates.longitude], {icon})
            .addTo(map);
        }
      });
    }

    return () => map.remove();

  }, [hoveredOfferId, activeCity]);

  return (
    <div ref={mapRef} style={{height: `100%`}}/>
  );
};

Map.defaultProps = {
  offerById: {},
  isMainPageMap: true
};

Map.propTypes = mapTypes;

const mapStateToProps = (state) => ({
  hoveredOfferId: getHoveredOfferId(state),
  offerById: getOfferByIdFromServer(state),
  activeCity: getCity(state),
});

export {Map};
export default connect(mapStateToProps)(Map);
