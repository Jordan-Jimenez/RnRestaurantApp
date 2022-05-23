import React, { FC } from 'react';

import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { View } from 'react-native';
import { observer } from 'mobx-react-lite';

import formatDollar from '../../core/utils/formatDollar';
import Box from '../@ui/Box';
import App from '../../stores/App';

const themedStyles = StyleService.create({
  container: {
    padding: 20,
    backgroundColor: 'color-primary-200',
    borderRadius: 10,
    width: '100%',
  },
  text: {
    color: 'text-control-color',
    fontWeight: '800',
  },
  price: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  total: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  totalText: {
    fontWeight: '800',
  },
});

interface IPriceBreakdownProps {
  subtotalOnly?: boolean;
}

const PriceBreakdown: FC<IPriceBreakdownProps> = ({ subtotalOnly = false }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.price}>
          <Text style={styles.text} category={'h5'}>
            Subtotal:
          </Text>

          <Text style={styles.text} category={'h5'}>
            {formatDollar(App.ongoingOrder?.subtotal)}
          </Text>
        </View>

        {!subtotalOnly && (
          <>
            <Box mt={10} mb={10} width={'100%'}>
              <View style={styles.price}>
                <Text style={styles.text} category={'h5'}>
                  Tip:
                </Text>

                <Text style={styles.text} category={'h5'}>
                  {formatDollar(App.ongoingOrder?.tip)}
                </Text>
              </View>
            </Box>

            <View style={styles.price}>
              <Text style={styles.text} category={'h5'}>
                Taxes:
              </Text>

              <Text style={styles.text} category={'h5'}>
                {formatDollar(App.ongoingOrder?.taxes)}
              </Text>
            </View>
          </>
        )}
      </View>

      {!subtotalOnly && (
        <View style={styles.total}>
          <Text style={styles.totalText} category={'h5'}>
            Total:
          </Text>

          <Text style={styles.totalText} category={'h5'}>
            {formatDollar(App.ongoingOrder?.total)}
          </Text>
        </View>
      )}
    </>
  );
};

export default observer(PriceBreakdown);
