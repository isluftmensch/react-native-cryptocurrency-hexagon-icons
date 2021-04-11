import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgRise = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="rise_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#f49352" />
        <Stop offset="100%" stopColor="#f7b385" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#rise_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      d="M204.655 166.705c-9.427 0-17.072-7.766-17.072-17.347S195.228 132 204.655 132c9.438 0 17.083 7.766 17.083 17.358s-7.645 17.347-17.083 17.347zM279.917 352a17.215 17.215 0 01-17.072-17.358c0-9.57 7.645-17.347 17.072-17.347 9.438 0 17.083 7.766 17.083 17.347 0 9.592-7.645 17.358-17.083 17.358zm-68.255-129.69a15.18 15.18 0 01-21.505-2.915 15.752 15.752 0 012.86-21.846l78.738-61.182a15.18 15.18 0 0121.505 2.915 15.752 15.752 0 01-2.86 21.857zm.583 62.359a15.18 15.18 0 01-21.505-2.915 15.752 15.752 0 012.86-21.857l78.738-61.171a15.18 15.18 0 0121.505 2.915 15.752 15.752 0 01-2.86 21.846zm0 64.119a15.18 15.18 0 01-21.505-2.915 15.752 15.752 0 012.86-21.857l78.738-61.171a15.18 15.18 0 0121.505 2.915 15.752 15.752 0 01-2.86 21.846z"
      fill="#fff"
    />
  </Svg>
);

export default SvgRise;