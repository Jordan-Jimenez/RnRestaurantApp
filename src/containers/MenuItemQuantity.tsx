import React, { FC } from 'react';

import { Text } from '@ui-kitten/components';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

import IconButton from '../components/@ui/IconButton';
import AddIcon from '../components/@ui/icons/AddIcon';
import MinusIcon from '../components/@ui/icons/MinusIcon';
import { useCartItemContext } from './providers/CartItemProvider';
import Box from '../components/@ui/Box';

import { StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  quantityContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderRadius: 100,
    borderColor: 'color-basic-default',
    padding: 5,
  },
});

interface IMenuItemQuantityProps {
  loading?: boolean;
}

const MenuItemQuantity: FC<IMenuItemQuantityProps> = ({ loading = false }) => {
  const cartItem = useCartItemContext();

  const increment = () => {
    if (loading) {
      return;
    }

    cartItem.setQuantity(cartItem.quantity + 1);
  };

  const decrement = () => {
    if (loading || cartItem.quantity === 1) {
      return;
    }

    cartItem.setQuantity(cartItem.quantity - 1);
  };

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.quantityContainer}>
      <IconButton
        width={50}
        height={40}
        icon={<MinusIcon />}
        onPress={decrement}
      />

      <Box alignContent="center" width={50}>
        <Text category="h3">{cartItem.quantity}</Text>
      </Box>

      <IconButton
        width={50}
        height={40}
        icon={<AddIcon />}
        onPress={increment}
      />
    </View>
  );
};

export default observer(MenuItemQuantity);
