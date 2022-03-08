import axios from 'axios';
import { Location } from 'square/dist/models/location';

class LocationRequests {
  public async getStoreLocations() {
    const response = await axios.get(
      'https://rn-restaurant-connection.herokuapp.com/locations',
    );

    return response.data.locations as Location[];
  }
}

export default LocationRequests;
