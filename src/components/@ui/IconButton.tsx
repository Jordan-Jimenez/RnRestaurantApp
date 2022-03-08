import React, { FC } from 'react';

import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';

interface IIconButtonProps {
  withBackground?: boolean;
  icon: React.ReactElement;
  onPress: () => void;
}

const IconButton: FC<IIconButtonProps> = ({
  withBackground = false,
  icon,
  onPress,
}) => {
  const styles = useStyleSheet(themedStyles);

  return (
    <Button
      style={styles.button}
      appearance={withBackground ? 'filled' : 'ghost'}
      onPress={onPress}
      accessoryLeft={icon}
    />
  );
};

const themedStyles = StyleService.create({
  button: {
    height: 35,
    width: 35,
    borderWidth: 0,
    borderRadius: 100,
  },
});

export default IconButton;
