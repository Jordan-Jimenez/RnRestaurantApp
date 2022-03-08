import React from 'react';

import { observer } from 'mobx-react-lite';
import { Text } from '@ui-kitten/components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import BasicLayout from '../containers/layouts/BasicLayout';
import OrderSchedulingProvider from '../containers/providers/OrderSchedulingProvider';

export type OrderSchedulingScreenParms = {
  OrderCreation: {
    orderType: 'pickup' | 'delivery';
  };
};

interface Props
  extends NativeStackScreenProps<OrderSchedulingScreenParms, 'OrderCreation'> {}

const OrderSchedulingScreen = ({ route }: Props) => {
  return (
    <OrderSchedulingProvider>
      <BasicLayout>
        <Text>order scheduling</Text>
      </BasicLayout>
    </OrderSchedulingProvider>
  );
};

export default observer(OrderSchedulingScreen);
