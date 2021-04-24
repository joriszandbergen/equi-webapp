import React from "react";
import PropTypes from "prop-types";

const PowerProduction = ({ powerProduction }) => {
  const textLength = powerProduction.length * 17 + 30;

  return (
    <g
      style={{
        transform: `translateX(${439 - textLength}px) translateY(240px)`,
      }}
    >
      <mask
        id="PowerProductionMask"
        mask-type="alpha"
        x="0"
        y="0"
        width={`${70 + textLength}px `}
        height="300px"
      >
        <rect width={`${65 + textLength}`} height="150" fill="black" />
      </mask>

      <g mask="url(#PowerProductionMask)">
        <rect
          width={`${100 + textLength}`}
          height="64"
          rx="32"
          fill="url(#PowerProductionColor)"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.2786 11.8315C38.841 11.8315 39.2969 12.2874 39.2969 12.8498L39.2969 18.8186C39.2969 19.381 38.841 19.8369 38.2786 19.8369C37.7163 19.8369 37.2604 19.381 37.2604 18.8186L37.2604 12.8498C37.2604 12.2874 37.7163 11.8315 38.2786 11.8315Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.6793 46.5975C52.2816 46.9951 51.6369 46.9951 51.2392 46.5975L47.0684 42.4266C46.6707 42.0289 46.6707 41.3842 47.0684 40.9866C47.466 40.5889 48.1107 40.5889 48.5084 40.9866L52.6793 45.1574C53.0769 45.5551 53.0769 46.1998 52.6793 46.5975Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M52.6793 17.7964C53.0769 18.1941 53.0769 18.8388 52.6793 19.2365L48.5084 23.4074C48.1107 23.805 47.466 23.805 47.0683 23.4074C46.6707 23.0097 46.6707 22.365 47.0683 21.9673L51.2392 17.7964C51.6369 17.3988 52.2816 17.3988 52.6793 17.7964Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M58.644 32.197C58.644 32.7594 58.1881 33.2153 57.6258 33.2153L51.657 33.2153C51.0946 33.2153 50.6387 32.7594 50.6387 32.197C50.6387 31.6346 51.0946 31.1787 51.657 31.1787L57.6258 31.1787C58.1881 31.1787 58.644 31.6346 58.644 32.197Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M38.2786 44.5569C38.841 44.5569 39.2969 45.0128 39.2969 45.5752L39.2969 51.5439C39.2969 52.1063 38.841 52.5622 38.2786 52.5622C37.7163 52.5622 37.2604 52.1063 37.2604 51.5439L37.2604 45.5752C37.2604 45.0128 37.7163 44.5569 38.2786 44.5569Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.489 23.4073C29.0913 23.8049 28.4466 23.8049 28.0489 23.4073L23.8781 19.2364C23.4804 18.8388 23.4804 18.194 23.8781 17.7964C24.2757 17.3987 24.9204 17.3987 25.3181 17.7964L29.489 21.9672C29.8866 22.3649 29.8866 23.0096 29.489 23.4073Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M29.4892 40.9866C29.8868 41.3843 29.8868 42.029 29.4892 42.4267L25.3183 46.5975C24.9207 46.9952 24.2759 46.9952 23.8783 46.5975C23.4806 46.1999 23.4806 45.5552 23.8783 45.1575L28.0491 40.9866C28.4468 40.589 29.0915 40.589 29.4892 40.9866Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.9186 32.197C25.9186 32.7594 25.4627 33.2153 24.9003 33.2153L18.9315 33.2153C18.3692 33.2153 17.9133 32.7594 17.9133 32.197C17.9133 31.6346 18.3692 31.1787 18.9315 31.1787L24.9003 31.1787C25.4627 31.1787 25.9186 31.6346 25.9186 32.197Z"
          fill="white"
        />
        <path
          d="M47.7463 32.197C47.7463 37.4258 43.5075 41.6647 38.2786 41.6647C33.0498 41.6647 28.8109 37.4258 28.8109 32.197C28.8109 26.9681 33.0498 22.7292 38.2786 22.7292C43.5075 22.7292 47.7463 26.9681 47.7463 32.197Z"
          fill="white"
        />

        <text x="65" y="45" fontSize="35" fill="white">
          {powerProduction}
        </text>
        <defs>
          <linearGradient
            id="PowerProductionColor"
            x1="0"
            y1="0"
            x2="153.979"
            y2="78.2363"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F4E696" />
            <stop offset="1" stopColor="#F4E696" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </g>
    </g>
  );
};

PowerProduction.propTypes = {
  powerProduction: PropTypes.string.isRequired,
};

export default PowerProduction;