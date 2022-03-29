import { Alert, Platform } from 'react-native';
import { action, makeAutoObservable, observable } from 'mobx';
import Geolocation from '@react-native-community/geolocation';
import { check, PERMISSIONS, request } from 'react-native-permissions';

import Order from './Order';
import Services from './Services';

class App {
  constructor() {
    makeAutoObservable(this);
  }

  public services: Services = new Services();

  @observable
  public ongoingOrder?: Order;

  @observable
  public deviceLocation?: {
    longitude: number;
    latitude: number;
  };

  @action
  public startNewOngoingOrder() {
    this.ongoingOrder = new Order();
  }

  @action
  public async retrieveDeviceLocation() {
    const status = await check(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.LOCATION_WHEN_IN_USE
        : PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
    );

    if (status === 'granted') {
      this.getDeviceLocation();

      return;
    }

    if (status === 'blocked') {
      return;
    }

    await this.requestLocationPermissions();

    this.retrieveDeviceLocation();
  }

  private getDeviceLocation() {
    Geolocation.getCurrentPosition(
      info => {
        this.deviceLocation = info.coords;
      },
      error => {
        Alert.alert(`Unable to get location: ${error.message}`, undefined, [
          {
            text: 'Go Back',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          { text: 'Try Again', onPress: () => this.getDeviceLocation() },
        ]);
      },
    );
  }

  private async requestLocationPermissions() {
    await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  }
}

export default new App();
