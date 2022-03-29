import React from 'react';

import { observer } from 'mobx-react-lite';

import Layout from '../containers/layouts/BasicLayout';
import OrderSchedulingInputs from '../containers/order/OrderSchedulingInputs';
import ViewCartButton from '../containers/buttons/ViewCartButton';

const NewOrderScreen = () => {
  // should make a button prompting users to enable location services if disable
  return (
    <Layout actionButton={<ViewCartButton />}>
      <OrderSchedulingInputs />
    </Layout>
  );
};

export default observer(NewOrderScreen);
