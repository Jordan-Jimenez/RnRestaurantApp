import { action, computed, makeAutoObservable, observable } from 'mobx';

import User from '../app/User';
import LocationService from '../services/LocationService';
import LocationRequests from '../../network/api/locations/LocationRequests';

class OrderScheduling {
  constructor() {
    this.getUserLocation();

    this.getStoreLocations();

    makeAutoObservable(this);
  }

  private locationService = new LocationService();

  @observable
  private storeLocations: StoreLocation[] = [];

  private async getUserLocation() {
    await User.location.request();
  }

  @action
  private async getStoreLocations() {
    const locations = await new LocationRequests().getStoreLocations();

    let storeLocations: StoreLocation[] = [];

    locations.forEach(location => {
      storeLocations.push(this.locationService.formatSquareLocation(location));
    });

    this.storeLocations = storeLocations;
  }

  @computed
  public get stores() {
    if (!User.location.coordinates) {
      return this.storeLocations;
    }

    return this.locationService.sortByDistance(
      {
        latitude: User.location.coordinates.lat,
        longitude: User.location.coordinates.long,
      },
      this.storeLocations,
    );
  }
}

export default OrderScheduling;
