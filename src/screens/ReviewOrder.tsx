import React from 'react';

import Box from '../components/@ui/Box';

import ContinueToPaymentButton from '../containers/buttons/ContinueToPaymentButton';
import OrderSchedlingHeader from '../containers/headers/OrderSchedlingHeader';
import Layout from '../containers/layouts/Layout';
import Cart from '../containers/order/Cart';
import OrderSchedulingInputs from '../containers/order/OrderSchedulingInputs';

const ReviewOrder = () => {
  return (
    <Layout noSafeArea actionButton={<ContinueToPaymentButton />}>
      <OrderSchedlingHeader small />

      <Box borderBottom>
        <OrderSchedulingInputs />
      </Box>

      <Cart />
    </Layout>
  );
};

export default ReviewOrder;
