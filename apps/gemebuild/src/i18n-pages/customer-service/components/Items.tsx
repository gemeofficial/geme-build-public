'use client'
import React, { FC } from 'react'
import defaultLink from 'next/link'
import CommingSoon from './CommingSoon'
import { ILinkComponent } from '../../../contexts/link-context'

const Button = ({
  children,
  href,
  className,
  onClick,
  plainButton,
  PrefetchLink,
}: {
  children: React.ReactNode
  href?: string
  className?: string
  onClick?: () => void
  plainButton?: boolean
  PrefetchLink: ILinkComponent
}) =>
  plainButton ? (
    <button
      onClick={onClick}
      className={`flex mt-5 md-5 w-full items-center justify-center rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:inline-flex sm:w-auto ${className}`}
    >
      {children}
    </button>
  ) : href ? (
    <PrefetchLink
      href={href}
      className={`flex mt-5 md-5 w-full items-center justify-center rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 sm:inline-flex sm:w-auto ${className}`}
    >
      {children}
    </PrefetchLink>
  ) : null

const Items = ({
  items,
  specificLength,
  keepCol,
  PrefetchLink,
}: {
  items: Array<{
    name: string
    description?: string
    buttonName?: string
    price?: string
    link?: string
    image?: string
    plainButton?: boolean
    onClick?: () => void
    icon?: React.ReactNode
    commingSoon?: boolean
    roundBorderTop?: boolean
    noArrow?: boolean
  }>
  specificLength?: number
  keepCol?: boolean
  PrefetchLink: ILinkComponent
}) => {
  const LinkComponent = PrefetchLink || defaultLink
  const [isOpen, setIsOpen] = React.useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  return (
    <div
      className={`grid sm:grid-cols-${
        specificLength || items.length
      } gap-4 mt-8 mb-8`}
    >
      {items.map((item, index) => (
        <div
          key={item.name + index}
          className={`flex md:h-full lg:flex-col bg-white p-8 ${
            item.roundBorderTop && `border-t-8 border-emerald-600 rounded-md`
          } ${keepCol && 'flex-col'}`}
        >
          <div className="flex-shrink-0 flex">
            {item.icon && (
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-600 text-white sm:h-12 sm:w-12">
                {item.icon}
              </div>
            )}
            {item.image && (
              <picture>
                <img
                  src={item.image}
                  alt="customer service cover"
                  className="object-cover object-center w-full h-32 rounded-md mb-5"
                />
              </picture>
            )}
          </div>
          <div
            className={`ml-4 md:flex md:flex-1 md:flex-col md:justify-between lg:ml-0 lg:mt-4 ${
              keepCol && 'ml-0'
            }`}
          >
            <div>
              <p className="text-base font-medium text-gray-900">{item.name}</p>
              {item.description && (
                <p className="mt-1 text-sm text-gray-500 ">
                  {item.description}
                </p>
              )}
              <p className="mt-5 md-5 text-5xl text-emerald-600 ">
                {item.price}
              </p>
            </div>
            {item.commingSoon ? (
              <p
                className="mt-2 text-sm font-medium text-emerald-600 lg:mt-4"
                onClick={openModal}
              >
                {item.buttonName}
                <span aria-hidden="true">&rarr;</span>
              </p>
            ) : item.plainButton ? (
              <Button
                PrefetchLink={LinkComponent}
                onClick={item.onClick}
                plainButton
                className="max-w-max"
              >
                {item.buttonName}
              </Button>
            ) : item.link ? (
              <LinkComponent href={item.link}>
                <p className="mt-2 text-sm font-medium text-emerald-600 lg:mt-4">
                  {item.buttonName}
                  {item.noArrow ? null : <span aria-hidden="true">&rarr;</span>}
                </p>
              </LinkComponent>
            ) : null}
            {item.commingSoon ? (
              <CommingSoon
                isOpen={isOpen}
                openModal={openModal}
                closeModal={closeModal}
              />
            ) : null}
          </div>
        </div>
      ))}
    </div>
  )
}

const ImageAndTextBlock = ({
  image,
  name,
  subTitle,
  description,
  link,
  buttonName,
  leftImage,
  PrefetchLink,
}: {
  image: string
  name: string
  subTitle?: string
  description: string
  buttonName?: string
  link?: string
  leftImage?: boolean
  PrefetchLink: ILinkComponent
}) => (
  <div className="grid sm:grid-cols-2">
    {leftImage ? (
      <picture>
        <img
          src={image}
          alt="customer service cover"
          className="object-cover object-center"
        />
      </picture>
    ) : null}
    <div className="mt-0 bg-white p-5 lg:p-20">
      <h3 className="text-4xl font-medium text-gray-900 mb-5">{name}</h3>
      <h4 className="text-2xl font-medium text-gray-900 mb-10">{subTitle}</h4>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      {link != null && buttonName != null && (
        <Button PrefetchLink={PrefetchLink} href={link} className="max-w-max">
          {buttonName}
        </Button>
      )}
    </div>
    {leftImage ? null : (
      <picture>
        <img
          src={image}
          alt="customer service cover"
          className="object-cover object-center"
        />
      </picture>
    )}
  </div>
)

export { Items, Button, ImageAndTextBlock }
