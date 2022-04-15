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

    //@ts-ignore
    navigation.navigate('ReviewOrder');
  };

  return (
    <>
      {App.ongoingOrder?.cart && App.ongoingOrder?.cart.length > 0 && (
        <ActionButton
          title="View Cart"
          secondaryTitle={formatDollar(App.ongoingOrder?.subtotal)}
          action={viewCart}
        />
      )}
    </>
  );
};

export default observer(ViewCartButton);
