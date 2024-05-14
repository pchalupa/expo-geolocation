export default {
  requestPermissions() {},
  async getCurrentCoordinates() {
    return new Promise((resolve, reject) => {
      const handleSuccess = (position: GeolocationPosition) =>
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          timestamp: position.timestamp,
        });
      const handleReject = (error: GeolocationPositionError) => reject(error);

      navigator.geolocation.getCurrentPosition(handleSuccess, handleReject);
    });
  },
};
