import { action, makeAutoObservable, observable } from 'mobx';

export default class Menu {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  categories?: MenuCategory[];

  public setCategories(categories?: MenuCategory[]) {
    this.categories = categories;
  }

  @observable
  public selectedCategory?: MenuCategory;

  @action
  public selectCategory(categoryId?: string) {
    this.selectedCategory = categoryId
      ? this.categories?.find(c => c.id === categoryId)
      : undefined;
  }
}
