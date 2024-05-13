export type Coordinates = {
  latitude: number | null;
  longitude: number | null;
  /** Unix timestamp in milliseconds */
  timestamp: number | null;
};

export interface ExpoGeolocationModule {
  requestPermissions(): void;
  getCurrentCoordinates(): Promise<Coordinates>;
}
