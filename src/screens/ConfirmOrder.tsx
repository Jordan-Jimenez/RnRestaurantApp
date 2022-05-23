import React from 'react';

import { ScrollView, View } from 'react-native';

import Box from '../components/@ui/Box';
import ActionButton from '../components/ActionButton';
import PriceBreakdown from '../components/order/PriceBreakdown';
import ModalHeader from '../containers/headers/ModalHeader';
import PaymentMethodSelect from '../containers/PaymentMethodSelect';
import TipAmountSelection from '../containers/TipAmountSelection';

const OrderPaymentModal = () => {
  return (
    <View
      style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-end' }}>
      <Box width={'100%'} alignContent="center" mb={8}>
        <View
          style={{
            height: 7,
            width: 50,
            borderRadius: 100,
            backgroundColor: '#efefef',
          }}
        />
      </Box>

      <View
        style={{
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          width: '100%',
          maxHeight: '85%',
          backgroundColor: '#fff',
          justifyContent: 'center',
        }}>
        <ModalHeader title="Confirm Payment" />

        <ScrollView>
          <Box p={20} pt={0}>
            <TipAmountSelection />

            <Box mt={30}>
              <PriceBreakdown />
            </Box>

            <PaymentMethodSelect />
          </Box>
        </ScrollView>

        <ActionButton
          title="Confirm Order"
          action={() => {}}
          absolute={false}
        />
      </View>
    </View>
  );
};

export default OrderPaymentModal;
