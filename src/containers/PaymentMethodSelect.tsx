import React from 'react';
import { View } from 'react-native';

import { Text } from '@ui-kitten/components';

import Box from '../components/@ui/Box';
import CreditCardIcon from '../components/@ui/icons/CreditCardIcon';

import { StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  container: {
    width: '100%',
    borderTopWidth: 1,
    paddingVertical: 20,
    borderColor: '#E5E5E5',
  },
  cardContainer: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { fontWeight: '800' },
});

const PaymentMethodSelect = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title} category={'s1'}>
        Payment Method
      </Text>

      <View style={styles.cardContainer}>
        <CreditCardIcon size={30} />

        <Box ml={15}>
          <Text>**** **** **** 1234</Text>
        </Box>
      </View>
    </View>
  );
};

export default PaymentMethodSelect;
