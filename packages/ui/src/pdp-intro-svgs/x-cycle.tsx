import { SVGProps } from 'react'

const IconXCycle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 10 10"
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeMiterlimit={10}
      d="M5 7.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m4 6 2-2M4 4l2 2"
    />
  </svg>
)
export default IconXCycle
