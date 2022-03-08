import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface IProfileProps {
  size?: number;
  fill?: string;
}

const Profile: FC<IProfileProps> = ({ size = 20, fill = 'black' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="person-outline"
    />
  );
};

export default Profile;
