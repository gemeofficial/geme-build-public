import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  return (
    <>
      <button type="button" {...other} className=" text-3xl ">
        <span className=" text-primary ">{children}</span>
      </button>
    </>
  )
}

Button.displayName = 'Button'
