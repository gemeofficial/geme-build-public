import { SVGProps } from 'react'

const IconCheckCycle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g stroke="#fff">
      <path
        strokeMiterlimit={10}
        d="M10 15.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.757 10.059 8.88 12.18l4.242-4.242"
      />
    </g>
  </svg>
)

export default IconCheckCycle
