import React from 'react';

import Box from '../components/@ui/Box';

import ContinueToPaymentButton from '../containers/buttons/ContinueToPaymentButton';
import OrderSchedlingHeader from '../containers/headers/OrderSchedlingHeader';
import BasicLayout from '../containers/layouts/BasicLayout';
import Cart from '../containers/order/Cart';
import OrderSchedulingInputs from '../containers/order/OrderSchedulingInputs';

const ReviewOrder = () => {
  return (
    <BasicLayout noSafeArea actionButton={<ContinueToPaymentButton />}>
      <OrderSchedlingHeader small />

      <Box borderBottom>
        <OrderSchedulingInputs />
      </Box>

      <Cart />
    </BasicLayout>
  );
};

export default ReviewOrder;
