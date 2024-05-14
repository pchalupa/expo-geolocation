# Expo Geolocation

Demo Expo Native Modules at [STRV](https://www.strv.com/) React Native Meetup.

# API documentation

```ts
/**
 * Requests permissions to access location data.
 */
declare function requestPermissions(): void;

/**
 * Returns the current device's location.
 */
declare function getCurrentCoordinates(): Promise<Coordinates>;
```
