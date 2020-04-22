import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from "react-redux";

import isEmpty from 'lodash/isEmpty';
import { extractStops } from '../../helpers/utils';

import GoogleMapReact from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

import Marker from '../Marker';
import Polyline from './component/Polyline';

import { Wrapper } from './styles';

const GoogleMap = () => {
  const markers = useSelector(state => state.pointsTrip.points);
  const { pointOrigin, pointOriginDest, stops } = markers;

  const [centerPosition, setCenterPosition] = useState(pointOrigin);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);
  const [areStops, setAreStops] = useState(false);
  const [mapsLoaded, setMapsLoaded] = useState(false);
  const [maps, setMaps] = useState(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (!isEmpty(stops)) {
      setAreStops(true);
    }

    const { _latitude: latOrigin, _longitude: lngOrigin } = pointOrigin;
    setStartPosition({ lat: latOrigin, lng: lngOrigin });
  
    const { _latitude: latDestination, _longitude: lngDestination } = pointOriginDest;
    setEndPosition({ lat: latDestination, lng: lngDestination });
    
    /* TODO: mirar bien tema dce centrado */ 
    setCenterPosition({ lat: latDestination, lng: lngDestination });
  }, [pointOrigin, pointOriginDest, stops]);

 
  const greatPlaceStyle = {
    height: '100vh',
    width: '100%'
  };

  /** Example of rendering geodesic polyline */ 
  function renderPolylines( pathMarkers, map, maps ) {
      let geodesicPolyline = new maps.Polyline({
        path: pathMarkers,
        geodesic: true,
        strokeColor: '#00a1e1',
        strokeOpacity: 1.0,
        strokeWeight: 4
      });
      geodesicPolyline.setMap(map)
  };
  
  function onMapLoaded(map, maops) {
    fitBounds(map, maps);
    setMapsLoaded(true);
    setMap(map)
    setMaps(maps);
  };

  function fitBounds(map, maps) {
    const bounds = new maps.LatLngBounds()
    for (let marker of this.props.markers) {
      bounds.extend(
        new maps.LatLng(marker.lat, marker.lng)
      )
    }
    map.fitBounds(bounds)
  }

  function afterMapLoadChanges() {
    return (
      <div style={{display: 'none'}}>
        <Polyline
          map={map}
          maps={maps}
          markers={markers} />
      </div>
    )
  }


  return (
    <div style={greatPlaceStyle}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: 'AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA',
          language: 'es',
          region: 'es',
        }}
        layerTypes={['TrafficLayer', 'TransitLayer']}
        center={centerPosition}
        defaultZoom={11}
        onGoogleApiLoaded={({map, maps}) => onMapLoaded(map, maps)}
      >
        {startPosition !== null &&
          <Marker {...startPosition} text="Start"/>
        }
        
        { areStops &&
          stops.map(stop => {
            const { point, id } = stop;
            const { _latitude: latMarker, _longitude: lngMarker} = point;
            return <Marker text={id} lat={latMarker} lng={lngMarker} />
          })
        }

        {endPosition !== null &&
          <Marker {...endPosition} text="End"/>
        }
      </GoogleMapReact>
    </div>
  )
};

export default connect()(GoogleMap);




