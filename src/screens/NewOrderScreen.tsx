import React from 'react';

import { observer } from 'mobx-react-lite';

import Layout from '../containers/layouts/BasicLayout';
import OrderSchedulingInputs from '../containers/order/OrderSchedulingInputs';
import ViewCartButton from '../containers/buttons/ViewCartButton';
import OrderSchedlingHeader from '../containers/headers/OrderSchedlingHeader';
import MenuCategories from '../containers/MenuCategories';
import MenuItems from '../containers/MenuItems';
import MenuContextProvider from '../containers/providers/MenuProvider';
import Box from '../components/@ui/Box';

const NewOrderScreen = () => {
  return (
    <MenuContextProvider>
      <Layout noSafeArea actionButton={<ViewCartButton />}>
        <OrderSchedlingHeader />

        <Box borderBottom>
          <OrderSchedulingInputs />
        </Box>

        <MenuCategories />

        <MenuItems />
      </Layout>
    </MenuContextProvider>
  );
};

export default observer(NewOrderScreen);
