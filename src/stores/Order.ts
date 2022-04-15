import { DateTime } from 'luxon';
import { makeAutoObservable, observable, action, computed } from 'mobx';

import CartItem from './CartItem';
import Store from './Store';

export default class Order {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  public store?: Store;

  @observable
  public fulfillmentType?: 'pickup' | 'delivery';

  @observable
  public fulfillmentTimeSlot?: {
    start: DateTime;
    end: DateTime;
  };

  @observable
  public tip: number = 0;

  @observable
  public cart: CartItem[] = [];

  @action
  public setStore(s: Store) {
    this.store = s;
  }

  @action
  public setFulfillmentType(type: 'pickup' | 'delivery') {
    this.fulfillmentType = type;
  }

  @action
  public setFulFillmentTimeSlot(timeSlot?: { start: DateTime; end: DateTime }) {
    this.fulfillmentTimeSlot = timeSlot;
  }

  @action
  public setTip(amountInPennies: number) {
    this.tip = amountInPennies;
  }

  public addItemToCart(item: CartItem) {
    this.cart.push(item);
  }

  @action
  public removeItemFromCart(uid: string) {
    const index = this.cart.findIndex(item => item.uid === uid);

    this.cart.splice(index, 1);
  }

  @computed
  public get subtotal() {
    let subtotal: number = 0;

    this.cart.forEach(item => (subtotal += item.subtotal));

    return subtotal;
  }
}
