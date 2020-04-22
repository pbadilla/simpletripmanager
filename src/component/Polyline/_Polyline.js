import React, { Component } from 'react';

function renderPolylines( pathMarkers, map, maps ) {

/** Example of rendering geodesic polyline */    
  let geodesicPolyline = new maps.Polyline({
    path: pathMarkers,
    geodesic: true,
    strokeColor: '#00a1e1',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });
  geodesicPolyline.setMap(map)
}

export const Polyline = ({ pathMarkers, map, maps }) => {
  renderPolylines(pathMarkers, map, maps);
  return null;
};

