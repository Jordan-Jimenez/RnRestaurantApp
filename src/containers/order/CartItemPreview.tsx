import React, { FC, useCallback } from 'react';

import { Alert, TouchableOpacity, View } from 'react-native';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';

import Box from '../../components/@ui/Box';
import formatDollar from '../../core/utils/formatDollar';
import CartItem from '../../stores/CartItem';
import IconButton from '../../components/@ui/IconButton';
import TrashIcon from '../../components/@ui/icons/TrashIcon';
import App from '../../stores/App';
import MenuItemImage from '../MenuItemImage';

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    flex: 1,
  },
  info: {
    flex: 4,
    paddingLeft: 15,
  },
  button: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

interface ICartItemPreviewProps {
  item: CartItem;
}

const CartItemPreview: FC<ICartItemPreviewProps> = ({ item }) => {
  const styles = useStyleSheet(themedStyles);

  const navigation = useNavigation();

  const editItem = () => {
    //@ts-ignore
    navigation.navigate('DetailedMenuItem', {
      itemId: item.item?.id,
      cartItemToEdit: item,
    });
  };

  const removeItem = useCallback(() => {
    Alert.alert('Remove Item?', undefined, [
      { text: 'Cancel' },
      {
        text: 'Confirm',
        onPress: () => App.ongoingOrder?.removeItemFromCart(item.uid),
      },
    ]);
  }, [item.uid]);

  return (
    <TouchableOpacity onPress={editItem} style={styles.container}>
      <View style={styles.image}>
        <MenuItemImage height={60} width={60} imageId={item.item?.imageId} />
      </View>

      <View style={styles.info}>
        <Box mb={10}>
          <Text category="p1">
            {item.quantity +
              'x - ' +
              (item.item?.variations && item.item?.variations.length > 1
                ? item.variation?.name
                : item.item?.name)}
          </Text>
        </Box>

        <Text category="p2">{formatDollar(item.subtotal)}</Text>
      </View>

      <View style={styles.button}>
        <IconButton icon={<TrashIcon size={25} />} onPress={removeItem} />
      </View>
    </TouchableOpacity>
  );
};

export default observer(CartItemPreview);
