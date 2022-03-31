import axios from 'axios';

export default class Services {
  public async getStoreLocations() {
    return (
      await axios.get(
        'https://rn-restaurant-connection.herokuapp.com/locations',
      )
    ).data as StoreDetails[];
  }

  public async getStoreById(storeId?: string) {
    if (!storeId) {
      return;
    }

    return (
      await axios.get(
        `https://rn-restaurant-connection.herokuapp.com/locations/${storeId}`,
      )
    ).data as StoreDetails;
  }

  public async getMenuCategories(storeId?: string) {
    return (
      await axios.get(
        `https://rn-restaurant-connection.herokuapp.com/menu/categories?storeId=${storeId}`,
      )
    ).data as MenuCategory[];
  }

  public async getCategoryItems(categoryId?: string, storeId?: string) {
    if (!categoryId) {
      return [];
    }

    return (
      await axios.get(
        `https://rn-restaurant-connection.herokuapp.com/menu/items/category/${categoryId}?storeId=${storeId}`,
      )
    ).data as MenuItem[];
  }

  public async getMenuItemById(itemId?: string) {
    if (!itemId) {
      return;
    }

    return (
      await axios.get(
        `https://rn-restaurant-connection.herokuapp.com/menu/items/${itemId}`,
      )
    ).data as MenuItem;
  }

  public async getMenuItemImage(imageId?: string) {
    if (!imageId) {
      return;
    }

    return (
      await axios.get(
        `https://rn-restaurant-connection.herokuapp.com/menu/items/images/${imageId}`,
      )
    ).data as { name?: string; url?: string };
  }
}
