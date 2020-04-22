import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from "react-redux";

import ModalBox from '../../component/Modal';

import isEmpty from 'lodash/isEmpty';
import { makeTrip } from '../../helpers/utils';

import {
  GoogleMapProvider,
  InfoWindow,
  MapBox,
  Marker,
  OverlayView,
  Polyline,
  TrafficLayer,
} from '@googlemap-react/core';

import { Wrapper } from './styles';

const GoogleMap = () => {
  const markers = useSelector(state => state.pointsTrip.points);
  const loadingTrip = useSelector(state => state.pointsTrip.loading);

  const { pointOrigin, pointOriginDest, stops } = markers;
  const [centerPosition, setCenterPosition] = useState([30.567816, 114.0201949]);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);
  const [areStops, setAreStops] = useState(false);
  
  useEffect(() => {
    if (loadingTrip) {
      if (!isEmpty(stops)) {
        setAreStops(true);
      }

      const { _latitude: latOrigin, _longitude: lngOrigin } = pointOrigin;
      setStartPosition([parseFloat(latOrigin), parseFloat(lngOrigin)]);
    
      const { _latitude: latDestination, _longitude: lngDestination } = pointOriginDest;
      setEndPosition([parseFloat(latDestination), parseFloat(lngDestination)]);
      
      /* TODO: mirar bien tema dce centrado */ 
      setCenterPosition([parseFloat(latDestination), parseFloat(lngDestination)]);
    }

  }, [pointOrigin, pointOriginDest, stops, loadingTrip]);

  const paradas = loadingTrip ? makeTrip(pointOrigin, stops, pointOriginDest) : null;
  
  return (
    <Wrapper>
    <GoogleMapProvider>
      <MapBox
        apiKey="AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"
        opts={{
          center: {lat: centerPosition[0], lng: centerPosition[1]},
          zoom: 11,
        }}
        style={{
          height: '89vh',
          width: '100%',
        }}
        useDrawing
        useGeometry
        usePlaces
        useVisualization
        onCenterChanged={() => {
          console.log('The center of the map has changed.')
        }}
      />
      {startPosition !== null &&
        <Marker
          id="start"
          opts={{
            draggable: true,
            label: 'Start',
            position: {lat: startPosition[0], lng: startPosition[1]},
          }}
        />
      }
      {endPosition !== null &&
        <Marker
          id="end"
          opts={{
            draggable: true,
            label: 'End',
            position: {lat: endPosition[0], lng: endPosition[1]},
          }}
        />
      }

      { areStops &&
          stops.map(stop => {
            const { point, id } = stop;
            const { _latitude: latMarker, _longitude: lngMarker} = point;

            console.log('id en map', id);
            return (
              <div>
                <Marker
                  id={`stop-${id}`}
                  opts={{
                    draggable: true,
                    label: 'stop',
                    position: {lat: parseFloat(latMarker), lng: parseFloat(lngMarker)},
                  }}
                />
                
                <InfoWindow
                  id={id}
                  opts={{
                    content: `Stop ${id}`,
                    position: { lat: parseFloat(latMarker), lng: parseFloat(lngMarker) },
                    disableAutoPan: false,
                  }}
                  data-test={`Stop ${id}`}
                  visible
              >
                  <ModalBox tripId={id} />
                </InfoWindow>
              </div>
            )
          })
        }
        
        {areStops &&
          <Polyline id="polyline"
            opts={{
              path: Array.from(paradas),
              strokeColor: '#FF0000',
              geodesic: true,
              strokeOpacity: 1.0,
              strokeWeight: 2, 
            }} />
      }

      {loadingTrip &&
        <OverlayView position={{ lat: centerPosition[0], lng: centerPosition[1] }}>
          <h2>PRUEBA</h2>
        </OverlayView>
      }

      <TrafficLayer />

      </GoogleMapProvider>
      </Wrapper>
  )
};

export default connect()(GoogleMap);




