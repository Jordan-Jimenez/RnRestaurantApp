import React, { FC } from 'react';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

import ActionButton from '../../components/ActionButton';
import formatDollar from '../../core/utils/formatDollar';
import { useCartItemContext } from '../providers/CartItemProvider';
import App from '../../stores/App';

interface IAddToCartButton {
  cartItemToEditUID?: string;
}

const AddToCartButton: FC<IAddToCartButton> = ({ cartItemToEditUID }) => {
  const item = useCartItemContext();

  const navigation = useNavigation();

  const addToCart = () => {
    if (cartItemToEditUID) {
      App.ongoingOrder?.removeItemFromCart(cartItemToEditUID);
    }

    if (item.item) {
      App.ongoingOrder?.addItemToCart(item);
    }

    navigation.goBack();
  };

  return (
    <ActionButton
      action={addToCart}
      title={cartItemToEditUID ? 'Update' : 'Add to Cart'}
      secondaryTitle={formatDollar(item.subtotal)}
    />
  );
};

export default observer(AddToCartButton);
