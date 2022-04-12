import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { observer } from 'mobx-react-lite';

import ActionButton from '../../components/ActionButton';
import App from '../../stores/App';
import formatDollar from '../../core/utils/formatDollar';

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
      secondaryTitle={formatDollar(
        App.ongoingOrder?.subtotal.toString() || '0',
      )}
      action={viewCart}
    />
  );
};

export default observer(ViewCartButton);
