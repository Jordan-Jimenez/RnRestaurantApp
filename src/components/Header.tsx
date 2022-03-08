import React, { FC } from 'react';

import { View } from 'react-native';
import { Text } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { useRoute } from '@react-navigation/native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  view: {
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
});

interface IHeaderProps {}

const Header: FC<IHeaderProps> = () => {
  const styles = useStyleSheet(themedStyles);

  const route = useRoute() as any;

  const orderType = route.params.orderType;

  return (
    <View style={styles.view}>
      <Text>{orderType}</Text>
    </View>
  );
};

export default observer(Header);
