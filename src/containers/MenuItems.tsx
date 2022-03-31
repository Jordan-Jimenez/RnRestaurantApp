import React, { useEffect, useState } from 'react';

import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';
import { Dimensions, View } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import App from '../stores/App';
import { useMenuContext } from './providers/MenuProvider';
import MenuListItem from './MenuListItem';
import Box from '../components/@ui/Box';

const themedStyles = StyleService.create({
  container: {
    minHeight: Dimensions.get('screen').height,
    paddingBottom: 200,
  },
});

const MenuItems = () => {
  const menu = useMenuContext();

  const [fetchedWithCategory, setHasFetchedWithCategory] = useState(false);

  const { data, refetch, isFetching } = useQuery(
    'getCategoryItems',
    async () => {
      if (!menu.categories) {
        return;
      }

      setHasFetchedWithCategory(true);

      return App.services.getCategoryItems(
        menu.selectedCategory?.id || menu.categories?.[0].id,
        App.ongoingOrder?.store?.storeDetails.id,
      );
    },
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    menu.selectedCategory?.id,
    menu.categories,
    App.ongoingOrder?.store?.storeDetails.id,
  ]);

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      {(isFetching || !fetchedWithCategory) &&
        [...Array(3)].map((i, index) => (
          <Box key={index} mt={20}>
            <MenuListItem loading key={index} />
          </Box>
        ))}

      {!isFetching &&
        data?.map((item, index) => (
          <Box key={item.id || index} mt={20}>
            <MenuListItem item={item} key={item.id || index} />
          </Box>
        ))}
    </View>
  );
};

export default observer(MenuItems);
