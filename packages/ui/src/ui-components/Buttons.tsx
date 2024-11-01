'use client'

import clsx from 'clsx'
import { ILinkComponent } from '../../../../apps/gemebuild/src/contexts/link-context'
import DefaultLink from 'next/link'
import { ComponentProps, PropsWithChildren } from 'react'

type TButtonType = 'button' | 'link' | 'transparent' | 'white'
type TButtonSize = 'large' | 'medium' | 'small'
//  extends ComponentProps<typeof DefaultLink>
export interface IButtonProps {
  href?: string // href如果传入，渲染为Link标签，否则渲染为button标签
  prefetch?: boolean
  PrefetchLink?: ILinkComponent
  className?: string
  type?: TButtonType
  size?: TButtonSize
  onClick?: (
    event:
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => void
}

// 网站主按钮
export function PrimaryButton({
  href,
  children,
  PrefetchLink,
  className,
  onClick,
  prefetch,
  type = 'button',
  size = 'large',
}: PropsWithChildren<IButtonProps>) {
  const Link = PrefetchLink ? PrefetchLink : DefaultLink

  const buttonCommonClass = (size: TButtonSize) => {
    return clsx(
      'rounded-[4px] cursor-pointer inline-flex items-center justify-center',
      'transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] select-none w-full ',
      'hover:shadow-lg hover:translate-y-[-2px] active:shadow-none active:translate-y-0',
      size === 'large' ? 'v2311-button-large' : 'v2311-button-medium',
      size === 'large'
        ? 'py-4 px-6'
        : size === 'medium'
          ? 'py-3 px-5'
          : 'py-2 px-4',
    )
  }

  const buttonClassNames = clsx(
    'bg-v2311-bg-dark-green',
    'box-border text-white',
    buttonCommonClass(size),
    className,
  )

  let buttonClass = ''

  switch (type) {
    case 'button':
      buttonClass = buttonClassNames
      break
    case 'transparent':
      buttonClass = clsx(className, buttonCommonClass(size))
      break
    case 'white':
      buttonClass = clsx(className, buttonCommonClass(size))
      break
    case 'link':
      buttonClass = className || ''
      break
    default:
      buttonClass = className || ''
      break
  }

  return (
    <>
      {href && (
        <Link
          href={href}
          onClick={(e) => {
            onClick && onClick(e)
          }}
          prefetch={prefetch || false}
          className={buttonClass}
        >
          {children}
        </Link>
      )}

      {!href && (
        <button
          className={buttonClass}
          onClick={(e) => {
            onClick && onClick(e)
          }}
        >
          {children}
        </button>
      )}
    </>
  )
}

// 文本链接样式按钮
export function LinkButton(props: PropsWithChildren<IButtonProps>) {
  return (
    <PrimaryButton
      {...props}
      type="link"
      className={clsx(
        'underline underline-offset-[6px] !text-[#333] inline-flex items-center justify-center',
        'py-1 px-4 hover:translate-y-[-2px] transition-all duration-300',
        props.className,
      )}
    />
  )
}

// 透明按钮
export function TransparentButton(props: PropsWithChildren<IButtonProps>) {
  return (
    <PrimaryButton
      {...props}
      type="transparent"
      className={clsx(
        'border-2 border-v2311-bg-dark-green',
        'text-v2311-bg-dark-green ',
        'hover:text-white hover:shadow-lg hover:bg-v2311-bg-dark-green',
        'disabled:pointer-events-none',
        props.className,
      )}
    />
  )
}

// 白色按钮
export function WhiteButton(props: PropsWithChildren<IButtonProps>) {
  return (
    <PrimaryButton
      {...props}
      type="white"
      className={clsx(
        'bg-v2311-bg-button-white text-v2311-text-primary',
        'hover:text-white hover:bg-white/10',
        'border-2 border-white max-w-max',
        props.className,
      )}
    />
  )
}
