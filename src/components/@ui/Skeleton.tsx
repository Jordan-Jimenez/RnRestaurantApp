import React, { FC } from 'react';

import ContentLoader, {
  IContentLoaderProps,
  Rect,
} from 'react-content-loader/native';
import {
  StyleService,
  TextProps,
  useStyleSheet,
  useTheme,
} from '@ui-kitten/components';
import { Dimensions } from 'react-native';

import { FONT_SIZES } from '../../core/theme/customMapping';
import Box from './Box';

const themedStyles = StyleService.create({
  skeleton: {
    marginBottom: 10,
  },
});

interface ISkeletonProps extends IContentLoaderProps {
  type?: 'default' | 'text';
  textCategory?: TextProps['category'];
  appearance?: 'default' | 'alternate';
}

const Skeleton: FC<ISkeletonProps> = props => {
  const theme = useTheme();

  const style = useStyleSheet(themedStyles);

  const width = props.width || Dimensions.get('screen').width;

  const height =
    props.type === 'text'
      ? props.textCategory
        ? FONT_SIZES[props.textCategory]
        : 14
      : props.height || 20;

  return (
    <Box overflow="hidden">
      <ContentLoader
        style={style.skeleton}
        backgroundColor={
          props.appearance === 'alternate'
            ? theme['color-primary-disabled-2']
            : theme['background-basic-color-2']
        }
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}>
        <Rect width={width} height={height} />
      </ContentLoader>
    </Box>
  );
};

export default Skeleton;
