import React, { FC } from 'react';

import {
  Radio,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import { TouchableOpacity, View } from 'react-native';

import { useCartItemContext } from './providers/CartItemProvider';
import Box from '../components/@ui/Box';
import Skeleton from '../components/@ui/Skeleton';

const themedStyles = StyleService.create({
  radio: {
    borderBottomColor: 'color-basic-default',
    borderBottomWidth: 1,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    paddingVertical: 10,
    width: '100%',
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

interface IMenuItemOptionValueProps {
  optionValue?: ItemOptionValue;
  optionId?: string;
  loading?: boolean;
}

const MenuItemOptionValue: FC<IMenuItemOptionValueProps> = ({
  optionValue,
  optionId,
  loading = false,
}) => {
  const cartItem = useCartItemContext();

  const onChange = () => {
    cartItem.setSelectedOptionValues({
      ...cartItem.selectedOptionValues,
      [optionId || '']: optionValue?.id,
    });
  };

  const styles = useStyleSheet(themedStyles);

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onChange}
      style={styles.container}>
      <View style={styles.radio}>
        {loading ? (
          <Skeleton height={20} />
        ) : (
          <Box>
            <View style={styles.option}>
              <Radio
                onPress={onChange}
                onChange={onChange}
                checked={
                  JSON.parse(cartItem.variationOptionValues)[optionId || ''] ===
                  optionValue?.id
                }
              />

              <Box pl={15} pr={35}>
                <Text category="h5">{optionValue?.name}</Text>
              </Box>
            </View>
          </Box>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default observer(MenuItemOptionValue);
