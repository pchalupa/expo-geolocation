package expo.modules.geolocation

import android.Manifest
import com.google.android.gms.location.*
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import expo.modules.kotlin.Promise
import expo.modules.kotlin.exception.toCodedException

class ExpoGeolocationModule : Module() {
  private lateinit var fusedLocationManager: FusedLocationProviderClient

  override fun definition() = ModuleDefinition {
    Name("ExpoGeolocation")

    OnCreate {
      fusedLocationManager = LocationServices.getFusedLocationProviderClient(appContext.currentActivity)
    }

    Function("requestPermissions") {
      appContext.permissions?.askForPermissions({}, Manifest.permission.ACCESS_FINE_LOCATION, Manifest.permission.ACCESS_COARSE_LOCATION)
    }

    AsyncFunction("getCurrentCoordinates") { promise: Promise ->
      try {
        fusedLocationManager.lastLocation.addOnSuccessListener { location ->
          promise.resolve(
            mapOf(
              "latitude" to location?.latitude,
              "longitude" to location?.longitude,
              "timestamp" to location?.time
            )
          )
        }.addOnFailureListener {
          promise.reject(it.toCodedException())
        }
      } catch (e: SecurityException) {
        promise.reject(e.toCodedException())
      }
    }
  }
}
