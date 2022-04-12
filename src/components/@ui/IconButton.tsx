import React, { FC } from 'react';

import { Button, StyleService, useStyleSheet } from '@ui-kitten/components';

interface IIconButtonProps {
  withBackground?: boolean;
  height?: number;
  width?: number;
  icon: React.ReactElement;
  onPress: () => void;
}

const IconButton: FC<IIconButtonProps> = ({
  withBackground = false,
  icon,
  onPress,
  height = 35,
  width = 35,
}) => {
  const styles = useStyleSheet(themedStyles({ height, width }));

  return (
    <Button
      style={styles.button}
      appearance={withBackground ? 'filled' : 'ghost'}
      onPress={onPress}
      accessoryLeft={icon}
    />
  );
};

interface IStyleProps {
  height: number;
  width: number;
}

const themedStyles = StyleService.create((props: IStyleProps) => ({
  button: {
    height: props.height,
    width: props.width,
    borderWidth: 0,
    borderRadius: 100,
  },
}));

export default IconButton;
