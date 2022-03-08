import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AuthenticatedScreens from './screens';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator>
      {AuthenticatedScreens.map(item => (
        <Stack.Screen
          name={item.name}
          component={item.component}
          options={item.options as any}
          key={item.name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default MainStack;
