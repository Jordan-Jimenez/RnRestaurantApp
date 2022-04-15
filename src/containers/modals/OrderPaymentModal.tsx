import React, { FC } from 'react';

import ModalWithBackdrop from '../../components/@ui/ModalWithBackdrop';
import ModalHeader from '../headers/ModalHeader';

interface IOrderPaymentModalProps {
  open?: boolean;
  setOpen: () => void;
}

const OrderPaymentModal: FC<IOrderPaymentModalProps> = ({
  open = false,
  setOpen,
}) => {
  return (
    <ModalWithBackdrop open={open} setOpen={setOpen}>
      <ModalHeader title="Confirm Payment" />
    </ModalWithBackdrop>
  );
};

export default OrderPaymentModal;
