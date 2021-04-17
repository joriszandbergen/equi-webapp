import React from "react";

const MenuItem3 = ({ active, onClick }) => {
  return (
    <g>
      {active ? (
        <>
          <linearGradient
            id="AppliancesActive"
            x1="684"
            y1="681"
            x2="937"
            y2="934"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#75C7CC" />
            <stop offset="1" stopColor="#75C7CC" stopOpacity="0.5" />
          </linearGradient>
          <circle
            cx="810.5"
            cy="807.5"
            r="126.5"
            fill="url(#AppliancesActive)"
          />
        </>
      ) : (
        <circle
          opacity="0.5"
          cx="810.5"
          cy="807.5"
          r="119"
          stroke="white"
          strokeWidth="15"
        />
      )}

      <g opacity={active ? 1 : 0.5}>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M868.109 779.826H802.891C800.49 779.826 798.543 781.773 798.543 784.174V871.13C798.543 873.532 800.49 875.478 802.891 875.478H868.109C870.51 875.478 872.457 873.532 872.457 871.13V784.174C872.457 781.773 870.51 779.826 868.109 779.826ZM802.891 773.304C796.888 773.304 792.022 778.171 792.022 784.174V871.13C792.022 877.134 796.888 882 802.891 882H868.109C874.112 882 878.978 877.134 878.978 871.13V784.174C878.978 778.171 874.112 773.304 868.109 773.304H802.891Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M834.957 858.087C846.362 858.087 855.609 848.841 855.609 837.435C855.609 826.029 846.362 816.783 834.957 816.783C823.551 816.783 814.304 826.029 814.304 837.435C814.304 848.841 823.551 858.087 834.957 858.087ZM834.957 864.609C849.964 864.609 862.13 852.443 862.13 837.435C862.13 822.427 849.964 810.261 834.957 810.261C819.949 810.261 807.783 822.427 807.783 837.435C807.783 852.443 819.949 864.609 834.957 864.609Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M874.63 801.565H794.739V795.043H874.63V801.565Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M831.525 823.074C831.781 823.937 831.288 824.844 830.424 825.1C825.881 826.444 822.198 830.416 821.348 835.621C821.203 836.51 820.365 837.113 819.476 836.968C818.588 836.823 817.985 835.985 818.13 835.096C819.181 828.659 823.752 823.673 829.499 821.973C830.363 821.717 831.27 822.21 831.525 823.074Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M847.304 848.841C843.003 849.182 838.551 848.295 833.608 846.584C830.392 845.471 825.996 845.296 822.086 845.714C820.149 845.92 818.397 846.266 817.038 846.68C816.358 846.887 815.806 847.102 815.39 847.311C814.951 847.531 814.763 847.694 814.713 847.751L812.265 845.597C812.713 845.088 813.323 844.699 813.928 844.396C814.555 844.082 815.29 843.803 816.088 843.56C817.685 843.074 819.646 842.695 821.74 842.471C825.892 842.028 830.825 842.17 834.675 843.503C839.398 845.138 843.37 845.882 847.046 845.59C850.691 845.301 854.176 843.984 857.913 841.277L859.826 843.918C855.683 846.919 851.637 848.497 847.304 848.841Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M813.761 795.043V777.109H820.283V795.043H813.761Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M758.87 738.522H824.087C826.488 738.522 828.435 740.468 828.435 742.87V778.739H834.957V742.87C834.957 736.866 830.09 732 824.087 732H758.87C752.866 732 748 736.866 748 742.87V867.326C748 873.329 752.866 878.196 758.87 878.196H763.228C763.221 878.285 763.217 878.376 763.217 878.467C763.217 880.418 764.799 882 766.75 882H772.185C774.136 882 775.717 880.418 775.717 878.467C775.717 878.376 775.714 878.285 775.707 878.196H806.706C806.699 878.285 806.696 878.376 806.696 878.467C806.696 880.418 808.277 882 810.228 882H815.663C817.614 882 819.196 880.418 819.196 878.467C819.196 878.376 819.192 878.285 819.185 878.196H824.087C825.788 878.196 827.397 877.805 828.831 877.109H796.37V871.674H758.87C756.468 871.674 754.522 869.727 754.522 867.326V790.696H796.37V784.174H754.522V742.87C754.522 740.468 756.468 738.522 758.87 738.522ZM770.826 812.978C770.826 811.177 769.366 809.717 767.565 809.717C765.764 809.717 764.304 811.177 764.304 812.978L764.304 849.935C764.304 851.736 765.764 853.196 767.565 853.196C769.366 853.196 770.826 851.736 770.826 849.935L770.826 812.978ZM767.565 747.761C769.366 747.761 770.826 749.221 770.826 751.022L770.826 770.043C770.826 771.844 769.366 773.304 767.565 773.304C765.764 773.304 764.304 771.844 764.304 770.043L764.304 751.022C764.304 749.221 765.764 747.761 767.565 747.761Z"
          fill="white"
        />
      </g>

      <circle
        cx="810.5"
        cy="807.5"
        r="126.5"
        fill="white"
        opacity="0"
        onClick={onClick}
      />
    </g>
  );
};

export default MenuItem3;
