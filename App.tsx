import React from 'react';

import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ThemeProvider from './src/containers/providers/ThemeProvider';
import MainStack from './src/navigation/MainStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <MainStack />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
