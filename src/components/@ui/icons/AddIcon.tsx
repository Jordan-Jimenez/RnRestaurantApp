import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface IAddIconProps {
  size?: number;
  fill?: string;
}

const AddIcon: FC<IAddIconProps> = ({ size = 20, fill = '#FF6E83' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="plus-outline"
    />
  );
};

export default AddIcon;
