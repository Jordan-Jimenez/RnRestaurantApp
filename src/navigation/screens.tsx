import React from 'react';

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import Header from '../components/Header';
import Dashboard from '../screens/Dashboard';
import OrderScheduling from '../screens/OrderScheduling';

export default [
  { name: 'Dashboard', component: Dashboard, options: { headerShown: false } },

  {
    name: 'Order Scheduling',
    component: OrderScheduling,
    options: {
      presentation: 'modal',
      header: () => <Header />,
    } as NativeStackNavigationOptions,
  },
];
