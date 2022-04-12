import React, { FC } from 'react';

import { useQuery } from 'react-query';

import Img from '../components/@ui/Img';
import App from '../stores/App';

interface IMenuItemImageProps {
  imageId?: string;
  loading?: boolean;
  height?: number;
  width?: number;
}

const MenuItemImage: FC<IMenuItemImageProps> = ({
  imageId,
  loading = false,
  height = 100,
  width = 100,
}) => {
  const { data, isFetching } = useQuery(`getImage${imageId}`, async () => {
    return await App.services.getMenuItemImage(imageId);
  });

  return (
    <Img
      image={data?.url}
      height={height}
      width={width}
      loading={loading || isFetching}
    />
  );
};

export default MenuItemImage;
