import React from 'react';

import { View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import Box from '../../components/@ui/Box';
import ActionButton from '../../components/ActionButton';
import App from '../../stores/App';
import OrderSubtotal from '../OrderSubtotal';

const themedStyles = StyleService.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

const ContinueToPaymentButton = () => {
  const navigation = useNavigation();

  const navigateToConfirmOrder = () => {
    navigation.navigate('ConfirmOrder');
  };

  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      {App.ongoingOrder?.cart && App.ongoingOrder?.cart.length > 0 && (
        <>
          <Box mb={10}>
            <OrderSubtotal />
          </Box>

          <ActionButton
            absolute={false}
            action={navigateToConfirmOrder}
            title="Continue"
          />
        </>
      )}
    </View>
  );
};

export default observer(ContinueToPaymentButton);
