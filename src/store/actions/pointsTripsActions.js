import { POINTS_MARKERS } from "./actionTypes";

function getMarkers(markers) {
  return{
    type: POINTS_MARKERS,
    markers
  }
}

export default getMarkers;