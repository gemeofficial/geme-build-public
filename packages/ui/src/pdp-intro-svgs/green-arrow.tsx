import { SVGProps } from 'react'

const SvgGreenArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    // width={770}
    // height={52}
    viewBox="0 0 770 52"
    fill="none"
    {...props}
  >
    <path
      fill="url(#green-arrow-a)"
      d="M729.134 23.833H0V32.5h729.134v-8.667Z"
    />
    <path
      fill="#3B806F"
      d="M722.682 26V0l23.648 13L770 26l-23.67 13-23.648 13V26Z"
    />
    <defs>
      <linearGradient
        id="green-arrow-a"
        viewBox="0 0 729.133 28.175"
        // x1={-0.006}
        // x2={729.133}
        // y1={28.175}
        // y2={28.175}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff" />
        <stop offset={1} stopColor="#3B806F" />
      </linearGradient>
    </defs>
  </svg>
)

export default SvgGreenArrow
