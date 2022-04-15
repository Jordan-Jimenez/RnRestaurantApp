import React, { FC } from 'react';

import { Layout } from '@ui-kitten/components';

import Box from '../../components/@ui/Box';
import BasicTitleHeader from '../../components/@ui/BasicTitleHeader';

interface IModalHeaderProps {
  title: string;
}

const ModalHeader: FC<IModalHeaderProps> = ({ title }) => {
  return (
    <Layout>
      <Box pt={30} pb={30} borderBottom>
        <BasicTitleHeader title={title} />
      </Box>
    </Layout>
  );
};

export default ModalHeader;
