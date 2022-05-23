import React, { useEffect } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';

import Layout from '../containers/layouts/Layout';
import StoreLocationList from '../containers/lists/StoreLocationList';
import App from '../stores/App';

export type OrderSchedulingScreenParms = {
  SelectStore: {
    pageToNavigate: string;
  };
};

export interface StoreSelectProps
  extends NativeStackScreenProps<OrderSchedulingScreenParms, 'SelectStore'> {}

const OrderLocationSelect = ({}: StoreSelectProps) => {
  const getUserLocation = async () => {
    await App.retrieveDeviceLocation();
  };

  useEffect(() => {
    if (!App.deviceLocation) {
      getUserLocation();
    }
  }, []);

  return (
    <Layout noSafeArea>
      {/* button to reprompt the user to enable location services if they have not already */}

      <StoreLocationList />
    </Layout>
  );
};

export default observer(OrderLocationSelect);
