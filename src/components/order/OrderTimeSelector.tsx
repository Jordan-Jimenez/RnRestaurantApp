import React, { FC } from 'react';

import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';

import { useOrderTimeSelectorContext } from '../../containers/providers/OrderTimeSelectorContextProvider';
import ActionButton from '../ActionButton';
import ModalWithBackdrop from '../@ui/ModalWithBackdrop';
import formatOrderTimeSlot from '../../core/utils/formatOrderTimeSlot';

const themedStyles = StyleService.create({
  container: { display: 'flex', flexDirection: 'row' },
  datePicker: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  timePicker: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pickerItem: { fontSize: 14 },
  picker: { flex: 1 },
});

interface DateTimeSelectorProps {
  open?: boolean;
  setOpen: () => void;
}

const DateTimeSelector: FC<DateTimeSelectorProps> = ({
  open = false,
  setOpen,
}) => {
  const selector = useOrderTimeSelectorContext();

  const styles = useStyleSheet(themedStyles);

  const setTimeAndClose = () => {
    selector.setOrderPickUpTime();

    setOpen();
  };

  return (
    <ModalWithBackdrop open={open} setOpen={setOpen}>
      <View style={styles.container}>
        <View style={styles.datePicker}>
          <Picker
            selectedValue={selector.selectedDay}
            onValueChange={d => {
              selector.setDay(d);
              selector.selectPickUpTime(JSON.stringify(selector.timeSlots[0]));
            }}
            itemStyle={styles.pickerItem}
            style={styles.picker}>
            {selector.orderDays.map(d => (
              <Picker.Item
                key={d.value.toString()}
                label={d.label}
                value={d.value}
              />
            ))}
          </Picker>
        </View>

        <View style={styles.timePicker}>
          <Picker
            selectedValue={JSON.stringify(selector.selectedPickUpTime)}
            onValueChange={i => selector.selectPickUpTime(i)}
            itemStyle={styles.pickerItem}
            style={styles.picker}>
            {selector.timeSlots.map(timeSlot => (
              <Picker.Item
                key={formatOrderTimeSlot(timeSlot)}
                label={formatOrderTimeSlot(timeSlot)}
                value={JSON.stringify(timeSlot)}
              />
            ))}
          </Picker>
        </View>
      </View>

      <ActionButton
        title="Done"
        absolute={false}
        height={100}
        action={setTimeAndClose}
      />
    </ModalWithBackdrop>
  );
};

export default observer(DateTimeSelector);
