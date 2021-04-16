import React from 'react';
import { SVGLogoProps } from '../utils';

export default function ChartsDefaultMonochromeLogo({
  fill,
  ...rest
}: SVGLogoProps) {
  return (
    <svg viewBox="0 0 186 32" {...rest}>
      <path
        d="M6.91571 0C6.91717 0.029982 6.91717 0.060018 6.91571 0.09C7.16191 0.715422 7.46309 1.31778 7.81571 1.89C8.26571 2.8 12.1657 5.19 13.8157 12.48C13.971 13.4754 14.0346 14.483 14.0057 15.49C14.0476 19.661 12.3262 23.6558 9.26571 26.49L8.9441 26.7838C8.72569 26.9752 8.49936 27.1574 8.26571 27.33H8.21571C7.9261 28.6509 7.7058 29.9861 7.55571 31.33H6.92571C6.74571 29.43 6.49571 27.59 6.49571 27.59L6.40571 27.53C5.59571 26.94 -0.344294 22.35 0.0157061 14.63C0.405706 6.36 5.25571 2.29 6.23571 1.55C6.6877 1.16467 6.93826 0.593519 6.91571 0ZM66.4557 15.15C67.2276 15.171 67.9882 15.3407 68.6957 15.65C69.1184 15.8029 69.5664 15.8742 70.0157 15.86C70.5714 15.9306 71.1277 15.7341 71.5157 15.33C71.5665 15.4608 71.5936 15.5997 71.5957 15.74C71.6124 16.0731 71.5213 16.4028 71.3357 16.68C71.1104 16.934 70.7852 17.0765 70.4457 17.07H70.3457C70.1628 17.0608 69.9817 17.0306 69.8057 16.98H69.7157V17.13C69.7757 17.4206 69.8191 17.7144 69.8457 18.01C69.9593 19.1878 69.4277 20.3352 68.4557 21.01C67.8338 21.482 67.1034 21.7875 66.3337 21.8998L66.0757 21.93H65.7957L65.5157 22.02C65.3557 22.07 64.9557 22.26 64.9557 22.62C64.9557 22.98 65.1357 23.29 66.0157 23.36H66.5857C67.6929 23.3919 68.7945 23.5292 69.8757 23.77C70.8224 24.1036 71.4396 25.0172 71.3957 26.02C71.3957 27.53 70.3157 28.95 68.5157 29.82C67.67 30.2254 66.7435 30.4339 65.8057 30.4301L65.7657 30.39C64.7221 30.4504 63.69 30.1464 62.8457 29.53C62.2131 29.0511 61.8192 28.3216 61.7657 27.53C61.7806 27.1588 61.9257 26.8048 62.1757 26.53C62.7565 25.9557 63.4007 25.4491 64.0957 25.02C64.1355 25.0075 64.1634 24.9717 64.1657 24.93C64.1632 24.883 64.131 24.8428 64.0857 24.83C63.4579 24.6437 62.9611 24.1618 62.7557 23.54C62.6937 23.4012 62.7452 23.238 62.8757 23.16L63.4557 22.8C63.7771 22.6183 64.0876 22.4179 64.3857 22.2C64.4002 22.1579 64.4002 22.1121 64.3857 22.07C64.3782 22.0227 64.3484 21.9818 64.3057 21.96C62.9359 21.5561 62.0408 20.2426 62.1657 18.82C62.1355 17.759 62.6434 16.7546 63.5157 16.15C64.3034 15.623 65.2035 15.2909 66.1417 15.1791L66.4557 15.15ZM65.6657 25C65.3629 24.9981 65.0643 25.0702 64.7957 25.21C63.9457 25.84 63.5157 26.38 63.5157 27.02C63.511 27.596 63.7777 28.1406 64.2357 28.49C64.9332 29.0312 65.8048 29.298 66.6857 29.24C68.7657 29.24 69.6857 28.12 69.6857 27.02C69.7194 26.2804 69.2318 25.6179 68.5157 25.43C67.5774 25.1588 66.6016 25.0407 65.6257 25.08L65.6657 25ZM7.18571 12.35C6.86551 12.35 6.82241 20.453 6.81661 22.6346L6.81603 22.8891C6.81597 22.9253 6.81592 22.9582 6.81587 22.9878L6.81571 23.17H6.84571C6.84571 24.02 7.34571 26.25 7.81571 26.35C7.81571 26.35 7.55571 12.35 7.18571 12.35ZM135.236 9.91C138.666 9.91 140.846 11.56 141.796 14.31L139.866 14.69C139.245 12.6665 137.329 11.3233 135.216 11.43C131.936 11.43 130.086 13.86 130.086 17.36C130.086 21.48 132.346 23.41 135.236 23.41C137.689 23.4892 139.78 21.6441 140.006 19.2L142.056 19.47C141.354 22.7962 138.363 25.137 134.966 25.02C130.646 25.02 127.966 21.97 127.966 17.46C127.966 12.95 130.676 9.91 135.236 9.91ZM158.346 14.76C159.182 14.7497 160.007 14.9491 160.746 15.34C162.056 16.0765 162.186 17.0235 162.195 18.6009L162.196 22.22C162.196 22.79 162.196 23.34 162.926 23.34C163.092 23.3354 163.257 23.3084 163.416 23.26V24.62C163.096 24.7428 162.758 24.8072 162.416 24.81C162.066 24.8184 161.72 24.732 161.416 24.56C161.058 24.2609 160.824 23.841 160.756 23.38C159.956 24.3729 158.75 24.9502 157.476 24.95C155.566 24.95 154.216 23.85 154.216 22.2C154.205 21.3883 154.575 20.6183 155.216 20.12C156.394 19.428 157.73 19.0493 159.096 19.02L160.566 18.92L160.565 18.4221C160.556 17.5022 160.423 16.03 158.426 16.03C157.086 16.03 156.346 16.7 156.346 17.9V18.02L154.656 17.92C154.656 17.45 154.946 14.76 158.346 14.76ZM184.976 16.48C185.256 16.921 185.43 17.4206 185.486 17.94L183.736 18.15C183.75 17.8437 183.702 17.5376 183.596 17.25C183.086 16.4162 182.15 15.9406 181.176 16.02C179.856 16.02 179.286 16.81 179.286 17.42C179.286 18.26 180.136 18.58 181.606 18.93L182.546 19.15C184.336 19.58 185.736 20.15 185.736 21.95C185.736 23.75 184.006 24.95 181.736 24.95C178.646 24.95 177.566 23.42 177.276 21.55L179.116 21.32C179.055 21.932 179.246 22.5422 179.646 23.01C180.22 23.5652 181.012 23.8363 181.806 23.75C182.606 23.75 184.026 23.5 184.026 22.14C184.026 20.98 182.906 20.77 182.026 20.61L181.086 20.43C178.456 19.92 177.666 18.98 177.666 17.64C177.666 15.54 179.666 14.78 181.396 14.78C182.8 14.7016 184.149 15.3419 184.976 16.48ZM46.2012 16.4854C47.0578 17.3687 47.5023 18.572 47.4257 19.8C47.5034 21.485 46.691 23.087 45.2857 24.02C44.4378 24.5336 43.4758 24.8291 42.4857 24.88L42.5157 24.9C39.0357 24.9 37.7957 22.35 37.7957 19.96C37.7342 18.4078 38.494 16.9377 39.7957 16.09C40.7368 15.505 41.8179 15.1838 42.9257 15.16C44.1554 15.121 45.3446 15.6022 46.2012 16.4854ZM81.5844 16.485C82.4425 17.3678 82.8894 18.5711 82.8157 19.8C82.8956 21.483 82.0872 23.0847 80.6857 24.02C79.8328 24.5306 78.8683 24.8258 77.8757 24.88L77.8857 24.9C74.4157 24.9 73.1757 22.35 73.1757 19.96C73.1122 18.4073 73.8724 16.9363 75.1757 16.09C76.1168 15.505 77.1979 15.1838 78.3057 15.16C79.5362 15.1213 80.7263 15.6022 81.5844 16.485ZM174.016 12.02V15.02H175.746V16.36H174.016L174.026 22.61C174.026 23.3 174.236 23.56 174.746 23.56C175.088 23.5377 175.425 23.4635 175.746 23.34V24.68C175.238 24.7805 174.723 24.8374 174.206 24.85C172.616 24.85 172.346 24.22 172.346 23.12V16.43H170.796V15.09H172.346V12.02H174.016ZM52.6057 15.1C52.7233 15.21 52.7794 15.3707 52.7557 15.53C52.7557 15.85 52.7657 16.31 52.7557 16.53C52.7457 16.75 52.9257 16.59 52.9257 16.59C53.7747 15.7802 54.8615 15.2649 56.0257 15.12C56.9717 15.1064 57.8602 15.5732 58.3857 16.36C58.8163 17.1076 59.0423 17.9537 59.0436 18.8131L59.0357 19.1V23.22C59.054 23.3409 59.11 23.4529 59.1957 23.54C59.5287 23.6929 59.8814 23.7972 60.243 23.85L60.445 23.872L60.4767 24.0027C60.516 24.2255 60.4935 24.4549 60.4118 24.6658L60.3557 24.79C60.0357 24.79 59.2257 24.72 57.9457 24.72C56.9357 24.72 56.2357 24.79 55.6357 24.79C55.5207 24.4941 55.5207 24.1659 55.6357 23.87C55.976 23.8591 56.3129 23.7985 56.6357 23.69C56.9357 23.57 57.0057 23.39 57.0057 22.57C57.0057 22.268 57.0065 21.9568 57.0071 21.6452L57.007 20.718C57.0041 19.8072 56.9897 18.972 56.9357 18.45C56.8849 17.9576 56.6533 17.5015 56.2857 17.17C55.8906 16.8423 55.3887 16.6714 54.8757 16.69C54.1816 16.6933 53.5101 16.9371 52.9757 17.38C52.8078 17.5491 52.7159 17.777 52.7172 18.0121L52.7257 18.13V23.05C52.7457 23.46 52.8357 23.65 53.2057 23.74C53.5335 23.8188 53.8687 23.8623 54.2057 23.87C54.2894 24.1773 54.2574 24.5047 54.1157 24.79C53.7517 24.79 53.1612 24.729 51.9865 24.7209L51.5417 24.7208C50.6119 24.7285 49.5613 24.79 49.3457 24.79C49.2354 24.4933 49.2354 24.1667 49.3457 23.87C49.5392 23.8484 49.7314 23.8175 49.9217 23.7773L50.2057 23.71L50.3017 23.6806C50.5749 23.5852 50.716 23.4217 50.7415 23.0586L50.7457 22.93L50.7466 17.6871C50.7495 17.5136 50.7495 17.32 50.5657 17.18C50.2661 16.9984 49.9478 16.8501 49.6165 16.7376L49.3657 16.66L49.2756 16.6248C48.8622 16.4327 48.997 16.0144 49.4657 15.93C50.5405 15.7736 51.594 15.4951 52.6057 15.1ZM101.876 10.3C102.086 10.3 102.706 10.37 104.276 10.37C105.846 10.37 106.956 10.32 108.396 10.32C110.176 10.32 112.626 10.97 112.626 13.62C112.593 14.9381 111.756 16.1013 110.516 16.55C110.446 16.55 110.446 16.62 110.516 16.64C112.236 17.08 113.736 18.13 113.736 20.14C113.736 22.15 112.506 23.34 110.736 24.14C109.529 24.6069 108.239 24.8246 106.946 24.78C105.946 24.78 103.116 24.67 101.566 24.69C101.396 24.62 101.706 23.89 101.846 23.78C102.184 23.7619 102.52 23.7049 102.846 23.61C103.406 23.48 103.466 23.3 103.536 22.47C103.606 21.64 103.536 19.22 103.536 17.42V12.42C103.536 11.78 103.276 11.57 102.836 11.42C102.396 11.27 101.916 11.28 101.456 11.21C101.336 11.1 101.696 10.41 101.806 10.32L101.876 10.3ZM22.1257 15.15C22.1778 15.2214 22.2089 15.3053 22.2163 15.3923L22.2157 16.46C22.2259 16.546 22.2991 16.6106 22.3857 16.61C22.4305 16.6089 22.4733 16.591 22.5057 16.56C23.3715 15.7932 24.4484 15.3053 25.5957 15.16C26.5961 15.1573 27.5127 15.7181 27.9657 16.61C27.9927 16.657 28.0416 16.6871 28.0957 16.69C28.1474 16.6877 28.1953 16.6619 28.2257 16.62C29.1303 15.8366 30.2411 15.3298 31.4257 15.16C33.3257 15.16 34.4257 16.58 34.4257 18.95V23.14C34.4552 23.3543 34.596 23.5369 34.7957 23.62C35.0981 23.7406 35.4128 23.8272 35.7338 23.8783L35.9757 23.91C35.9962 24.1725 35.9551 24.4362 35.8557 24.68H33.7857L33.5053 24.68L33.0023 24.6809C32.2227 24.6837 31.7203 24.6962 31.2357 24.75C31.1805 24.4963 31.1805 24.2337 31.2357 23.98C31.5957 23.91 31.7757 23.86 31.9957 23.8C32.3957 23.66 32.5157 23.48 32.5357 22.95C32.5557 22.42 32.6157 19.24 32.5357 18.45C32.4205 17.3967 31.5039 16.616 30.4457 16.67C29.6859 16.7133 28.9587 16.993 28.3657 17.47C28.3319 17.5035 28.3078 17.545 28.2954 17.5902L28.2857 17.66C28.3705 18.2157 28.4006 18.7784 28.3757 19.34V23.11C28.3548 23.4162 28.5646 23.6903 28.8657 23.75L29.1757 23.82C29.3557 23.82 29.5457 23.91 29.8157 23.96C29.8663 24.1466 29.8663 24.3434 29.8157 24.53C29.8064 24.6024 29.7789 24.6712 29.7357 24.73C29.0357 24.73 28.3157 24.68 27.2857 24.68H25.0957C25.0556 24.5853 25.0321 24.4847 25.026 24.3825L25.0257 24.28C25.0181 24.1528 25.0421 24.0256 25.0957 23.91H25.3757C25.6157 23.86 25.8257 23.83 26.0257 23.78C26.2257 23.73 26.5057 23.48 26.5257 23.05C26.6315 21.4885 26.6315 19.9215 26.5257 18.36C26.4459 17.3255 25.5625 16.5393 24.5257 16.58C23.7673 16.6297 23.042 16.9087 22.4457 17.38C22.3183 17.5024 22.2492 17.6734 22.2557 17.85V23.12C22.2582 23.4461 22.5021 23.7199 22.8257 23.76C22.9804 23.7994 23.1374 23.8294 23.2957 23.85L23.6757 23.92C23.7147 24.1779 23.6942 24.4413 23.6157 24.69H18.8857C18.8242 24.545 18.8001 24.3868 18.8157 24.23C18.813 24.1225 18.8371 24.0159 18.8857 23.92C19.1852 23.875 19.4823 23.8149 19.7757 23.74C20.1857 23.64 20.3357 23.41 20.3657 22.89C20.4357 21.66 20.4357 19.34 20.3657 17.72V17.67C20.3953 17.4519 20.3125 17.2336 20.1457 17.09C19.7667 16.8464 19.3516 16.6641 18.9157 16.55C18.7257 16.49 18.6157 16.39 18.6257 16.27C18.6357 16.15 18.7557 16.01 19.0057 15.96C20.0723 15.8055 21.1186 15.5339 22.1257 15.15ZM117.199 21.0901C118.192 21.0809 119.005 21.8773 119.016 22.87C119.027 23.3507 118.842 23.8154 118.505 24.1582C118.168 24.501 117.707 24.6928 117.226 24.69C116.233 24.6955 115.423 23.8961 115.416 22.9033C115.409 21.9105 116.206 21.0993 117.199 21.0901ZM98.0757 11.93C99.5796 13.2481 100.413 15.1714 100.346 17.17C100.455 19.4737 99.3901 21.6761 97.5157 23.02C95.8001 24.2062 93.7382 24.7868 91.6557 24.67C90.797 24.67 89.5473 24.6506 88.2463 24.6312L87.4622 24.6197C87.0698 24.6141 86.6789 24.6088 86.2986 24.6044L85.8957 24.6C85.8057 24.42 86.0757 23.7 86.2357 23.69C86.5538 23.6764 86.8678 23.6123 87.1657 23.5C87.5857 23.33 87.6857 23.11 87.7357 22.36C87.8057 20.94 87.7357 19.25 87.7357 17.36V12.46C87.7357 11.61 87.3657 11.57 86.7357 11.46C86.3063 11.3674 85.8724 11.2973 85.4357 11.25C85.5143 10.9262 85.6609 10.6228 85.8657 10.36V10.33C86.0607 10.33 86.5332 10.3475 87.0432 10.365L87.4839 10.3796C87.8495 10.3911 88.1993 10.4 88.4457 10.4C89.7457 10.4 90.6457 10.33 93.0757 10.33C94.8808 10.2427 96.6566 10.8109 98.0757 11.93ZM170.136 14.97V16.72C169.928 16.6797 169.717 16.6596 169.506 16.66C168.35 16.6005 167.31 17.3539 167.006 18.47C166.87 19.0496 166.82 19.6458 166.856 20.24V24.68H165.226V15.09H166.856V16.84C167.075 16.4142 167.382 16.0394 167.756 15.74C168.438 15.2185 169.278 14.9467 170.136 14.97ZM145.676 10.3V16.07C146.401 15.2222 147.471 14.748 148.586 14.78C151.506 14.78 152.036 16.86 152.036 18.47V24.68H150.386V19.02C150.41 18.4832 150.346 17.946 150.196 17.43C149.904 16.6276 149.118 16.1142 148.266 16.17C147.39 16.1604 146.574 16.6174 146.126 17.37C145.755 18.1517 145.6 19.0182 145.676 19.88V24.64H144.046V10.3H145.676ZM117.226 21.26C116.561 21.256 115.96 21.6529 115.703 22.2654C115.446 22.8779 115.584 23.585 116.053 24.0561C116.521 24.5272 117.227 24.6693 117.841 24.4161C118.455 24.1629 118.856 23.5642 118.856 22.9C118.858 22.466 118.688 22.0488 118.382 21.7409C118.076 21.4331 117.66 21.26 117.226 21.26ZM117.186 21.76C117.686 21.76 117.896 21.98 117.896 22.39C117.949 22.6663 117.785 22.9381 117.516 23.02L117.996 24.02L117.666 24.03L117.206 23.03H116.826V24.03H116.516V21.76H117.186ZM77.5157 16.13C77.1233 16.1222 76.7373 16.23 76.4057 16.44C75.5146 17.1221 75.0537 18.2268 75.1957 19.34C75.1957 22.03 76.5457 23.9 78.4657 23.9C78.9827 23.922 79.4881 23.7428 79.8757 23.4C80.5781 22.627 80.9102 21.587 80.7857 20.55C80.7857 17.91 79.4757 16.13 77.5157 16.13ZM42.1157 16.13C41.7233 16.1222 41.3373 16.23 41.0057 16.44C40.1146 17.1221 39.6537 18.2268 39.7957 19.34C39.7957 22.03 41.1357 23.9 43.0657 23.9C43.5827 23.922 44.0881 23.7428 44.4757 23.4C45.1746 22.625 45.5062 21.5866 45.3857 20.55C45.3857 17.9925 44.1469 16.2421 42.2966 16.1352L42.1157 16.13ZM105.986 17.45C105.916 17.45 105.846 17.52 105.846 17.56V22.23C105.901 22.6756 106.145 23.076 106.516 23.33C107.09 23.5306 107.698 23.6156 108.306 23.58C109.121 23.651 109.926 23.3579 110.505 22.7791C111.084 22.2004 111.377 21.3954 111.306 20.58L111.346 20.61C111.346 18.61 109.866 17.45 107.166 17.45C106.773 17.4256 106.379 17.4256 105.986 17.45ZM160.586 20.02C159.422 20.1471 158.272 20.3712 157.146 20.69C156.487 20.89 156.018 21.4736 155.966 22.16C155.966 22.87 156.496 23.58 157.776 23.58C158.541 23.6383 159.293 23.3582 159.834 22.8136C160.375 22.269 160.649 21.5148 160.586 20.75V20.02ZM91.3957 11.33C91.0103 11.3055 90.6237 11.353 90.2557 11.47C90.1515 11.5498 90.0775 11.6626 90.0457 11.79V22.06C90.0714 22.429 90.24 22.7734 90.5157 23.02C91.2141 23.4283 92.0182 23.6197 92.8257 23.57C94.0256 23.6351 95.201 23.2133 96.0857 22.4C97.3893 21.1211 98.0594 19.3305 97.9157 17.51C98.0507 15.3905 97.0245 13.3649 95.2357 12.22C94.0636 11.5714 92.7336 11.2632 91.3957 11.33ZM117.186 22.02H116.826V22.79H117.226C117.546 22.79 117.666 22.68 117.666 22.39C117.666 22.1 117.516 22.02 117.186 22.02ZM65.8057 16V16.02C64.7357 16.02 64.0357 16.87 64.0357 18.18C64.0357 19.49 64.6357 21.02 66.3157 21.02C66.7097 21.0147 67.089 20.8693 67.3857 20.61C67.8328 20.0889 68.062 19.4156 68.0257 18.73C68.0257 17.02 67.1957 16 65.8057 16ZM106.096 11.45L106.056 11.49C105.937 11.5786 105.861 11.7128 105.846 11.86V16.32C105.856 16.3781 105.899 16.4251 105.956 16.44H107.626C108.191 16.4791 108.757 16.3938 109.286 16.19C109.998 15.7829 110.42 15.0091 110.376 14.19C110.376 12.19 108.986 11.45 106.926 11.45C106.649 11.4338 106.372 11.4338 106.096 11.45Z"
        fill={fill}
      />
    </svg>
  );
}