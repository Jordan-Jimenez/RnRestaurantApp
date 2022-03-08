import { Alert } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, request } from 'react-native-permissions';

class UserLocation {
  constructor() {}

  public coordinates?: Coordinates;

  public async requestCoordinates() {
    const status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);

    if (status === 'granted') {
      this.getUserLocation();

      return;
    }

    await this.requestLocationPermissions();

    this.requestCoordinates();
  }

  private getUserLocation() {
    Geolocation.getCurrentPosition(
      info => {
        this.coordinates = {
          long: info.coords.longitude,
          lat: info.coords.latitude,
        };
      },
      error => {
        Alert.alert(`Unable to get location: ${error.message}`, undefined, [
          {
            text: 'Go Back',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Try Again', onPress: () => this.getUserLocation() },
        ]);
      },
      { timeout: 20000 },
    );
  }

  private async requestLocationPermissions() {
    await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  }
}

export default UserLocation;
