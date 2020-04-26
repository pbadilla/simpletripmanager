import React, { Fragment, useState, useEffect, Suspense } from 'react';
import { useSelector } from "react-redux";

import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';

import { makeTripWithStops, makeTripNoStops } from '../../helpers/utils';

import { DEFAULT_CENTER_MAP } from './constants';

import {
  GoogleMapProvider,
  InfoWindow,
  MapBox,
  Marker,
  Polyline,
  TrafficLayer,
} from '@googlemap-react/core';

import { point, midpoint } from '@turf/turf';

import ModalBox from '../../component/Modal';
import Banner from "../../component/Banner";
import Skeleton from 'react-loading-skeleton';

import { Wrapper } from './styles';

const GoogleMap = () => {

  const [centerPosition, setCenterPosition] = useState(DEFAULT_CENTER_MAP);

  const origin = useSelector(state => state.pointsTrip.origin);
  const destination = useSelector(state => state.pointsTrip.destination);
  const stops = useSelector(state => state.pointsTrip.stops);
  const loadingTrip = useSelector(state => state.pointsTrip.loading);

  const [startPosition, setStartPosition] = useState(null);
  const [endPosition, setEndPosition] = useState(null);
  const [middle, setMiddle] = useState(false);

  const [infoDisplay, setInfoDisplay] = useState(false);
  // eslint-disable-next-line
  const [paradas, setParadas] = useState(null);

  const changeInfoDisplay = (id) => {
    setInfoDisplay(id)
  }

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

      const pointStart = point( [parseFloat(latOrigin), parseFloat(lngOrigin)] );
      const pointEnd =  point( [parseFloat(latDestination), parseFloat(lngDestination)] );
      const midpointTurf = midpoint(pointStart, pointEnd);
      const middle = get(get(midpointTurf, 'geometry'), 'coordinates');
      setMiddle([middle[0], middle[1]])
    }

  }, [origin, destination, loadingTrip]);

  let travel = null;

  const validStops = paramStops => {
    if (paramStops !== undefined) { 
      travel = !isEmpty(paramStops[0])
        ? makeTripWithStops(origin, paramStops, destination)
        : makeTripNoStops(origin, destination);
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
      return 11;
    } else {
      return 12;
    }
  }

  return (
    <Suspense fallback={<Skeleton height="100%" width="100%" />}>
      <Wrapper>
        <GoogleMapProvider>
        <MapBox
          apiKey="AIzaSyD1aCwKJ42a5xoT7lk4EEgdHueW0vMY8TA"
          opts={{
            center: middle ? {lat: middle[0], lng: middle[1]} : {lat: centerPosition[0], lng: centerPosition[1]},
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
              <Banner position={{lat: startPosition[0], lng: startPosition[1]}}/>
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
                  key={`stop-${id}`}
                  opts={{
                    draggable: false,
                    label: 'stop',
                    position: {lat: parseFloat(latMarker), lng: parseFloat(lngMarker)},
                  }}
                  onClick={() => changeInfoDisplay(id)}
                  />
                {infoDisplay &&
                  <InfoWindow
                    id={id}
                    key={id}
                    opts={{
                      content: `Stop ${id}`,
                      position: { lat: parseFloat(latMarker), lng: parseFloat(lngMarker) },
                      disableAutoPan: false,
                    }}
                  data-test={`Stop ${id}`}
                  visible= {infoDisplay === id ? true : false }
                    onCloseClick={() => setInfoDisplay(false)}
                  >
                    <ModalBox tripId={id} />
                  </InfoWindow>
                }
              </Fragment>
            )
          })
        }

        {validStops(stops) &&
          <Polyline id="polyline"
            opts={{
              path: Array.from(travel),
              strokeColor: '#FF0000',
              geodesic: true,
              strokeOpacity: 1.0,
              strokeWeight: 2, 
          }} />
        }
        
        <TrafficLayer />
      </GoogleMapProvider>
    </Wrapper>
  </Suspense>
  )
};

export default React.memo(GoogleMap);




