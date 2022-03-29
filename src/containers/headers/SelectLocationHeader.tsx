import React from 'react';

import { Layout } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';

import BasicTitleHeader from '../../components/@ui/BasicTitleHeader';
import Box from '../../components/@ui/Box';

const SelectLocationHeader = () => {
  return (
    <Layout>
      <Box pt={30} pb={20}>
        <BasicTitleHeader title="Select pickup location" />
      </Box>
    </Layout>
  );
};

export default observer(SelectLocationHeader);
