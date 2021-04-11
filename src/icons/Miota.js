import React from "react";
import Svg, { Defs, LinearGradient, Stop, Path } from "react-native-svg";

const SvgMiota = props => (
  <Svg width={40} height={40} viewBox="0 0 500 500" {...props}>
    <Defs>
      <LinearGradient id="miota_svg__a" x1="0%" y1="0%" x2="100%" y2="0%">
        <Stop offset="0%" stopColor="#242424" />
        <Stop offset="100%" stopColor="#656565" />
      </LinearGradient>
    </Defs>
    <Path
      d="M477.043 219.205L378.575 48.677a44.579 44.579 0 00-38.607-22.292H143.041a44.589 44.589 0 00-38.608 22.292L5.971 219.205a44.607 44.607 0 000 44.588l98.462 170.543a44.59 44.59 0 0038.608 22.293h196.926a44.577 44.577 0 0038.607-22.293l98.469-170.543a44.612 44.612 0 000-44.588z"
      fill="url(#miota_svg__a)"
      data-original="#000000"
      transform="matrix(0 -1 1 0 0 483.014)"
    />
    <Path
      fill="#FFF"
      d="M310.827 140.47c0 7.711-6.27 13.97-14.014 13.97a13.992 13.992 0 01-14.014-13.97c0-7.722 6.27-13.97 14.014-13.97s14.014 6.248 14.014 13.97zm-10.098 48.664c-6.556 0-11.88-5.302-11.88-11.836 0-6.534 5.324-11.825 11.88-11.825 6.556 0 11.869 5.291 11.869 11.825s-5.313 11.836-11.88 11.836zm-3.685 29.183a10.01 10.01 0 01-10.032-10.01 10.01 10.01 0 0110.032-9.999 10.01 10.01 0 0110.032 10.01 10.01 10.01 0 01-10.032 9.999zm-.594 15.092a8.58 8.58 0 01-17.16 0 8.58 8.58 0 0117.16 0zm-13.574 18.964c0 4.07-3.3 7.337-7.359 7.337a7.348 7.348 0 117.37-7.337zm-14.85 13.453a6.314 6.314 0 11-12.628 0 6.314 6.314 0 0112.628 0zm75.614-81.499a11.924 11.924 0 01-23.21-5.401 11.915 11.915 0 0123.21 5.401zm-5.698 30.833a10.087 10.087 0 01-19.646-4.587 10.087 10.087 0 0119.646 4.587zm-10.604 24.607a8.528 8.528 0 01-16.61-3.872 8.536 8.536 0 0116.61 3.872zM313.676 258.5a7.293 7.293 0 01-14.19-3.3 7.271 7.271 0 018.745-5.423 7.26 7.26 0 015.445 8.723zm-14.927 13.079a6.26 6.26 0 01-12.188-2.86 6.26 6.26 0 0112.188 2.86zm-14.905 8.261a5.39 5.39 0 01-10.472-2.442 5.39 5.39 0 0110.472 2.442zm78.144-53.416a10.153 10.153 0 01-13.552 4.697 10.087 10.087 0 01-4.708-13.519 10.153 10.153 0 0113.541-4.697 10.12 10.12 0 014.719 13.519zm-10.571 24.365a8.635 8.635 0 01-15.543-7.491 8.668 8.668 0 0111.528-4.004 8.58 8.58 0 014.015 11.495zm-13.288 18.48a7.48 7.48 0 01-9.966 3.454 7.414 7.414 0 01-3.454-9.922 7.458 7.458 0 0113.42 6.479zm-14.806 13.068a6.49 6.49 0 01-8.635 2.992 6.457 6.457 0 115.632-11.616 6.457 6.457 0 013.003 8.624zm-14.905 8.052a5.533 5.533 0 01-9.955-4.807 5.544 5.544 0 019.955 4.807zm-14.003 4.059a4.708 4.708 0 01-6.27 2.178 4.684 4.684 0 114.092-8.426 4.675 4.675 0 012.178 6.248zm11.396 53.416a13.937 13.937 0 01-5.148-19.074 14.047 14.047 0 0119.14-5.126c6.71 3.85 9.02 12.397 5.159 19.074a14.036 14.036 0 01-19.14 5.126zm-32.89-16.852a11.792 11.792 0 01-4.356-16.148 11.891 11.891 0 0116.203-4.345c5.676 3.256 7.623 10.494 4.356 16.148a11.88 11.88 0 01-16.203 4.345zm-24.222-20.24a9.988 9.988 0 01-3.685-13.673 10.054 10.054 0 0113.706-3.663 9.977 9.977 0 013.685 13.64 10.043 10.043 0 01-13.706 3.696zm-16.511-21.714a8.553 8.553 0 118.569-14.806c4.092 2.354 5.5 7.579 3.135 11.66a8.58 8.58 0 01-11.704 3.146zm-9.713-21.186a7.326 7.326 0 01-2.706-10.021 7.381 7.381 0 0110.065-2.695c3.52 2.024 4.73 6.512 2.706 10.01a7.37 7.37 0 01-10.065 2.706zm-4.279-19.547a6.292 6.292 0 01-2.31-8.613 6.336 6.336 0 018.624-2.31 6.308 6.308 0 11-6.314 10.923zm41.25 109.186a11.891 11.891 0 01-11.913-11.88 11.88 11.88 0 0111.913-11.869c6.578 0 11.913 5.313 11.913 11.88 0 6.556-5.335 11.869-11.913 11.869zm-32.098-23.518a10.032 10.032 0 01-.473-14.212 10.12 10.12 0 0114.267-.462c4.07 3.795 4.268 10.153.462 14.212a10.12 10.12 0 01-14.256.462zm-16.115-21.428a8.492 8.492 0 01-.385-12.023 8.547 8.547 0 0112.056-.396 8.47 8.47 0 01.396 12.023 8.558 8.558 0 01-12.067.396zm-9.449-21.164a7.238 7.238 0 01-.33-10.263 7.304 7.304 0 0110.296-.341 7.26 7.26 0 01.341 10.274 7.304 7.304 0 01-10.307.33zm-3.916-19.404a6.226 6.226 0 01-.286-8.811 6.27 6.27 0 018.855-.297c2.53 2.354 2.64 6.303.286 8.822a6.27 6.27 0 01-8.855.286zm.264-17.006a5.335 5.335 0 01-.253-7.568 5.39 5.39 0 017.601-.242 5.379 5.379 0 01-7.348 7.81zm7.425 94.16a10.098 10.098 0 012.684-14.047 10.164 10.164 0 0114.102 2.673 10.076 10.076 0 01-2.684 14.036 10.175 10.175 0 01-14.102-2.662zm-15.906-21.296a8.58 8.58 0 012.277-11.957 8.657 8.657 0 0111.99 2.266 8.58 8.58 0 01-2.277 11.957 8.646 8.646 0 01-11.99-2.266zm-9.438-20.713a7.414 7.414 0 011.969-10.318 7.48 7.48 0 0110.362 1.958 7.414 7.414 0 01-1.98 10.34 7.48 7.48 0 01-10.351-1.98zm-3.96-19.294a6.446 6.446 0 011.705-8.965 6.49 6.49 0 018.998 1.705 6.424 6.424 0 01-1.716 8.965 6.49 6.49 0 01-8.987-1.705zm.44-16.896a5.5 5.5 0 011.452-7.656 5.544 5.544 0 017.689 1.452 5.533 5.533 0 01-9.141 6.204zm3.454-14.113a4.697 4.697 0 117.766-5.28 4.697 4.697 0 01-7.766 5.28zm-52.14-16.962a14.036 14.036 0 0119.14 5.126 13.948 13.948 0 01-5.137 19.074c-6.71 3.85-15.268 1.551-19.129-5.115a13.948 13.948 0 015.126-19.085zm31.13-19.91a11.88 11.88 0 0116.214 4.323c3.267 5.665 1.32 12.892-4.356 16.159a11.902 11.902 0 01-16.203-4.334 11.803 11.803 0 014.345-16.159zm29.711-10.747a10.065 10.065 0 0113.706 3.663 10.01 10.01 0 01-3.674 13.673 10.065 10.065 0 01-13.706-3.674 9.988 9.988 0 013.674-13.662zm27.137-3.366a8.58 8.58 0 0111.704 3.135 8.525 8.525 0 01-3.135 11.66 8.58 8.58 0 01-11.726-3.135 8.525 8.525 0 013.157-11.66zm23.254 2.244a7.37 7.37 0 0110.054 2.695 7.37 7.37 0 01-12.76 7.337 7.326 7.326 0 012.706-10.032zm19.118 6.094a6.347 6.347 0 018.635 2.31 6.281 6.281 0 01-2.31 8.613 6.311 6.311 0 11-6.325-10.923zM149.754 189.64a11.924 11.924 0 0114.85 7.942 11.924 11.924 0 01-22.803 6.864 11.847 11.847 0 017.953-14.806zm29.634-10.483a10.065 10.065 0 015.83 19.25 10.057 10.057 0 11-5.83-19.25zM206.074 176a8.503 8.503 0 114.917 16.28 8.503 8.503 0 11-4.917-16.28zm23.1 2.453a7.268 7.268 0 014.202 13.915 7.293 7.293 0 01-9.075-4.862 7.26 7.26 0 014.884-9.053zm18.81 6.347a6.248 6.248 0 013.608 11.946 6.24 6.24 0 11-3.608-11.946zm14.63 8.745a5.357 5.357 0 113.113 10.252 5.357 5.357 0 11-3.113-10.252zm-85.47-40.777a10.12 10.12 0 0110.868 9.35 10.147 10.147 0 01-20.24 1.474 10.12 10.12 0 019.383-10.824zm26.477-3.058a8.613 8.613 0 011.243 17.16 8.613 8.613 0 11-1.243-17.16zm22.704 2.244a7.447 7.447 0 011.078 14.828 7.436 7.436 0 01-1.078-14.828zm18.733 6.248a6.457 6.457 0 01.935 12.87 6.457 6.457 0 11-.935-12.87zm14.454 8.844zm10.527 10.065z"
    />
  </Svg>
);

export default SvgMiota;