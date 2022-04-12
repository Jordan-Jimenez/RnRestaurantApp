import React, { FC } from 'react';

import { Text, TextProps, useTheme } from '@ui-kitten/components';
import ContentLoader from 'react-content-loader/native';

interface ILoadingTextProps extends TextProps {
  loading?: boolean;
  width?: number;
  loadingAppearance?: 'default' | 'alternate';
  numOfSkeletons?: number;
}

import { StyleService, useStyleSheet } from '@ui-kitten/components';

const themedStyles = StyleService.create({
  skeleton: {
    marginBottom: 10,
  },
  text: { textAlign: 'center' },
});

const LoadingText: FC<ILoadingTextProps> = props => {
  const theme = useTheme();

  const style = useStyleSheet(themedStyles);

  return (
    <>
      {props.loading ? (
        [...Array(props.numOfSkeletons || 1)].map((_, index) => (
          <ContentLoader
            key={index}
            backgroundColor={
              props.loadingAppearance === 'alternate'
                ? theme['color-primary-disabled-2']
                : theme['background-basic-color-2']
            }
            style={style.skeleton}
            width={props.width || 200}>
            <Text style={style.text} {...props}>
              {' '}
            </Text>
          </ContentLoader>
        ))
      ) : (
        <Text style={style.text} {...props}>
          {props.children}
        </Text>
      )}
    </>
  );
};

export default LoadingText;
