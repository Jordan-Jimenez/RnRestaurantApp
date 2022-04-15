import React, { createContext, FC, useContext, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import CartItem from '../../stores/CartItem';

const CartItemContext = createContext<CartItem | undefined>(undefined);

export const useCartItemContext = () => {
  const context = useContext(CartItemContext);

  if (!context) {
    throw Error('Can not use context outside of provider');
  }

  return context;
};

interface ProviderProps {
  item?: MenuItem;
  cartItemToEdit?: CartItem;
}

const CartItemContextProvider: FC<ProviderProps> = ({
  item,
  children,
  cartItemToEdit,
}) => {
  const viewModel = useMemo(() => {
    return new CartItem(item, cartItemToEdit);
  }, [item, cartItemToEdit]);

  return (
    <CartItemContext.Provider value={viewModel}>
      {children}
    </CartItemContext.Provider>
  );
};

export default observer(CartItemContextProvider);
