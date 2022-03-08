import React from 'react';

import { StatusBar, useColorScheme, View } from 'react-native';

import ThemeProvider from './src/containers/providers/ThemeProvider';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <ThemeProvider>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

        <Dashboard />
      </ThemeProvider>
    </View>
  );
};

export default App;
