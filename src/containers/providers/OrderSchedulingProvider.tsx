import React, { createContext, FC, useContext, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import OrderScheduling from '../../stores/view-models/OrderScheduling';

const OrderSchedulingContext = createContext<OrderScheduling | undefined>(
  undefined,
);

export const useOrderSchedulingContext = () => {
  const context = useContext(OrderSchedulingContext);

  if (!context) {
    throw Error('Can not use context outside of provider');
  }

  return context;
};

const OrderSchedulingProvider: FC = ({ children }) => {
  const viewModel = useMemo(() => new OrderScheduling(), []);

  return (
    <OrderSchedulingContext.Provider value={viewModel}>
      {children}
    </OrderSchedulingContext.Provider>
  );
};

export default observer(OrderSchedulingProvider);
