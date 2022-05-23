import React, { FC, useMemo } from 'react';

import { observer } from 'mobx-react-lite';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { TouchableOpacity } from 'react-native';

import formatDollar from '../core/utils/formatDollar';
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

interface ITipAmountProps {
  percent?: number;
  amountInPennies?: number;
}

const TipAmount: FC<ITipAmountProps> = ({
  amountInPennies = 0,
  percent = 0,
}) => {
  const amount =
    App.ongoingOrder?.subtotal! < 1500
      ? amountInPennies
      : App.ongoingOrder?.subtotal! * percent;

  const handleSelect = () => {
    App.ongoingOrder?.setCustomTip(false);

    App.ongoingOrder?.setTip(amount);
  };

  const selected = useMemo(
    () => !!(App.ongoingOrder?.tip === amount && !App.ongoingOrder.customTip),
    [App.ongoingOrder?.tip, App.ongoingOrder?.customTip],
  );

  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity
      onPress={handleSelect}
      style={
        selected
          ? { ...styles.container, ...styles.selected }
          : { ...styles.container, ...styles.inactive }
      }>
      <Text category={amountInPennies ? 'p1' : 'label'} style={styles.text}>
        {App.ongoingOrder?.subtotal! < 1500
          ? amountInPennies === 0
            ? 'None'
            : formatDollar(amountInPennies, true)
          : percent * 100 + '%'}
      </Text>
    </TouchableOpacity>
  );
};

export default observer(TipAmount);
