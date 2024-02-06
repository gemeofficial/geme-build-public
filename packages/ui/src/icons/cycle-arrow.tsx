import { SVGProps } from 'react'

const IconCycleArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <g stroke="#fff" strokeWidth={2}>
      <path
        strokeMiterlimit={10}
        d="M10 18.143a8.143 8.143 0 1 0 0-16.286 8.143 8.143 0 0 0 0 16.286Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.242 5.714 4.243 4.243L8.242 14.2"
      />
    </g>
  </svg>
)

export default IconCycleArrow
