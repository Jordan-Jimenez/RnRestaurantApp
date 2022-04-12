import React, { FC } from 'react';

import { TouchableOpacity } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

import MenuItemImage from './MenuItemImage';
import Box from '../components/@ui/Box';
import LoadingText from '../components/@ui/LoadingText';

const themedStyles = StyleService.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface IMenuListItemProps {
  item?: MenuItem;
  loading?: boolean;
}

const MenuListItem: FC<IMenuListItemProps> = ({ item, loading }) => {
  const styles = useStyleSheet(themedStyles);

  const navigation = useNavigation();

  const navigate = () => {
    //@ts-ignore
    navigation.navigate('DetailedMenuItem', { itemId: item?.id });
  };

  return (
    <Box pl={20} pr={20}>
      <TouchableOpacity onPress={navigate} style={styles.container}>
        <MenuItemImage loading={loading} imageId={item?.imageId} />

        <Box ml={20}>
          <LoadingText loading={loading} category="h4">
            {item?.name}
          </LoadingText>
        </Box>
      </TouchableOpacity>
    </Box>
  );
};

export default MenuListItem;
