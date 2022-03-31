import React, { FC } from 'react';

import { Text, TextProps, useTheme } from '@ui-kitten/components';
import ContentLoader from 'react-content-loader/native';

interface ILoadingTextProps extends TextProps {
  loading?: boolean;
  width?: number;
  loadingAppearance?: 'default' | 'alternate';
}

const LoadingText: FC<ILoadingTextProps> = props => {
  const theme = useTheme();

  return (
    <>
      {props.loading ? (
        <ContentLoader
          backgroundColor={
            props.loadingAppearance === 'alternate'
              ? theme['color-primary-disabled-2']
              : theme['background-basic-color-2']
          }
          width={props.width || 200}>
          <Text {...props}> </Text>
        </ContentLoader>
      ) : (
        <Text {...props}>{props.children}</Text>
      )}
    </>
  );
};

export default LoadingText;
