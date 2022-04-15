import { action, computed, makeAutoObservable, observable } from 'mobx';
import uuid from 'react-native-uuid';

export default class CartItem {
  constructor(public item?: MenuItem, private itemToEdit?: CartItem) {
    makeAutoObservable(this);

    this.uid = uuid.v4().toString();

    if (this.itemToEdit) {
      this.selectedOptionValues = JSON.parse(
        this.itemToEdit.variationOptionValues,
      );

      this.quantity = this.itemToEdit.quantity;
    }
  }

  public uid: string;

  @observable
  public quantity: number = 1;

  @action
  public setQuantity(quantity: number) {
    this.quantity = quantity;
  }

  @observable
  public options?: ItemOption[];

  @action
  public setOptions(options?: ItemOption[]) {
    this.options = options;
  }

  @observable
  public selectedOptionValues?: { [key: string]: string };

  @action
  public setSelectedOptionValues(selectedValues: any) {
    this.selectedOptionValues = selectedValues;
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
  private get defaultVariationOptionValues() {
    let selectedOptions: { [key: string]: string } = {};

    this.options?.forEach(
      option => (selectedOptions[option.id] = option.values[0].id),
    );

    return selectedOptions;
  }

  @computed
  public get variationOptionValues() {
    if (this.selectedOptionValues) {
      return JSON.stringify(
        Object.assign(
          this.defaultVariationOptionValues,
          this.selectedOptionValues,
        ),
      );
    }

    if (this.options) {
      return JSON.stringify(this.defaultVariationOptionValues);
    }

    return '{}';
  }

  @computed
  public get variation() {
    const obj = JSON.parse(this.variationOptionValues);

    const selectedOptions = Object.entries(obj).map(option => {
      return { itemOptionId: option[0], itemOptionValueId: option[1] };
    });

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
    return parseFloat(this.variation?.price || '0') * this.quantity;
  }
}
