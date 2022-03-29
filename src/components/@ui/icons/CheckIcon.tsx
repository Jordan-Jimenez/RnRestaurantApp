import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface ICheckIconProps {
  size?: number;
  fill?: string;
}

const CheckIcon: FC<ICheckIconProps> = ({ size = 20, fill = '#4AA68A' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="checkmark-outline"
    />
  );
};

export default CheckIcon;
