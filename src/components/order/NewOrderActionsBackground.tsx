import React from 'react';

import { View } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  absoluteContainer: {
    position: 'absolute',
    top: 20,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
    overflow: 'hidden',
  },
  background: {
    backgroundColor: 'background-basic-color-3',
    height: 9999,
    borderRadius: 9999,
    width: 606,
  },
});

const NewOrderActionsBackground = () => {
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={styles.absoluteContainer}>
      <View style={styles.background} />
    </View>
  );
};

export default NewOrderActionsBackground;
