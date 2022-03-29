import React from 'react';

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import NewOrderScreen from '../screens/NewOrderScreen';
import StoreSelect from '../screens/StoreSelect';
import SelectLocationHeader from '../containers/headers/SelectLocationHeader';

export default [
  { name: 'Dashboard', component: Dashboard, options: { headerShown: false } },

  {
    name: 'New Order',
    component: NewOrderScreen,
    options: {
      headerBackTitleVisible: false,
      headerTitle: '',
      headerTintColor: '#000',
    } as NativeStackNavigationOptions,
  },

  {
    name: 'StoreSelect',
    component: StoreSelect,
    options: {
      presentation: 'modal',
      header: () => <SelectLocationHeader />,
    } as NativeStackNavigationOptions,
  },
];
