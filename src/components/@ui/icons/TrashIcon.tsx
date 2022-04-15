import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface ITrashIconProps {
  size?: number;
  fill?: string;
}

const TrashIcon: FC<ITrashIconProps> = ({ size = 20, fill = '#FF6E83' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="trash-2-outline"
    />
  );
};

export default TrashIcon;
