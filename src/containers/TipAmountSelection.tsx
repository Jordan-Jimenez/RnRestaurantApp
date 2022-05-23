import React, { useEffect } from 'react';
import { View } from 'react-native';

import { observer } from 'mobx-react-lite';
import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';

import CustomTipAmount from '../components/CustomTipAmount';
import TipAmount from '../components/TipAmount';
import App from '../stores/App';
import Box from '../components/@ui/Box';

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
  },
});

const TipAmountSelection = () => {
  const styles = useStyleSheet(themedStyles);

  useEffect(() => {
    App.ongoingOrder?.setTip(
      App.ongoingOrder?.subtotal! < 1500
        ? 200
        : App.ongoingOrder?.subtotal! * 0.15,
    );

    App.ongoingOrder?.setCustomTip(false);
  }, []);

  return (
    <>
      <Box mt={10} mb={20} alignContent="center">
        <Text category={'p1'} appearance={'hint'}>
          Add a Tip:
        </Text>
      </Box>

      <View style={styles.container}>
        <TipAmount percent={0.15} amountInPennies={200} />

        <TipAmount percent={0.2} amountInPennies={300} />

        <TipAmount percent={0.25} amountInPennies={500} />

        <CustomTipAmount />
      </View>
    </>
  );
};

export default observer(TipAmountSelection);
