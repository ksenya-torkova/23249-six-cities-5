import '../../../node_modules/leaflet/dist/leaflet.css';
import {mapTypes} from "../../prop-types";
import leaflet from "leaflet";
import React, {PureComponent} from "react";

const DefaultMapSettings = {
  MARKER: true,
  PIN_ICON: `img/pin.svg`,
  PIN_SIZE: [30, 30],
  ZOOM_CONTROL: false,
  ZOOM: 12,
};

const CityCoordinate = {
  AMSTERDAM: {coordinates: [52.38333, 4.9]},
  BRUSSELS: {coordinates: [50.85045, 4.34878]},
  PARIS: {coordinates: [48.85341, 2.3488]},
  COLOGNE: {coordinates: [50.93333, 6.95]},
  HAMBURG: {coordinates: [53.57532, 10.01534]},
  DUSSELDORF: {coordinates: [51.22172, 6.77616]},
};

class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._setMap();
  }

  componentDidUpdate() {
    this._resetMap();
    this._setMap();
  }

  render() {
    const {className} = this.props;

    return (
      <section id="map" className = {`${className} map`}></section>
    );
  }

  _setMap() {
    const {offers, city} = this.props;

    const coordinatesPlaces = offers.map((offer) => offer.location);

    const icon = leaflet.icon({
      iconUrl: DefaultMapSettings.PIN_ICON,
      iconSize: DefaultMapSettings.PIN_SIZE,
    });

    this._map = leaflet.map(`map`, {
      center: CityCoordinate[city.toUpperCase()].coordinates,
      zoom: DefaultMapSettings.ZOOM,
      zoomControl: DefaultMapSettings.ZOOM_CONTROL,
      marker: DefaultMapSettings.MARKER,
    });

    this._map.setView(CityCoordinate[city.toUpperCase()].coordinates, DefaultMapSettings.ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>
        contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this._map);

    coordinatesPlaces.forEach((coordinates) =>
      leaflet
        .marker(coordinates, {icon})
        .addTo(this._map)
    );
  }

  _resetMap() {
    this._map.remove();
  }
}

Map.propTypes = mapTypes;

export default Map;
