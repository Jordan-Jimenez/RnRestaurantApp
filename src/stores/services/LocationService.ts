import { Location as SquareLocation } from 'square';

import getDistance from 'geolib/es/getDistance';

class LocationService {
  public formatSquareLocation(location: SquareLocation) {
    return {
      streetAddress: location?.address?.addressLine1,
      city: location?.address?.locality,
      state: location?.address?.administrativeDistrictLevel1,
      zipCode: location?.address?.postalCode,
      coordinates: location?.coordinates,
    } as StoreLocation;
  }

  public sortByDistance(
    ref: { longitude: number; latitude: number },
    locations: StoreLocation[],
  ) {
    const locationsWithDistance = this.getDistances(ref, locations);

    if (!locationsWithDistance || locationsWithDistance?.length < 1) {
      return;
    }

    locationsWithDistance.sort((a, b) => a.distance! - b.distance!);

    return locationsWithDistance;
  }

  private getDistances(
    ref: { longitude: number; latitude: number },
    locations: StoreLocation[],
  ) {
    let locationsWithDistance: StoreLocation[] = [];

    for (let i = 0; i < locations.length; i++) {
      const coords = locations[i].coordinates;

      if (!coords || !coords.latitude || !coords.longitude) {
        return;
      }

      locations[i].distance = this.distanceBetweenCoords(ref, {
        longitude: coords.longitude!,
        latitude: coords.latitude,
      });

      locationsWithDistance.push(locations[i]);
    }

    return locationsWithDistance;
  }

  private distanceBetweenCoords(
    ref: { longitude: number; latitude: number },
    location: { longitude: number; latitude: number },
  ) {
    return getDistance(ref, location);
  }
}

export default LocationService;
