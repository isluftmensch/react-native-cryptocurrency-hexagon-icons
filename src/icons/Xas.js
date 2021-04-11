import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgXas = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="xas_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#faa00d" />
        <Stop offset="100%" stopColor="#fbbc55" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#xas_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M351.912 225.181l-104.159 121.11-4.675 5.709-111.001-125.598.352-.143-.429-.066 43.142-72.127.022.022-.022-.088h134.794l-.022.077L352 225.17zm-144.496 5.049l-23.87 40.414 58.872 67.232 58.993-67.782-23.342-39.985zm-30.558 32.78l19.36-32.769-47.982.077zm106.953-42.306l54.494-.088-34.21-57.288-53.702.11zm52.481 9.306l-47.003.077 18.843 32.285zm-63.701-9.284l-29.601-50.732-30.03 50.82zm-92.389-57.134l-34.1 57.343 55.66-.099 33.88-57.354z"
      fill="#fff"
    />
  </Svg>
);

export default SvgXas;