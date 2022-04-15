import React from 'react';

import { observer } from 'mobx-react-lite';
import { View } from 'react-native';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';

import Box from '../../components/@ui/Box';
import CartIcon from '../../components/@ui/icons/CartIcon';
import App from '../../stores/App';
import CartItemPreview from './CartItemPreview';

const themedStyles = StyleService.create({
  emptyContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 75,
  },
  emptyText: { textAlign: 'center' },
});

const Cart = () => {
  const cart = App.ongoingOrder?.cart;

  const styles = useStyleSheet(themedStyles);

  return (
    <>
      {!cart || cart?.length < 1 ? (
        <View style={styles.emptyContainer}>
          <Box alignContent="center" width={150}>
            <CartIcon />
            <Text appearance={'hint'} category="s1" style={styles.emptyText}>
              Your Cart is Currently Empty
            </Text>
          </Box>
        </View>
      ) : (
        <Box pl={20} pr={20} mt={20}>
          <Text category="h3">Items</Text>

          {cart?.map((item, index) => (
            <Box
              key={item.uid}
              mt={15}
              pb={15}
              borderBottom={index < cart.length - 1}>
              <CartItemPreview item={item} />
            </Box>
          ))}
        </Box>
      )}
    </>
  );
};

export default observer(Cart);
