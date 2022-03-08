import React from 'react';

import { View } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import OrderBackground from './OrderBackground';
import OrderIcon from './OrderIcon';

const themedStyles = StyleService.create({
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 40,
  },
  iconContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

const NewOrderIcon = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <OrderIcon width={19} height={25} />
      </View>
      <OrderBackground />
    </View>
  );
};

export default NewOrderIcon;
