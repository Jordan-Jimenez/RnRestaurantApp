import React from 'react';

import { View } from 'react-native';
import { StyleService, useStyleSheet, useTheme } from '@ui-kitten/components';

import ProfileIcon from '../../components/@ui/icons/ProfileIcon';
import GiftIcon from '../../components/@ui/icons/GiftIcon';
import IconButton from '../../components/@ui/IconButton';

const themedStyles = StyleService.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
  },
});

const DashboardHeader = () => {
  const styles = useStyleSheet(themedStyles);

  const theme = useTheme();

  return (
    <View style={styles.header}>
      <IconButton
        icon={<ProfileIcon fill={theme['text-warning-color']} size={30} />}
        onPress={() => {}}
      />

      <IconButton
        icon={<GiftIcon fill={theme['text-warning-color']} size={30} />}
        onPress={() => {}}
      />
    </View>
  );
};

export default DashboardHeader;
