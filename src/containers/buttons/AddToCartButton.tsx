import React from 'react';

import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

import ActionButton from '../../components/ActionButton';
import formatDollar from '../../core/utils/formatDollar';
import { useCartItemContext } from '../providers/CartItemProvider';
import App from '../../stores/App';

const AddToCartButton = () => {
  const item = useCartItemContext();

  const navigation = useNavigation();

  const addToCart = () => {
    if (item.item) {
      App.ongoingOrder?.addItemToCart(item);
    }

    navigation.goBack();
  };

  return (
    <ActionButton
      action={addToCart}
      title="Add to Cart"
      secondaryTitle={formatDollar(item.subtotal || '0')}
    />
  );
};

export default observer(AddToCartButton);
