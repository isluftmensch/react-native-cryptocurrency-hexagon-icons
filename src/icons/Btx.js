import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgBtx = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="btx_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#fb2ea3" />
        <Stop offset="100%" stopColor="#fc6cbe" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#btx_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M314.952 220.22c-2.497 16.885-11.858 25.058-24.277 27.918 17.05 8.877 25.74 22.506 17.468 46.112-10.263 29.326-34.639 31.79-67.056 25.663L233.2 351.45l-19.008-4.741 7.766-31.108a723.14 723.14 0 01-15.158-3.938l-7.788 31.262-18.997-4.73 7.876-31.603c-4.444-1.133-8.954-2.343-13.563-3.498l-24.739-6.16 9.438-21.78s14.014 3.74 13.816 3.454c5.39 1.331 7.777-2.178 8.723-4.51l12.43-49.852 2.013.495a15.752 15.752 0 00-1.98-.627l8.866-35.585c.231-4.048-1.155-9.13-8.855-11.066.297-.198-13.816-3.432-13.816-3.432l5.06-20.306 26.224 6.545-.022.11c3.938.968 8.008 1.903 12.144 2.849L231.429 132l19.008 4.73-7.634 30.624c5.093 1.166 10.23 2.332 15.224 3.586l7.59-30.415 19.008 4.73-7.788 31.24c24.013 8.272 41.569 20.669 38.115 43.725zm-43.45 60.918c6.16-24.618-35.178-30.987-48.07-34.21l-10.439 41.855c12.892 3.201 52.646 15.972 58.52-7.645zm5.885-61.259c5.588-22.407-28.974-27.39-39.71-30.074l-9.46 37.961c10.725 2.684 43.813 13.596 49.17-7.887zm55.33 83.919a7.062 7.062 0 00-5.236 1.397 8.294 8.294 0 00-2.75 4.752 10.813 10.813 0 00-.22 3.135 7.37 7.37 0 001.122 3.366c.66 1.1 1.716 2.134 3.146 3.102 1.43.957 3.41 1.727 5.94 2.31 1.364.33 2.772.484 4.213.473 1.452 0 2.794-.231 4.026-.693a7.986 7.986 0 005.17-5.951 7.568 7.568 0 00-.77-5.775c-1.012-1.694-2.673-2.992-4.994-3.894l1.694-7.326c4.18 1.683 7.106 4.092 8.8 7.205 1.694 3.124 2.046 6.831 1.056 11.121a17.446 17.446 0 01-2.915 6.6 15.037 15.037 0 01-10.923 6.094 21.78 21.78 0 01-7.062-.517 23.903 23.903 0 01-6.765-2.64 16.478 16.478 0 01-4.983-4.4 14.828 14.828 0 01-2.618-5.995 17.71 17.71 0 01.275-7.491 20.57 20.57 0 012.013-5.324c.891-1.628 1.98-3.003 3.289-4.125a12.05 12.05 0 014.488-2.442c1.705-.517 3.597-.616 5.698-.319l-1.694 7.337zm29.612-23.243a18.59 18.59 0 01-2.959 6.809c-1.353 1.87-2.97 3.344-4.84 4.433a15.95 15.95 0 01-6.292 2.002 21.923 21.923 0 01-7.337-.506 21.637 21.637 0 01-6.754-2.75 15.95 15.95 0 01-4.774-4.554 15.554 15.554 0 01-2.42-6.116 18.59 18.59 0 01.33-7.403 18.59 18.59 0 012.959-6.809c1.364-1.87 2.97-3.355 4.851-4.433a15.95 15.95 0 016.292-2.002c2.31-.253 4.73-.088 7.26.495a22 22 0 016.82 2.75c1.98 1.254 3.564 2.772 4.774 4.565 1.21 1.793 2.013 3.828 2.42 6.105a18.59 18.59 0 01-.33 7.414zm-28.864-30.778l1.595-6.875 6.424 1.485.033-.132a7.612 7.612 0 01-2.343-1.87 12.54 12.54 0 01-2.86-6.105 8.987 8.987 0 01.11-3.432 16.324 16.324 0 01.836-2.717l7.073 1.628a35.739 35.739 0 00-.583 1.529 13.563 13.563 0 00-.462 1.551 8.261 8.261 0 001.452 7.04 11 11 0 003.124 2.75c1.309.803 2.882 1.419 4.73 1.848l15.818 3.652-1.694 7.326-33.253-7.678zm25.08-24.09c1.276.308 2.563.407 3.85.33a9.438 9.438 0 003.52-.924 8.107 8.107 0 002.805-2.266 9.361 9.361 0 001.716-3.795 9.042 9.042 0 00-.187-5.5 8.393 8.393 0 00-3.465-3.883l1.595-6.941a14.19 14.19 0 018.305 12.309c.11 1.76-.044 3.542-.451 5.346-.605 2.618-1.573 4.84-2.893 6.655a14.74 14.74 0 01-11.044 6.16 23.056 23.056 0 01-13.772-3.256 17.655 17.655 0 01-4.862-4.51 15.785 15.785 0 01-2.651-5.94c-.495-2.178-.44-4.51.121-7.007a15.29 15.29 0 013.267-6.666 16.06 16.06 0 015.533-4.18 18.04 18.04 0 016.897-1.54c2.486-.088 4.928.308 7.348 1.177l-5.643 24.442zm-2.002 53.537a8.635 8.635 0 00-2.068-8.063 12.1 12.1 0 00-3.366-2.574 17.27 17.27 0 00-8.525-1.98 11.671 11.671 0 00-4.147.847 8.635 8.635 0 00-5.357 6.347 8.635 8.635 0 002.024 8.052c.913 1.034 2.035 1.881 3.366 2.574a17.402 17.402 0 008.525 1.98 12.1 12.1 0 004.158-.847 8.635 8.635 0 005.39-6.336zm1.122-71.753a12.133 12.133 0 00-3.52-.033 8.503 8.503 0 00-5.709 3.157 9.042 9.042 0 00-1.65 6.864c.22 1.155.627 2.2 1.243 3.135a10.01 10.01 0 005.687 3.993l3.949-17.116z"
    />
  </Svg>
);

export default SvgBtx;