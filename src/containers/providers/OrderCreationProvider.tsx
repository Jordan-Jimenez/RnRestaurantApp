import React, { createContext, FC, useContext, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import OrderCreation from '../../stores/OrderCreation';

const OrderCreationContext = createContext<OrderCreation | undefined>(
  undefined,
);

export const useOrderCreationContext = () => {
  const context = useContext(OrderCreationContext);

  if (!context) {
    throw Error('Can not use context outside of provider');
  }

  return context;
};

interface IOrderCreationArguments {
  orderType: 'pickup' | 'delivery';
}

const OrderCreationProvider: FC<IOrderCreationArguments> = ({
  children,
  orderType,
}) => {
  const viewModel = useMemo(() => new OrderCreation(orderType), []);

  return (
    <OrderCreationContext.Provider value={viewModel}>
      {children}
    </OrderCreationContext.Provider>
  );
};

export default observer(OrderCreationProvider);
