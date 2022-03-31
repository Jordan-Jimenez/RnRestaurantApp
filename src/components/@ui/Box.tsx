import React, { FC } from 'react';

import { FlexAlignType, View } from 'react-native';

import { StyleService, useStyleSheet } from '@ui-kitten/components';

interface IStyleProps {
  m?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  alignContent: FlexAlignType;
  borderTop?: boolean;
  borderBottom?: boolean;
  width: '100%' | 'auto';
}

const themedStyles = StyleService.create((props: IStyleProps) => ({
  box: {
    width: props.width,
    display: 'flex',
    flexDirection: 'column',
    alignItems: props.alignContent,
    marginTop: props.mt ? props.mt : props.m,
    marginBottom: props.mb ? props.mb : props.m,
    marginLeft: props.ml ? props.ml : props.m,
    marginRight: props.mr ? props.mr : props.m,
    paddingRight: props.pr ? props.pr : props.p,
    paddingTop: props.pt ? props.pt : props.p,
    paddingLeft: props.pl ? props.pl : props.p,
    paddingBottom: props.pb ? props.pb : props.p,
    borderBottomWidth: props.borderBottom ? 1 : 0,
    borderBottomColor: 'color-basic-default',
    borderTopWidth: props.borderTop ? 1 : 0,
    borderTopColor: 'color-basic-default',
  },
}));

interface IBoxProps {
  m?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  p?: number;
  pt?: number;
  pb?: number;
  pr?: number;
  pl?: number;
  alignContent?: FlexAlignType;
  borderTop?: boolean;
  borderBottom?: boolean;
  width?: '100%' | 'auto';
}

const Box: FC<IBoxProps> = ({
  m = 0,
  mt,
  mb,
  ml,
  mr,
  p = 0,
  pb,
  pt,
  pr,
  pl,
  children,
  alignContent = 'flex-start',
  borderTop = false,
  borderBottom = false,
  width = '100%',
}) => {
  const styles = useStyleSheet(
    //@ts-ignore
    themedStyles({
      m,
      mt,
      mb,
      ml,
      mr,
      p,
      pb,
      pt,
      pr,
      pl,
      alignContent,
      borderTop,
      borderBottom,
      width,
    }),
  );
  return <View style={styles.box}>{children}</View>;
};

export default Box;
