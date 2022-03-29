import React from 'react';

import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';
import { Spinner } from '@ui-kitten/components';
import { Alert, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import StoreLocation from '../../components/StoreLocation';
import Box from '../../components/@ui/Box';
import App from '../../stores/App';
import sortByDistance from '../../core/utils/sortStoresByDistance';
import Store from '../../stores/Store';

const StoreLocationList = () => {
  const { data, isFetching, refetch } = useQuery(
    'getLocations',
    async () => await App.services.getStoreLocations(),
  );

  const stores = data?.filter(s => s).map(store => new Store(store));

  const navigation = useNavigation();

  const sortedStores = sortByDistance(stores);

  if (isFetching) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Spinner />
      </View>
    );
  }

  if (!isFetching && data) {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        <View style={{ width: '80%' }}>
          {sortedStores?.map((store, index) => (
            <Box
              key={store.storeDetails.id || 'store' + index}
              mt={index === 0 ? 0 : 40}>
              <StoreLocation
                key={store.storeDetails.id || 'store' + index}
                store={store}
              />
            </Box>
          ))}
        </View>
      </View>
    );
  }

  Alert.alert('Request failed', 'Unable to make connection', [
    { text: 'Go Back', onPress: () => navigation.goBack() },
    { text: 'Retry', onPress: () => refetch() },
  ]);

  return <></>;
};

export default observer(StoreLocationList);
