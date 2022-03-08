import React, { FC } from 'react';

import { Text } from '@ui-kitten/components';

import Box from './@ui/Box';
import { metersToMiles } from '../core/utils/metersToMiles';

interface IStoreLocationProps {
  location: StoreLocation;
}

const StoreLocation: FC<IStoreLocationProps> = ({ location }) => {
  return (
    <Box>
      <Text>{location?.streetAddress}</Text>
      <Text>{`${location?.city}, ${location?.state}, ${location?.zipCode}`}</Text>
      <Text>{`${metersToMiles(location?.distance || 0)} mi`}</Text>
    </Box>
  );
};

export default StoreLocation;
