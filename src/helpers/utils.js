export function extractStops(dataPoints, level) {
  let arrayTemp = [];

  if (level !== 'noLevel') {
    const pointsStops = dataPoints.map(stop => {
      const { point } = stop;
      const { _latitude: latStop, _longitude: lngStop } = point;
      arrayTemp.push({ lat: parseFloat(latStop), lng: parseFloat(lngStop) });
    });
  } else {
    const { _latitude: latStop, _longitude: lngStop } =  dataPoints;
    arrayTemp.push( { lat: parseFloat(latStop), lng: parseFloat(lngStop) } );
  }
  return arrayTemp;
}

export function makeTrip(start, middle, end) {

  const startStops = extractStops(start, 'noLevel');
  const middleStops = extractStops(middle, 'firstLevel');
  const endStops = extractStops(end, 'noLevel');

  const makeTrip = [...startStops, ...middleStops, ...endStops];
  
  return makeTrip;
}

export function toMinutes(timeIso) {
  const str = timeIso;
  const parts = str.slice(0, -1).split('T');
  const dateComponent = parts[0];
  const timeComponent = parts[1];
  return timeComponent;
}
