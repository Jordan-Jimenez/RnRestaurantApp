import axios from 'axios';

export default class Services {
  public async getStoreLocations() {
    const response = await axios.get(
      'https://rn-restaurant-connection.herokuapp.com/locations',
    );

    return response.data as StoreDetails[];
  }

  public async getStoreById(storeId?: string) {
    if (!storeId) {
      return;
    }

    const response = await axios.get(
      `https://rn-restaurant-connection.herokuapp.com/locations/${storeId}`,
    );

    return response.data as StoreDetails;
  }
}
