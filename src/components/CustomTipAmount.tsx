import React, { useState } from 'react';

import Dialog from 'react-native-dialog';
import { TouchableOpacity } from 'react-native';
import { FakeCurrencyInput } from 'react-native-currency-input';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';

import Box from './@ui/Box';
import App from '../stores/App';

const themedStyles = StyleService.create({
  container: {
    height: 55,
    width: 55,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  inactive: {
    backgroundColor: 'color-primary-disabled-2',
  },
  selected: {
    backgroundColor: 'text-basic-color',
  },
  text: {
    color: 'text-control-color',
    fontWeight: '800',
  },
});

const CustomTipAmount = () => {
  const styles = useStyleSheet(themedStyles);

  const [open, setOpen] = useState(false);

  const [value, setValue] = React.useState<number | null>(0);

  const onChange = (v: number | null) => {
    if (!v) {
      setValue(0);

      return;
    }

    setValue(v);
  };

  const promptTip = () => {
    setValue(App.ongoingOrder?.customTip ? App.ongoingOrder?.tip / 100 : 0);

    setOpen(true);
  };

  const cancel = () => {
    setOpen(false);

    setValue(App.ongoingOrder?.customTip ? App.ongoingOrder?.tip / 100 : 0);
  };

  const setTip = () => {
    App.ongoingOrder?.setCustomTip(true);

    App.ongoingOrder?.setTip((value || 0) * 100);

    setOpen(!open);
  };

  return (
    <>
      <TouchableOpacity
        style={
          App.ongoingOrder?.customTip
            ? { ...styles.container, ...styles.selected }
            : { ...styles.container, ...styles.inactive }
        }
        onPress={promptTip}>
        <Text category={'h5'} style={styles.text}>
          ...
        </Text>
      </TouchableOpacity>

      <Dialog.Container visible={open}>
        <Dialog.Title>Enter Custom Tip Amount</Dialog.Title>

        <Box width={'100%'} alignContent="center" p={20} pt={0}>
          <FakeCurrencyInput
            maxValue={100}
            minValue={0}
            autoFocus
            value={value}
            onChangeValue={onChange}
            prefix="$"
            delimiter=","
            separator="."
            precision={2}
            keyboardType="number-pad"
            caretHidden
          />
        </Box>

        <Dialog.Button label="Cancel" onPress={cancel} />

        <Dialog.Button label="Confirm" onPress={setTip} />
      </Dialog.Container>
    </>
  );
};

export default observer(CustomTipAmount);
