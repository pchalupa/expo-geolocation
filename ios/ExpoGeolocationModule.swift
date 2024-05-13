import ExpoModulesCore
import CoreLocation

public class ExpoGeolocationModule: Module {
    var locationManager: CLLocationManager?

    public func definition() -> ModuleDefinition {
        Name("ExpoGeolocation")

        OnCreate {
            self.locationManager = CoreLocation.CLLocationManager()
        }

        Function("requestPermissions") {
            self.locationManager?.requestWhenInUseAuthorization()
        }

        AsyncFunction("getCurrentCoordinates") { (promise: Promise) in
            let location = self.locationManager?.location
            
            promise.resolve([
                "latitude": location?.coordinate.latitude,
                "longitude": location?.coordinate.longitude,
                "timestamp": (location?.timestamp.timeIntervalSince1970 ?? 0.0) * 1_000
            ])
        }
    }
}
