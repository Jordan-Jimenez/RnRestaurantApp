import { action, makeAutoObservable, observable } from 'mobx';

export default class CartItem {
  constructor(public item?: MenuItem) {
    makeAutoObservable(this);
  }
  @observable
  public itemId?: string;

  @observable
  public variation: number = 0;

  @observable
  public quantity: number = 1;

  @observable
  public notes?: string;

  @action
  public setItemId(id?: string) {
    this.itemId = id;
  }

  @action
  public setItem(item?: MenuItem) {
    this.item = item;
  }

  @action
  public setVariation(variation: number) {
    this.variation = variation;
  }

  @action
  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  @action
  public setNotes(notes: string) {
    this.notes = notes;
  }
}
