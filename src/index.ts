import { Coordinates } from './ExpoGeolocation.types';
import ExpoGeolocationModule from './ExpoGeolocationModule';

/**
 * Requests permissions to access location data.
 */
export function requestPermissions(): void {
  ExpoGeolocationModule.requestPermissions();
}

/**
 * Returns the current device's location.
 */
export async function getCurrentCoordinates(): Promise<Coordinates> {
  return ExpoGeolocationModule.getCurrentCoordinates();
}
