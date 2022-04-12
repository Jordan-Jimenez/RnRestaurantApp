import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface IMinusIconProps {
  size?: number;
  fill?: string;
}

const MinusIcon: FC<IMinusIconProps> = ({ size = 20, fill = '#FF6E83' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="minus-outline"
    />
  );
};

export default MinusIcon;
