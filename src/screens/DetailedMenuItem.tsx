import React, { useEffect } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from 'react-query';

import BasicLayout from '../containers/layouts/BasicLayout';
import App from '../stores/App';
import CartItemProvider from '../containers/providers/CartItemProvider';
import LoadingText from '../components/@ui/LoadingText';
import MenuItemImage from '../containers/MenuItemImage';
import AddToCartButton from '../containers/buttons/AddToCartButton';
import MenuItemOptions from '../containers/MenuItemOptions';
import Box from '../components/@ui/Box';
import MenuItemQuantity from '../containers/MenuItemQuantity';

export type DetailedMenuItemScreenProps = {
  DetailedMenuItem: {
    itemId?: string;
    cartKey?: string;
  };
};

export interface DetailedMenuItemProps
  extends NativeStackScreenProps<
    DetailedMenuItemScreenProps,
    'DetailedMenuItem'
  > {}

const DetailedMenuItem = ({ route }: DetailedMenuItemProps) => {
  const { data, refetch, isFetching } = useQuery('getItemById', async () =>
    App.services.getMenuItemById(route.params.itemId || route.params.cartKey),
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.cartKey, route.params.itemId]);

  return (
    <CartItemProvider item={data}>
      <BasicLayout centerContent actionButton={<AddToCartButton />} noSafeArea>
        <Box mt={30} mb={20} alignContent="center">
          <LoadingText category={'h1'} loading={isFetching}>
            {data?.name}
          </LoadingText>
        </Box>

        <MenuItemImage
          loading={isFetching}
          imageId={data?.imageId}
          height={250}
          width={250}
        />

        <Box alignContent="center" width={300} mt={30} mb={40}>
          <LoadingText
            category={'s1'}
            numOfSkeletons={3}
            width={300}
            loading={isFetching}>
            {data?.description}
          </LoadingText>
        </Box>

        <Box mb={30} alignContent="center">
          <MenuItemQuantity loading={isFetching} />
        </Box>

        <MenuItemOptions />

        <Box pb={200} />
      </BasicLayout>
    </CartItemProvider>
  );
};

export default DetailedMenuItem;
