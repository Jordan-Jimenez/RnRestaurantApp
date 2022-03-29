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
  button: { height: props.height, borderColor: 'transparent' },
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
  absolute = true,
  height = 100,
}) => {
  //@ts-ignore
  const styles = useStyleSheet(themedStyles({ absolute, height }));

  return (
    <View style={styles.container}>
      <Button onPress={action} style={styles.button} appearance="filled">
        <View>
          <Text style={styles.text} category="h4">
            {title}
          </Text>
        </View>
      </Button>
    </View>
  );
};

export default ActionButton;
