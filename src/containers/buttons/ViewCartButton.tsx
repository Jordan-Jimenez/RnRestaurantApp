import React from 'react';

import { useNavigation } from '@react-navigation/native';

import ActionButton from '../../components/ActionButton';
import App from '../../stores/App';

const ViewCartButton = () => {
  const navigation = useNavigation();

  const viewCart = () => {
    if (
      !App.ongoingOrder?.fulfillmentTimeSlot &&
      App.ongoingOrder?.store?.nextEstimatedPickUpTimeInterval
    ) {
      App.ongoingOrder.setFulFillmentTimeSlot(
        App.ongoingOrder?.store?.nextEstimatedPickUpTimeInterval,
      );
    }

    navigation.navigate('');
  };

  return (
    // convert subtotal to dollar format string
    <ActionButton
      title="View Cart"
      secondaryTitle={App.ongoingOrder?.subtotal.toString()}
      action={viewCart}
    />
  );
};

export default ViewCartButton;
