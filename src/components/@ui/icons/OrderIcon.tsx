import * as React from 'react';

import Svg, { Path } from 'react-native-svg';

interface IOrderIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const OrderIcon: React.FC<IOrderIconProps> = ({
  width = 19,
  height = 25,
  fill = '#fff',
}) => (
  <Svg
    width={width}
    height={height}
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M13.719 12.5h1.687v1.688H13.72V12.5ZM3.594 12.5h6.75v1.688h-6.75V12.5ZM13.719 9.125h1.687v1.688H13.72V9.124ZM3.594 9.125h6.75v1.688h-6.75V9.124ZM3.594 5.75h11.812v1.688H3.594V5.75Z"
      fill={fill}
    />
    <Path
      d="M17.094.688H1.906A1.69 1.69 0 0 0 .22 2.375v21.094a.844.844 0 0 0 .844.843h.843a.842.842 0 0 0 .675-.337L4.438 21.5l1.856 2.475a.873.873 0 0 0 1.35 0L9.5 21.5l1.856 2.475a.873.873 0 0 0 1.35 0l1.857-2.475 1.856 2.475a.843.843 0 0 0 .675.337h.843a.844.844 0 0 0 .844-.843V2.375A1.689 1.689 0 0 0 17.094.687Zm0 21.374-1.857-2.475a.873.873 0 0 0-1.35 0l-1.856 2.475-1.856-2.475a.873.873 0 0 0-1.35 0l-1.856 2.475-1.857-2.475a.873.873 0 0 0-1.35 0l-1.856 2.475V2.375h15.188v19.687Z"
      fill={fill}
    />
  </Svg>
);

export default OrderIcon;
