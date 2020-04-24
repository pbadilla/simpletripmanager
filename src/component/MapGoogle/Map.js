import React, { Fragment, useState, useEffect, Suspense } from 'react';
import { useSelector } from "react-redux";

import isEmpty from 'lodash/isEmpty';
import { makeTripWithStops, makeTripNoStops } from '../../helpers/utils';

import { getStops } from '../../store/selectors/selectors';

import { DEFAULT_CENTER_MAP, ZOOM } from './constants';

import {
  GoogleMapProvider,
  InfoWindow,
  MapBox,
  Marker,
  Polyline,
  TrafficLayer,
} from '@googlemap-react/core';

import ModalBox from '../../component/Modal';
import Banner from "../../component/Banner";
import Skeleton from 'react-loading-skeleton';

import { Wrapper } from './styles';

const GoogleMap = () => {

  const [centerPosition, setCenterPosition] = useState(DEFAULT_CENTER_MAP);
  let zoom = ZOOM;
  
  // const markers = useSelector(state => state.pointsTrip.points.length);
  const origin = useSelector(state => state.pointsTrip.origin);
  const destination = useSelector(state => state.pointsTrip.destination);
  const stops = useSelector(state => state.pointsTrip.stops);
  const loadingTrip = useSelector(state => state.pointsTrip.loading);

  const [areStops, setAreStops] = useState(false);
  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);
  const [infoDisplay, setInfoDisplay] = useState(false);
  const [paradas, setParadas] = useState(null);

  const changeInfoDisplay = () => setInfoDisplay(display => !display)

  useEffect(() => {
    if (stops !== undefined) {
      if (isEmpty(stops[0])) {
        setParadas(makeTripNoStops(origin, destination));
      } else {
        setParadas(makeTripWithStops(origin, stops, destination));
      }
    }
  }, [stops, destination, origin]);

  useEffect(() => {
    if (loadingTrip) {

      const { _latitude: latOrigin, _longitude: lngOrigin } = origin;
      setStartPosition([parseFloat(latOrigin), parseFloat(lngOrigin)]);
    
      const { _latitude: latDestination, _longitude: lngDestination } = destination;
      setEndPosition([parseFloat(latDestination), parseFloat(lngDestination)]);

      setCenterPosition([parseFloat(latDestination), parseFloat(lngDestination)]);
    }

  }, [origin, destination, loadingTrip]);

  const validStops = paramStops => {
    if (paramStops !== undefined) { 
      return (isEmpty(paramStops[0]) ) ?  false :  true;
    }
  }

  const dynamicZoom = (stopsParam) => {
    if (!stopsParam) {
      return 8;
    }
    const stopsLength = stopsParam.length;
    if (stopsLength > 2 && stopsLength <= 4) {
      return 10;
    } else if (stopsLength > 0 && stopsLength <= 2) {
      return 12;
    } else {
      return 13;
    }
  }

  console.log('validStops(stops)', validStops(stops));

  // const paradaStop = validStops(stops)
  //   ? setParadas(makeTripWithStops(origin, stops, destination))
  //   : '';
  
  // console.log('paradaStop', paradaStop);
  //   : setParadas(makeTripNoStops(origin, destination))

  return (
    <Suspense fallback={<Skeleton height="100%" width="100%" />}>
      <Wrapper>
      <GoogleMapProvider>
        <MapBox
          apiKey="AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"
          opts={{
            center: {lat: centerPosition[0], lng: centerPosition[1]},
            zoom: dynamicZoom(stops),
          }}
          style={{
            height: '89vh',
            width: '100%',
          }}
          useDrawing
          useGeometry
          usePlaces
          useVisualization
          onLoad={map => {
            const bounds = new window.google.maps.LatLngBounds();
            map.fitBounds(bounds);
          }}
        />
      
        <TrafficLayer />
        
          {startPosition !== null && (
            <div>
              <Marker
                id="start"
                opts={{
                  draggable: false,
                  label: 'Start',
                  position: {lat: startPosition[0], lng: startPosition[1]},
                }}
              />
                <Banner  position={{lat: startPosition[0], lng: startPosition[1]}}/>
            </div>
            )
        }

        {endPosition !== null &&
          <Marker
            id="end"
            opts={{
              draggable: false,
              label: 'End',
              position: {lat: endPosition[0], lng: endPosition[1]},
            }}
          />
        }

        {validStops(stops) &&
          stops.map(stop => {
            const { point, id } = stop;
            const { _latitude: latMarker, _longitude: lngMarker } = point
            return (
              <Fragment>
                <Marker
                  id={`stop-${id}`}
                  opts={{
                    draggable: false,
                    label: 'stop',
                    position: {lat: parseFloat(latMarker), lng: parseFloat(lngMarker)},
                  }}
                  onClick={changeInfoDisplay}
                  />
                
                <InfoWindow
                  id={id}
                  opts={{
                    content: `Stop ${id}`,
                    position: { lat: parseFloat(latMarker), lng: parseFloat(lngMarker) },
                    disableAutoPan: false,
                  }}
                  data-test={`Stop ${id}`}
                  visible={infoDisplay}
                  onCloseClick={() => setInfoDisplay(false)}
                >
                  <ModalBox tripId={id} />
                </InfoWindow>
              </Fragment>
            )
          })
        }

        {areStops &&
          <Polyline id="polyline"
            opts={{
              path: Array.from(paradas[1]),
              strokeColor: '#FF0000',
              geodesic: true,
              strokeOpacity: 1.0,
              strokeWeight: 2, 
          }} />
        }
        
      </GoogleMapProvider>
      </Wrapper>
      
  </Suspense>
  )
};

export default React.memo(GoogleMap);




