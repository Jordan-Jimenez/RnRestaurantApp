import React, { FC } from 'react';

import { TouchableOpacity, View } from 'react-native';
import { Text, StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  container: {
    borderRadius: 100,
    width: '100%',
    backgroundColor: '#F6F6F6',
    padding: 10,
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
}

const ClickableInput: FC<IClickableInputProps> = ({
  icon,
  label,
  value,
  action,
}) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <>
      <TouchableOpacity onPress={action} style={styles.container}>
        {icon && icon}
        <View style={styles.infoView}>
          <Text category="s2" appearance="hint">
            {label}
          </Text>
          <Text category="h6">{value}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default ClickableInput;
