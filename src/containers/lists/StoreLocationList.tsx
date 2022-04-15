import React from 'react';

import { useQuery } from 'react-query';
import { observer } from 'mobx-react-lite';
import { Alert, Dimensions, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleService, useStyleSheet, Spinner } from '@ui-kitten/components';

import StoreLocation from '../../components/StoreLocation';
import Box from '../../components/@ui/Box';
import App from '../../stores/App';
import sortByDistance from '../../core/utils/sortStoresByDistance';
import Store from '../../stores/Store';

const themedStyles = StyleService.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: Dimensions.get('screen').height * 0.4,
  },
  listContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
});

const StoreLocationList = () => {
  const { data, isFetching, refetch } = useQuery(
    'getLocations',
    async () => await App.services.getStoreLocations(),
  );

  const styles = useStyleSheet(themedStyles);

  const stores = data?.filter(s => s).map(store => new Store(store));

  const navigation = useNavigation();

  const sortedStores = sortByDistance(stores);

  if (isFetching) {
    return (
      <View style={styles.loader}>
        <Spinner />
      </View>
    );
  }

  if (!isFetching && data) {
    return (
      <View style={styles.listContainer}>
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
    );
  }

  Alert.alert('Request failed', 'Unable to make connection', [
    { text: 'Go Back', onPress: () => navigation.goBack() },
    { text: 'Retry', onPress: () => refetch() },
  ]);

  return <></>;
};

export default observer(StoreLocationList);
