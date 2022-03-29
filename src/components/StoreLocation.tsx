import React, { FC } from 'react';

import {
  Text,
  useTheme,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import {
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity, View } from 'react-native';

import Box from './@ui/Box';
import { metersToMiles } from '../core/utils/metersToMiles';
import LocationIcon from './@ui/icons/LocationIcon';
import CheckIcon from './@ui/icons/CheckIcon';
import Store from '../stores/Store';
import App from '../stores/App';

const themedStyles = StyleService.create({
  title: { color: 'text-success-color' },
  iconView: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
  },
  distance: { textAlign: 'center' },
  flex: { display: 'flex', flexDirection: 'row', alignItems: 'center' },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});

interface IStoreLocationProps {
  store: Store;
}

const StoreLocation: FC<IStoreLocationProps> = ({ store }) => {
  //@ts-ignore
  const styles = useStyleSheet(themedStyles);

  const navigation = useNavigation();

  const route = useRoute();

  //@ts-ignore
  const pageToNavigate = route.params?.pageToNavigate;

  const selectStore = () => {
    if (!store.storeDetails.streetAddress) {
      return;
    }

    App.ongoingOrder?.setStore(store);

    App.ongoingOrder?.setFulFillmentTimeSlot(
      store.nextEstimatedPickUpTimeInterval,
    );

    if (pageToNavigate) {
      navigation.dispatch(StackActions.replace(pageToNavigate));

      return;
    }

    navigation.goBack();
  };

  const theme = useTheme();

  return (
    <TouchableOpacity onPress={selectStore} style={styles.container}>
      <View style={styles.flex}>
        <View style={styles.iconView}>
          <LocationIcon fill={theme['text-danger-color']} />

          {store.distanceFromUserDevice && (
            <Box mt={5}>
              <Text category="h6" style={styles.distance}>{`${metersToMiles(
                store.distanceFromUserDevice || 0,
              )} mi`}</Text>
            </Box>
          )}
        </View>

        <View>
          <Box mb={6}>
            <Text style={styles.title} category="h4">
              {store.storeDetails.streetAddress}
            </Text>
          </Box>
          <Text category="h6">{`${store.storeDetails.city}, ${store.storeDetails.state}, ${store.storeDetails.zipCode}`}</Text>
        </View>
      </View>

      {App.ongoingOrder &&
        App.ongoingOrder.store?.storeDetails.id &&
        App.ongoingOrder.store?.storeDetails.id === store.storeDetails.id && (
          <CheckIcon size={25} />
        )}
    </TouchableOpacity>
  );
};

export default observer(StoreLocation);
