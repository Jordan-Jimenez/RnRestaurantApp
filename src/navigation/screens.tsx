import React from 'react';

import { NativeStackNavigationOptions } from '@react-navigation/native-stack';

import Dashboard from '../screens/Dashboard';
import NewOrderScreen from '../screens/NewOrderScreen';
import StoreSelect from '../screens/StoreSelect';
import DetailedMenuItem from '../screens/DetailedMenuItem';
import ReviewOrder from '../screens/ReviewOrder';
import ModalHeader from '../containers/headers/ModalHeader';
import ConfirmOrder from '../screens/ConfirmOrder';

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
      header: () => <ModalHeader title="Select pickup location" />,
    } as NativeStackNavigationOptions,
  },
  {
    name: 'DetailedMenuItem',
    component: DetailedMenuItem,
    options: {
      presentation: 'modal',
      headerShown: false,
    } as NativeStackNavigationOptions,
  },
  {
    name: 'ReviewOrder',
    component: ReviewOrder,
    options: {
      presentation: 'modal',
      header: () => <ModalHeader title="Review Order" />,
    } as NativeStackNavigationOptions,
  },
  {
    name: 'ConfirmOrder',
    component: ConfirmOrder,
    options: {
      contentStyle: {
        backgroundColor: 'transparent',
      },
      presentation: 'modal',
      headerShown: false,
    } as NativeStackNavigationOptions,
  },
];
