import React, { useState } from 'react';

import { observer } from 'mobx-react-lite';
import { View } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

import Box from '../../components/@ui/Box';
import ActionButton from '../../components/ActionButton';
import App from '../../stores/App';
import OrderPaymentModal from '../modals/OrderPaymentModal';
import OrderSubtotal from '../OrderSubtotal';

const themedStyles = StyleService.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

const ContinueToPaymentButton = () => {
  const [open, setOpen] = useState(false);

  const openPaymentModal = () => {
    setOpen(!open);
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
            action={openPaymentModal}
            title="Continue"
          />
        </>
      )}

      <OrderPaymentModal open={open} setOpen={openPaymentModal} />
    </View>
  );
};

export default observer(ContinueToPaymentButton);
