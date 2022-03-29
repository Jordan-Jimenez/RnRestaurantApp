import React, { FC } from 'react';

import { Modal, TouchableOpacity } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  backdrop: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  contentContainer: {
    marginTop: 'auto',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: '100%',
  },
});

interface IModalWithBackdropProps {
  open?: boolean;
  setOpen: () => void;
}

const ModalWithBackdrop: FC<IModalWithBackdropProps> = ({
  open = false,
  setOpen,
  children,
}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Modal animationType="fade" transparent={true} visible={open}>
      <TouchableOpacity
        style={styles.backdrop}
        activeOpacity={1}
        onPress={setOpen}>
        <TouchableOpacity activeOpacity={1} style={styles.contentContainer}>
          {children}
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

export default ModalWithBackdrop;
