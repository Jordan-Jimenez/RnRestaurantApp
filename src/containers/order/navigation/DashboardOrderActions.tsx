import React from 'react';

import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import Box from '../../../components/@ui/Box';
import NewOrderActionsBackground from '../../../components/order/NewOrderActionsBackground';
import NewOrderIcon from '../../../components/@ui/icons/NewOrderIcon';
import NewOrderTypeButtons from '../NewOrderTypeButtons';

const themedStyles = StyleService.create({
  text: {
    color: 'color-primary-100',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  actionsContainer: {
    width: '100%',
  },
});

const DashboardOrderActions = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.text} category="h5">
        Place a new order
      </Text>

      <Box mt={25} mb={40}>
        <View style={styles.container}>
          <NewOrderIcon />

          <NewOrderActionsBackground />

          <NewOrderTypeButtons />
        </View>
      </Box>
    </View>
  );
};

export default DashboardOrderActions;
