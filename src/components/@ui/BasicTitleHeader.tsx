import React, { FC } from 'react';

import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';
import { View } from 'react-native';

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

interface IBasicTitleHeaderProps {
  title: string;
}

const BasicTitleHeader: FC<IBasicTitleHeaderProps> = ({ title }) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.container}>
      <Text adjustsFontSizeToFit category="h2">
        {title}
      </Text>
    </View>
  );
};

export default BasicTitleHeader;
