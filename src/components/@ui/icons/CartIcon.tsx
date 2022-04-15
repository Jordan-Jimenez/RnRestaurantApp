import React, { FC } from 'react';

import { Icon } from '@ui-kitten/components';

interface ICartIconProps {
  size?: number;
  fill?: string;
}

const CartIcon: FC<ICartIconProps> = ({ size = 100, fill = '#DDDDDD' }) => {
  return (
    <Icon
      style={{ height: size, width: size }}
      fill={fill}
      name="shopping-cart-outline"
    />
  );
};

export default CartIcon;
