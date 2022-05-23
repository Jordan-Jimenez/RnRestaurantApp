import React, { FC } from 'react';

import { View } from 'react-native';

import Box from '../../components/@ui/Box';
import BasicTitleHeader from '../../components/@ui/BasicTitleHeader';

interface IModalHeaderProps {
  title: string;
}

const ModalHeader: FC<IModalHeaderProps> = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}>
      <Box pt={20} pb={20} borderBottom>
        <BasicTitleHeader title={title} />
      </Box>
    </View>
  );
};

export default ModalHeader;
