import React, { FC } from 'react';

import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { View } from 'react-native';

import formatDollar from '../../core/utils/formatDollar';

const themedStyles = StyleService.create({
  container: {
    padding: 20,
    backgroundColor: 'color-primary-200',
    borderRadius: 10,
    width: '100%',
  },
  text: {
    color: 'text-control-color',
    fontWeight: '800',
  },
  price: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

interface IPriceBreakdownProps {
  subtotal?: number;
}

const PriceBreakdown: FC<IPriceBreakdownProps> = ({ subtotal }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <View style={styles.price}>
        <Text style={styles.text} category={'h5'}>
          Subtotal:
        </Text>

        <Text style={styles.text} category={'h5'}>
          {formatDollar(subtotal)}
        </Text>
      </View>
    </View>
  );
};

export default PriceBreakdown;
