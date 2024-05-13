import { Coordinates } from 'expo-geolocation/ExpoGeolocation.types';

/**
 * @example { latitude: "37° 46' 29.6400\" N", longitude: "122° 25' 10.5600\" W", timestamp: 1629352800000 }
 */
export function convertLatLong({ latitude, longitude, timestamp }: Coordinates) {
  latitude = latitude ?? 0.0;
  longitude = longitude ?? 0.0;
  timestamp = timestamp ?? 0;

  const latDMS = decimalToDMS(Math.abs(latitude));
  const longDMS = decimalToDMS(Math.abs(longitude));

  const latDirection = +latitude >= 0 ? 'N' : 'S';
  const longDirection = longitude >= 0 ? 'E' : 'W';

  const latDMSFormatted = formatDMS(latDMS[0], latDMS[1], latDMS[2], latDirection);
  const longDMSFormatted = formatDMS(longDMS[0], longDMS[1], longDMS[2], longDirection);

  return { latitude: latDMSFormatted, longitude: longDMSFormatted, timestamp };
}

function decimalToDMS(decimal: number): [number, number, number] {
  const degrees = Math.floor(decimal);
  const minutesDecimal = (decimal - degrees) * 60;
  const minutes = Math.floor(minutesDecimal);
  const seconds = (minutesDecimal - minutes) * 60;

  return [degrees, minutes, seconds];
}

function formatDMS(
  degrees: number,
  minutes: number,
  seconds: number,
  direction: 'S' | 'N' | 'W' | 'E',
) {
  return `${degrees}° ${minutes}' ${seconds.toFixed(4)}" ${direction}`;
}
