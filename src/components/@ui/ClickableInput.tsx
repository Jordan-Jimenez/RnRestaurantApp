import React, { FC } from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';

import LoadingText from './LoadingText';

const themedStyles = StyleService.create({
  container: {
    borderRadius: 100,
    width: '100%',
    backgroundColor: '#F6F6F6',
    padding: 10,
    paddingLeft: 15,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoView: { marginLeft: 20 },
});

interface IClickableInputProps {
  icon?: JSX.Element;
  label?: string;
  value?: string;
  action: () => void;
  loading?: boolean;
  loaderWidth?: number;
}

const ClickableInput: FC<IClickableInputProps> = ({
  icon,
  label,
  value,
  action,
  loading = false,
  loaderWidth = 200,
}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <>
      <TouchableOpacity onPress={action} style={styles.container}>
        {icon && icon}
        <View style={styles.infoView}>
          <Text category="p2" appearance="hint">
            {label}
          </Text>

          <LoadingText loading={loading} width={loaderWidth} category="p1">
            {value}
          </LoadingText>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ClickableInput;
