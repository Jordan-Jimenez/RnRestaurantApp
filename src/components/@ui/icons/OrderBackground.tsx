import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

interface IOrderBackgroundProps {
  width?: number;
  height?: number;
  fill?: string;
}

const style = { position: 'absolute', zIndex: -1 };

const SvgComponent: React.FC<IOrderBackgroundProps> = ({
  width = 38,
  height = 50,
}) => (
  <Svg
    style={style as any}
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M37.5 31.897c0 .4-.154.8-.457 1.107l-16.54 16.54a1.57 1.57 0 0 1-1.106.456h-1.294c-.4 0-.8-.153-1.107-.456L.456 33.004A1.57 1.57 0 0 1 0 31.897V1.563C0 .7.7 0 1.563 0h34.374C36.8 0 37.5.7 37.5 1.563v30.334Z"
      fill="#FF6E83"
    />
  </Svg>
);

export default SvgComponent;
