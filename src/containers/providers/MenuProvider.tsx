import React, { createContext, FC, useContext, useMemo } from 'react';

import { observer } from 'mobx-react-lite';

import Menu from '../../stores/Menu';

const MenuContext = createContext<Menu | undefined>(undefined);

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw Error('Can not use context outside of provider');
  }

  return context;
};

const MenuContextProvider: FC = ({ children }) => {
  const viewModel = useMemo(() => new Menu(), []);

  return (
    <MenuContext.Provider value={viewModel}>{children}</MenuContext.Provider>
  );
};

export default observer(MenuContextProvider);
