import React, { FC } from 'react';

import { StyleService, Text, useStyleSheet } from '@ui-kitten/components';
import { View, Image, ImageBackground } from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

interface IImgProps {
  image?: string;
  height: number | string;
  width: number | string;
  br?: number;
  loading?: boolean;
}

const Img: FC<IImgProps> = ({ image, height, width, loading = false }) => {
  //@ts-ignore
  const styles = useStyleSheet(styleSheet({ height, width }));

  return (
    <>
      {!loading && image && (
        <View style={styles.container}>
          <Image
            style={styles.imageStyle as any}
            source={{
              uri: image,
            }}
            resizeMode="cover"
          />
        </View>
      )}

      {!loading && !image && (
        <ImageBackground
          style={styles.container as any}
          source={{
            uri: image,
          }}
          resizeMode="cover">
          <Text category={'c2'} appearance="hint" style={styles.unavailable}>
            Image Unavailable
          </Text>
        </ImageBackground>
      )}

      {loading && (
        <ContentLoader height={height} width={width}>
          <Rect height={height} width={width} />
        </ContentLoader>
      )}
    </>
  );
};

interface IStyleProps {
  height: number | string;
  width: number | string;
}

const styleSheet = StyleService.create((props: IStyleProps) => ({
  container: {
    width: props.width,
    height: props.height,
    backgroundColor: 'background-basic-color-2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    backgroundColor: 'background-basic-color-2',
  },
  unavailable: { textAlign: 'center' },
}));

export default Img;
