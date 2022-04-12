import { action, computed, makeAutoObservable, observable } from 'mobx';

export default class CartItem {
  constructor(public item?: MenuItem) {
    makeAutoObservable(this);
  }

  @action
  public setItem(item?: MenuItem) {
    this.item = item;
  }

  @observable
  public itemId?: string;

  @action
  public setItemId(id?: string) {
    this.itemId = id;
  }

  @observable
  public quantity: number = 1;

  @action
  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  @observable
  public notes?: string;

  @action
  public setNotes(notes: string) {
    this.notes = notes;
  }

  @observable
  public itemOptions?: ItemOption[];

  @action
  public setItemOptions(options?: ItemOption[]) {
    this.itemOptions = options;

    let selectedOptions: { [key: string]: string } = {};

    options?.forEach(
      option => (selectedOptions[option.id] = option.values[0].id),
    );

    this.updateSelectedItemOptions(selectedOptions);
  }

  @observable
  public selectedItemOptions: { [key: string]: string } = {};

  @action
  public updateSelectedItemOptions(selectedOptions: any) {
    this.selectedItemOptions = selectedOptions;
  }

  @computed
  public get optionIds() {
    return [
      ...new Set(
        this.item?.variations
          ?.map(v => v.options!.map(o => o.itemOptionId).filter(o => !!o))
          .flat(),
      ),
    ];
  }

  @computed
  public get selectedVariation() {
    const selectedOptions = Object.entries(this.selectedItemOptions).map(
      option => {
        return { itemOptionId: option[0], itemOptionValueId: option[1] };
      },
    );

    return this.item?.variations?.find(v => {
      const hasAllOptions = selectedOptions.map(option => {
        return v.options?.find(
          o =>
            o.itemOptionId === option.itemOptionId &&
            o.itemOptionValueId === option.itemOptionValueId,
        );
      });

      return !hasAllOptions.includes(undefined);
    });
  }

  @computed
  public get subtotal() {
    return (
      parseFloat(this.selectedVariation?.price || '0') * this.quantity
    ).toString();
  }
}
