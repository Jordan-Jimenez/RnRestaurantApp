import React, { useEffect } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from 'react-query';

import Layout from '../containers/layouts/Layout';
import App from '../stores/App';
import CartItemProvider from '../containers/providers/CartItemProvider';
import LoadingText from '../components/@ui/LoadingText';
import MenuItemImage from '../containers/MenuItemImage';
import AddToCartButton from '../containers/buttons/AddToCartButton';
import MenuItemOptions from '../containers/MenuItemOptions';
import Box from '../components/@ui/Box';
import MenuItemQuantity from '../containers/MenuItemQuantity';
import CartItem from '../stores/CartItem';

export type DetailedMenuItemScreenProps = {
  DetailedMenuItem: {
    itemId?: string;
    cartItemToEdit?: CartItem;
  };
};

export interface DetailedMenuItemProps
  extends NativeStackScreenProps<
    DetailedMenuItemScreenProps,
    'DetailedMenuItem'
  > {}

const DetailedMenuItem = ({ route }: DetailedMenuItemProps) => {
  const { data, refetch, isFetching } = useQuery('getItemById', async () =>
    App.services.getMenuItemById(route.params.itemId),
  );

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [route.params.itemId]);

  return (
    <CartItemProvider cartItemToEdit={route.params.cartItemToEdit} item={data}>
      <Layout
        centerContent
        actionButton={
          <AddToCartButton
            cartItemToEditUID={route.params.cartItemToEdit?.uid}
          />
        }
        noSafeArea>
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
      </Layout>
    </CartItemProvider>
  );
};

export default DetailedMenuItem;
