import React from 'react';
// @ts-ignore
import { Svg, Rect, G, Path, Circle } from '@react-platform/svg';

const ReplyIcon = ({ fill = '#000' }) => (// @ts-ignore
  <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" overflow="visible">
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill={fill} d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </Svg>
);

export default ReplyIcon;
