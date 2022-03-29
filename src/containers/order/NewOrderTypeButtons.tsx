import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';

import DeliveryOrderIcon from '../../components/@ui/icons/DeliveryOrderIcon';
import PickUpOrderIcon from '../../components/@ui/icons/PickupOrderIcon';
import App from '../../stores/App';

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    padding: 30,
  },
  lineBreak: {
    height: '100%',
    width: 3,
    backgroundColor: 'background-basic-color-1',
  },
  button: {
    width: '35%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
  },
});

const NewOrderTypeButtons = () => {
  const styles = useStyleSheet(themedStyles);

  const navigation = useNavigation();

  const navigateForType = (type: 'delivery' | 'pickup') => {
    if (!App.ongoingOrder) {
      App.startNewOngoingOrder();
    }

    App.ongoingOrder?.setFulfillmentType(type);

    if (App.ongoingOrder?.store?.storeDetails.id) {
      //@ts-ignore
      navigation.navigate('New Order');

      return;
    }

    //@ts-ignore
    navigation.navigate('StoreSelect', {
      pageToNavigate: 'New Order',
    });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigateForType('pickup')}
        style={styles.button}>
        <PickUpOrderIcon />

        <Text style={styles.text} category="h5">
          Pick-Up
        </Text>

        <Text style={styles.text} category="s1" appearance="hint">
          Have your food fresh and ready on arrival
        </Text>
      </TouchableOpacity>

      <View style={styles.lineBreak} />

      <TouchableOpacity
        onPress={() => navigateForType('delivery')}
        style={styles.button}>
        <DeliveryOrderIcon />
        <Text style={styles.text} category="h5">
          Delivery
        </Text>

        <Text style={styles.text} category="s1" appearance="hint">
          Always fresh and hot, let us the food to you
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default observer(NewOrderTypeButtons);
