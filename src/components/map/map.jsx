import '../../../node_modules/leaflet/dist/leaflet.css';
import {mapTypes} from "../../prop-types";
import leaflet from "leaflet";
import React, {PureComponent} from "react";

const DefaultMapSettings = {
  CITY_CENTER: [52.38333, 4.9],
  MARKER: true,
  PIN_ICON: `img/pin.svg`,
  PIN_SIZE: [30, 30],
  ZOOM_CONTROL: false,
  ZOOM: 12,
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {offers} = this.props;

    const coordinatesPlaces = offers.map((offer) => offer.location);

    const icon = leaflet.icon({
      iconUrl: DefaultMapSettings.PIN_ICON,
      iconSize: DefaultMapSettings.PIN_SIZE,
    });

    const map = leaflet.map(`map`, {
      center: DefaultMapSettings.CITY_CENTER,
      zoom: DefaultMapSettings.ZOOM,
      zoomControl: DefaultMapSettings.ZOOM_CONTROL,
      marker: DefaultMapSettings.MARKER,
    });

    map.setView(DefaultMapSettings.CITY_CENTER, DefaultMapSettings.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    coordinatesPlaces.forEach((coordinates) =>
      leaflet
        .marker(coordinates, {icon})
        .addTo(map)
    );
  }

  render() {
    return (
      <section id="map" className="cities__map map"></section>
    );
  }
}

Map.propTypes = mapTypes;

export default Map;
