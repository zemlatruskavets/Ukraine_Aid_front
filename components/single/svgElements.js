import styled from 'styled-components';

const Icon2 = styled.svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink',
})``;

const Svg = styled(Icon2)``;
// this is a circle with a plus sign in the middle
const AddPlus = ({ colour }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="60"
    height="60"
    viewBox="0 0 60 60">
    <g id="Group_11" data-name="Group 11" transform="translate(-468 -1812)">
      <g
        id="Ellipse_27"
        data-name="Ellipse 27"
        transform="translate(468 1812)"
        fill="none"
        stroke={colour}
        stroke-width="4">
        <circle cx="30" cy="30" r="28" fill="none" />
      </g>
      <line
        id="Line_5"
        data-name="Line 5"
        y2="30"
        transform="translate(498.5 1827.5)"
        fill="none"
        stroke={colour}
        stroke-linecap="round"
        stroke-width="4"
      />
      <line
        id="Line_6"
        data-name="Line 6"
        x2="30"
        transform="translate(483.5 1842.5)"
        fill="none"
        stroke={colour}
        stroke-linecap="round"
        stroke-width="4"
      />
    </g>
  </Svg>
);

// this is a circle with a plus sign in the middle
const Edit = ({ colour }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32">
    <g
      transform="translate(0,32) scale(0.00625,-0.00625)"
      fill={colour}
      stroke="none">
      <path
        d="M2244 5020 c-1693 -238 -2661 -2066 -1893 -3572 624 -1221 2112
-1713 3320 -1097 1521 776 1831 2790 612 3974 -549 533 -1321 796 -2039 695z
m682 -170 c1859 -280 2610 -2597 1276 -3932 -1335 -1334 -3652 -583 -3932
1276 -238 1578 1078 2894 2656 2656z"
      />
      <path
        d="M3310 3902 c-105 -26 -125 -44 -1035 -956 l-894 -896 -101 -428 c-56
-235 -98 -431 -94 -435 5 -4 200 37 435 92 l428 100 897 895 c493 493 908 919
923 946 167 321 -202 771 -559 682z m256 -193 c209 -142 252 -327 110 -481
l-83 -90 -228 226 -227 226 93 85 c115 105 215 115 335 34z m-157 -749 l-72
-70 -217 230 -217 230 63 65 63 66 225 -225 226 -225 -71 -71z m-399 40 l220
-220 -605 -605 -605 -605 -225 225 -225 225 600 600 c330 330 604 600 610 600
6 0 109 -99 230 -220z m-1185 -1502 c-23 -22 -405 -105 -418 -91 -12 11 67
384 88 420 5 9 85 -58 177 -149 92 -92 161 -173 153 -180z"
      />
    </g>
  </Svg>
);

// this is a circle with a plus sign in the middle
const Delete = ({ colour }) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32">
    <g
      transform="translate(0,32) scale(0.003125,-0.003125)"
      fill={colour}
      stroke="none">
      <path
        d="M4180 10228 c-921 -111 -1495 -305 -2130 -723 -2396 -1573 -2748
-4927 -728 -6943 2165 -2161 5790 -1587 7187 1138 1386 2704 -299 6004 -3309
6481 -239 38 -858 67 -1020 47z m990 -495 c3603 -640 4610 -5326 1582 -7356
-2683 -1799 -6292 130 -6292 3363 0 1990 1507 3746 3430 3999 88 11 187 25
220 29 126 18 906 -8 1060 -35z"
      />
      <path
        d="M2568 7672 c-56 -56 -68 -83 -68 -154 l0 -87 845 -845 844 -846 -844
-846 c-818 -818 -845 -848 -845 -921 0 -179 171 -289 326 -211 24 12 411 388
859 835 l815 813 805 -802 c883 -881 869 -868 984 -868 130 1 211 90 211 233
0 73 -29 105 -840 917 l-840 840 811 810 c964 962 967 966 798 1135 -155 155
-133 171 -1092 -788 l-837 -837 -845 845 -846 845 -87 0 c-71 0 -98 -12 -154
-68z"
      />
    </g>
  </Svg>
);

export { AddPlus, Edit, Delete };
