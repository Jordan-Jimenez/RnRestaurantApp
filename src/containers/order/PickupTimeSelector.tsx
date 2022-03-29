import React, { FC, useState } from 'react';

import { observer } from 'mobx-react-lite';

import ClickableInput from '../../components/@ui/ClickableInput';
import ClockIcon from '../../components/@ui/icons/ClockIcon';
import DateTimeSelector from '../../components/order/OrderTimeSelector';
import App from '../../stores/App';
import formatOrderTimeSlot from '../../core/utils/formatOrderTimeSlot';
import Store from '../../stores/Store';
import OrderTimeSelectorContextProvider from '../providers/OrderTimeSelectorContextProvider';

interface IPickUpTimeSelectorProps {
  store: Store;
}

const PickupTimeSelector: FC<IPickUpTimeSelectorProps> = ({ store }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <ClickableInput
        action={openModal}
        icon={<ClockIcon />}
        label="When"
        value={
          formatOrderTimeSlot(App.ongoingOrder?.fulfillmentTimeSlot, true) ||
          formatOrderTimeSlot(store.nextEstimatedPickUpTimeInterval, true) ||
          'Currently Unavailable'
        }
      />

      {open && (
        <OrderTimeSelectorContextProvider store={store}>
          <DateTimeSelector open={open} setOpen={openModal} />
        </OrderTimeSelectorContextProvider>
      )}
    </>
  );
};

export default observer(PickupTimeSelector);
