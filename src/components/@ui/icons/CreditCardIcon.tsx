import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface ICreditCardIconProps {
  size?: number;
  fill?: string;
}

const CreditCardIcon: FC<ICreditCardIconProps> = ({
  size = 20,
  fill = '#000',
}) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="credit-card-outline"
    />
  );
};

export default CreditCardIcon;
