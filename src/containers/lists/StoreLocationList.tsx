import React, { FC } from 'react';

import { observer } from 'mobx-react-lite';

import StoreLocation from '../../components/StoreLocation';
import { useOrderSchedulingContext } from '../providers/OrderSchedulingProvider';

interface IStoreLocationListProps {}

const StoreLocationList: FC<IStoreLocationListProps> = () => {
  const orderScheduling = useOrderSchedulingContext();

  return (
    <>
      {orderScheduling.stores?.map((store, index) => (
        <StoreLocation
          key={store.streetAddress || 'store' + index}
          location={store}
        />
      ))}
    </>
  );
};

export default observer(StoreLocationList);
