import React, { createContext, FC, useContext, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import OrderTimeSelector from '../../stores/OrderTimeSelector';
import Store from '../../stores/Store';

const OrderTimeSelectorContext = createContext<OrderTimeSelector | undefined>(
  undefined,
);

export const useOrderTimeSelectorContext = () => {
  const context = useContext(OrderTimeSelectorContext);

  if (!context) {
    throw Error('Can not use context outside of provider');
  }

  return context;
};

interface ProviderProps {
  store: Store;
}

const OrderTimeSelectorContextProvider: FC<ProviderProps> = ({
  store,
  children,
}) => {
  const viewModel = useMemo(() => new OrderTimeSelector(store), [store]);

  return (
    <OrderTimeSelectorContext.Provider value={viewModel}>
      {children}
    </OrderTimeSelectorContext.Provider>
  );
};

export default observer(OrderTimeSelectorContextProvider);
