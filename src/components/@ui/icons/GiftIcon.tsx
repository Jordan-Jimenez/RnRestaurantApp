import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface IGiftIconProps {
  size?: number;
  fill?: string;
}

const GiftIcon: FC<IGiftIconProps> = ({ size = 20, fill = 'black' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="gift-outline"
    />
  );
};

export default GiftIcon;
