import axios from 'axios';
import config from '../../config';

export default class Services {
  public async getStoreLocations() {
    return (await axios.get(`${config.API_BASE_URL}/locations`))
      .data as StoreDetails[];
  }

  public async getStoreById(storeId?: string) {
    if (!storeId) {
      return;
    }

    return (await axios.get(`${config.API_BASE_URL}/locations/${storeId}`))
      .data as StoreDetails;
  }

  public async getMenuCategories(storeId?: string) {
    return (
      await axios.get(
        `${config.API_BASE_URL}/menu/categories?storeId=${storeId}`,
      )
    ).data as MenuCategory[];
  }

  public async getCategoryItems(categoryId?: string, storeId?: string) {
    if (!categoryId) {
      return [];
    }

    return (
      await axios.get(
        `${config.API_BASE_URL}/menu/items/category/${categoryId}?storeId=${storeId}`,
      )
    ).data as MenuItem[];
  }

  public async getMenuItemById(itemId?: string) {
    if (!itemId) {
      return;
    }

    return (await axios.get(`${config.API_BASE_URL}/menu/items/${itemId}`))
      .data as MenuItem;
  }

  public async getMenuItemImage(imageId?: string) {
    if (!imageId) {
      return;
    }

    return (
      await axios.get(`${config.API_BASE_URL}/menu/items/images/${imageId}`)
    ).data as { name?: string; url?: string };
  }

  public async getMenuItemOptions(optionIds?: string[]) {
    if (!optionIds || optionIds.length < 1) {
      return [];
    }

    return (
      await axios.get(`${config.API_BASE_URL}/menu/item-options`, {
        params: {
          optionIds,
        },
      })
    ).data as ItemOption[];
  }
}
