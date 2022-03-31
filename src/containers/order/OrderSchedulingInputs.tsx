import React, { useEffect } from 'react';

import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import Box from '../../components/@ui/Box';
import ClickableInput from '../../components/@ui/ClickableInput';
import OrderLocationIcon from '../../components/@ui/icons/OrderLocationIcon';
import App from '../../stores/App';
import PickupTimeSelector from './PickupTimeSelector';
import Store from '../../stores/Store';

const themedStyles = StyleService.create({
  container: { paddingHorizontal: 10, paddingVertical: 20, width: '100%' },
});

const OrderSchedulingInputs = () => {
  const { data, isFetching, refetch } = useQuery(
    'getLocation',
    async () =>
      await App.services.getStoreById(App.ongoingOrder?.store?.storeDetails.id),
  );

  useEffect(() => {
    refetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [App.ongoingOrder?.store?.storeDetails.id]);

  const store = data ? new Store(data) : undefined;

  const navigation = useNavigation();

  const openLocationsList = () => {
    //@ts-ignore
    navigation.navigate('StoreSelect');
  };

  const styles = useStyleSheet(themedStyles);

  return (
    <>
      <View style={styles.container}>
        <PickupTimeSelector loading={isFetching} store={store!} />

        <Box mt={10} />

        <ClickableInput
          loaderWidth={175}
          loading={isFetching}
          action={openLocationsList}
          icon={<OrderLocationIcon />}
          label="Where"
          value={App.ongoingOrder?.store?.storeDetails.streetAddress}
        />
      </View>
    </>
  );
};

export default observer(OrderSchedulingInputs);
