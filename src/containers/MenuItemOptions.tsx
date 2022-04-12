import React, { useEffect } from 'react';

import { Text } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native';
import { useQuery } from 'react-query';

import App from '../stores/App';
import { useCartItemContext } from './providers/CartItemProvider';
import MenuItemOptionValue from './MenuItemOptionValue';
import Box from '../components/@ui/Box';
import Skeleton from '../components/@ui/Skeleton';

const MenuItemOptions = () => {
  const cartItem = useCartItemContext();

  const { refetch, isFetching } = useQuery('getMenuItemOptions', async () => {
    cartItem.setItemOptions(
      await App.services.getMenuItemOptions(cartItem.optionIds),
    );
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItem.item?.id]);

  return (
    <>
      {isFetching &&
        [...Array(2)].map((_, index) => (
          <View key={index}>
            <Box mb={20} mt={20}>
              <Skeleton type="text" textCategory="h4" width={100} />
            </Box>
            {[...Array(3)].map((__, i) => (
              <MenuItemOptionValue key={i + 'value'} loading />
            ))}
          </View>
        ))}

      {!isFetching && (
        <Box>
          {cartItem.itemOptions?.map(o => (
            <View key={o.id}>
              <Box mb={20} mt={20}>
                <Text category="h4">{`Choose a ${o.name}`}</Text>
              </Box>
              {o.values.map(v => (
                <MenuItemOptionValue
                  key={v.id}
                  optionValue={v}
                  optionId={o.id}
                />
              ))}
            </View>
          ))}
        </Box>
      )}
    </>
  );
};

export default observer(MenuItemOptions);
