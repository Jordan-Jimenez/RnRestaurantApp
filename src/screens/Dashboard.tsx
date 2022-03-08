import React from 'react';

import { View } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import BasicLayout from '../containers/layouts/BasicLayout';
import Header from '../containers/headers/DashboardHeader';
import DashboardOrderActions from '../containers/order/navigation/DashboardOrderActions';
import Box from '../components/@ui/Box';
import FoodTruckIcon from '../components/@ui/icons/FoodTruckIcon';

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
});

const Dashboard = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <BasicLayout>
      <View style={styles.container}>
        <Header />

        <Box alignContent="center">
          <FoodTruckIcon />
        </Box>

        <DashboardOrderActions />
      </View>
    </BasicLayout>
  );
};

export default Dashboard;
