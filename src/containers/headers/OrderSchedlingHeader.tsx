import React, { FC } from 'react';

import { View } from 'react-native';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';

import App from '../../stores/App';
import IconButton from '../../components/@ui/IconButton';
import DeliveryOrderIcon from '../../components/@ui/icons/DeliveryOrderIcon';
import PickUpOrderIcon from '../../components/@ui/icons/PickupOrderIcon';
import SwitchOrderTypeIcon from '../../components/@ui/icons/SwitchOrderTypeIcon';
import Box from '../../components/@ui/Box';

const themedStyles = StyleService.create({
  view: {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  flex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: { marginLeft: 20 },
});

interface IOrderSchedlingHeaderProps {}

const OrderSchedlingHeader: FC<IOrderSchedlingHeaderProps> = () => {
  const styles = useStyleSheet(themedStyles);

  const ongoingOrderType = App.ongoingOrder?.fulfillmentType!;

  const switchOrderType = () => {
    App.ongoingOrder?.setFulfillmentType(
      ongoingOrderType === 'pickup' ? 'delivery' : 'pickup',
    );
  };

  return (
    <Box borderBottom>
      <View style={styles.view}>
        <View style={styles.flex}>
          {ongoingOrderType === 'pickup' ? (
            <PickUpOrderIcon size="small" />
          ) : ongoingOrderType === 'delivery' ? (
            <DeliveryOrderIcon size="small" />
          ) : (
            <></>
          )}
          <Text style={styles.title} category="h1">
            {ongoingOrderType[0].toUpperCase() + ongoingOrderType.substring(1)}{' '}
            Order
          </Text>
        </View>

        <IconButton icon={<SwitchOrderTypeIcon />} onPress={switchOrderType} />
      </View>
    </Box>
  );
};

export default observer(OrderSchedlingHeader);
