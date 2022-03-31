import React, { useEffect } from 'react';

import { FlatList, View } from 'react-native';
import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import App from '../stores/App';
import { useMenuContext } from './providers/MenuProvider';
import MenuCategoryButton from './buttons/MenuCategoryButton';
import Box from '../components/@ui/Box';

const themedStyles = StyleService.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'color-basic-default',
    backgroundColor: 'background-basic-color-1',
  },
});

const MenuCategories = () => {
  const menu = useMenuContext();

  const { refetch, isFetching } = useQuery('getMenuCategories', async () => {
    menu.setCategories(
      await App.services.getMenuCategories(
        App.ongoingOrder?.store?.storeDetails.id,
      ),
    );
  });

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [App.ongoingOrder?.store?.storeDetails.id]);

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => item?.id || 'category' + index}
        data={isFetching ? [...Array(4)] : menu.categories}
        renderItem={({ item, index }) => (
          <Box
            width="auto"
            ml={index === 0 ? 20 : 30}
            mr={
              menu.categories && index === menu.categories?.length - 1 ? 20 : 0
            }>
            <MenuCategoryButton loading={isFetching} item={item} />
          </Box>
        )}
      />
    </View>
  );
};

export default observer(MenuCategories);
