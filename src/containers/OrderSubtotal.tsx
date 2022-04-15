import React from 'react';

import { observer } from 'mobx-react-lite';

import PriceBreakdown from '../components/order/PriceBreakdown';
import App from '../stores/App';
import Box from '../components/@ui/Box';

const OrderSubtotal = () => {
  return (
    <>
      {App.ongoingOrder?.cart && App.ongoingOrder?.cart.length > 0 && (
        <Box width={'100%'} mt={20} pl={10} pr={10}>
          <PriceBreakdown subtotal={App.ongoingOrder?.subtotal} />
        </Box>
      )}
    </>
  );
};

export default observer(OrderSubtotal);
