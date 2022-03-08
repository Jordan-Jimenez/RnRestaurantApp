import React from 'react';

import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';

import DeliveryOrderIcon from '../../components/@ui/icons/DeliveryOrderIcon';
import PickUpOrderIcon from '../../components/@ui/icons/PickupOrderIcon';

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

  const navigateForPickup = () => {
    //@ts-ignore
    navigation.navigate('Order Scheduling', { orderType: 'pickup' });
  };

  const navigateForDelivery = () => {
    //@ts-ignore
    navigation.navigate('Order Scheduling', { orderType: 'delivery' });
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateForPickup} style={styles.button}>
        <PickUpOrderIcon />

        <Text style={styles.text} category="h5">
          Pick-Up
        </Text>

        <Text style={styles.text} category="s1" appearance="hint">
          Have your food fresh and ready on arrival
        </Text>
      </TouchableOpacity>

      <View style={styles.lineBreak} />

      <TouchableOpacity onPress={navigateForDelivery} style={styles.button}>
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

export default NewOrderTypeButtons;
