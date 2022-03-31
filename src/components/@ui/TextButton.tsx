import React, { FC } from 'react';

import { TouchableOpacity, View } from 'react-native';
import { StyleService, useStyleSheet } from '@ui-kitten/components';
import { EvaStatus } from '@ui-kitten/components/devsupport/typings';

import LoadingText from './LoadingText';

export interface ITextButtonProps {
  category:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 's1'
    | 's2'
    | 'p1'
    | 'p2'
    | 'c1'
    | 'c2'
    | 'label';
  message: string;
  mt?: number;
  mb?: number;
  disabled?: boolean;
  onPress: () => void;
  status?: EvaStatus;
  loadingTitle?: boolean;
}

const TextButton: FC<ITextButtonProps> = ({
  message,
  category,
  mt = 0,
  mb = 0,
  disabled = false,
  onPress,
  status = 'warning',
  loadingTitle = false,
}) => {
  //@ts-ignore
  const classes = useStyleSheet(themedStyles({ mt, mb }));

  return (
    <View style={classes.viewContainer}>
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
        style={classes.container}>
        <LoadingText
          width={100}
          loading={loadingTitle}
          status={disabled ? 'info' : status}
          category={category}>
          {message}
        </LoadingText>
      </TouchableOpacity>
    </View>
  );
};

interface IStyleProps {
  mt: number;
  mb: number;
}

const themedStyles = StyleService.create((props: IStyleProps) => ({
  container: {
    minHeight: 44,
    minWidth: 44,
    marginTop: props.mt,
    marginBottom: props.mb,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewContainer: { display: 'flex', alignItems: 'flex-start' },
}));

export default TextButton;
