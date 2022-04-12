import React, { FC } from 'react';

import {
  Button,
  Text,
  StyleService,
  useStyleSheet,
} from '@ui-kitten/components';
import { View } from 'react-native';

interface IStyleProps {
  absolute: boolean;
  height: number;
  secondaryTitle: boolean;
}

const themedStyles = StyleService.create((props: IStyleProps) => ({
  text: {
    color: 'text-control-color',
  },
  container: {
    position: props.absolute ? 'absolute' : 'relative',
    bottom: 0,
    width: '100%',
  },
  button: {
    height: props.height,
    borderColor: 'transparent',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: props.secondaryTitle ? 'space-between' : 'center',
    paddingHorizontal: 30,
  },
}));

interface IActionButtonProps {
  title: string;
  action: () => void;
  secondaryTitle?: string;
  absolute?: boolean;
  height?: number;
}

const ActionButton: FC<IActionButtonProps> = ({
  action,
  title,
  secondaryTitle,
  absolute = true,
  height = 100,
}) => {
  const styles = useStyleSheet(
    //@ts-ignore
    themedStyles({ absolute, height, secondaryTitle }),
  );

  return (
    <View style={styles.container}>
      <Button onPress={action} style={styles.button} appearance="filled">
        <>
          <Text style={styles.text} category="h4">
            {title}
          </Text>

          {secondaryTitle && (
            <Text style={styles.text} category="h5">
              {secondaryTitle}
            </Text>
          )}
        </>
      </Button>
    </View>
  );
};

export default ActionButton;
