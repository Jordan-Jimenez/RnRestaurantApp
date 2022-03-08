import React from 'react';

import { StatusBar, useColorScheme } from 'react-native';

import ThemeProvider from './src/containers/providers/ThemeProvider';
import Dashboard from './src/screens/Dashboard';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <ThemeProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
