import { Coordinates } from './ExpoGeolocation.types';
import ExpoGeolocationModule from './ExpoGeolocationModule';

export function requestPermissions(): void {
  ExpoGeolocationModule.requestPermissions();
}

export async function getCurrentCoordinates(): Promise<Coordinates> {
  return ExpoGeolocationModule.getCurrentCoordinates();
}
