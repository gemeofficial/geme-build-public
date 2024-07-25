import type { LinkProps } from 'next/link'
import Image from 'next/image'
import classNames from 'ui/src/lib/classNames'
import { ILinkComponent } from '../../i18n-pages'
import defaultLink from 'next/link'
import VideoInlinePlayer from 'ui/src/video-inline-player'
import { ReactNode } from 'react'

// Ref: https://tailwindui.com/components/marketing/sections/heroes#component-e5c15b9d1a503738005e35302043c802
function SplitWithNavBar({
  title,
  highlightTitle,
  TitleComponent,
  description,
  imageAlt,
  imageSrc,
  displayImageWithBlurBackground,
  buttons,
  hints,
  hintsLink,
  videoUrl,
  imageContain,
  primarySectionClassName,
  secondarySectionClassName,
  PrefetchLink,
}: ISplitWithNavBarProps) {
  const primaryButton = buttons?.primaryButton
  const Link = PrefetchLink || defaultLink

  return (
    <div className="lg:relative bg-gray-50">
      <div className="mx-auto w-full max-w-7xl pt-16 pb-20 text-center lg:py-48 lg:text-left">
        <div
          className={classNames(
            'px-4 sm:px-8 lg:w-1/2 xl:pr-16',
            primarySectionClassName || '',
          )}
        >
          {TitleComponent != null && TitleComponent}
          {TitleComponent == null && (
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">{title}</span>{' '}
              <span className="block text-emerald-600 xl:inline">
                {highlightTitle}
              </span>
            </h1>
          )}
          <div className="mx-auto mt-3 max-w-md text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
            {description}
          </div>
          {buttons && (
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              {primaryButton && (
                <div className="rounded-md shadow">
                  {typeof primaryButton === 'object' &&
                  'label' in primaryButton ? (
                    <Link
                      {...primaryButton.linkProps}
                      locale={
                        primaryButton.linkProps.locale === false
                          ? undefined
                          : primaryButton.linkProps.locale
                      }
                      passHref
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-v2311-bg-dark-green hover:bg-v2311-primary px-8 py-3 text-base font-medium text-white md:py-4 md:px-10 md:text-lg"
                    >
                      {primaryButton.label}
                    </Link>
                  ) : (
                    primaryButton
                  )}
                </div>
              )}
              {buttons.secondaryButton && (
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link
                    {...buttons?.secondaryButton?.linkProps}
                    locale={
                      buttons?.secondaryButton?.linkProps?.locale === false
                        ? undefined
                        : buttons?.secondaryButton?.linkProps?.locale
                    }
                    passHref
                    onClick={buttons?.secondaryButton?.linkProps.onClick}
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-white px-8 py-3 text-base font-medium text-emerald-600 hover:bg-gray-50 md:py-4 md:px-10 md:text-lg"
                  >
                    {buttons.secondaryButton.label}
                  </Link>
                </div>
              )}
            </div>
          )}
          {hints && <p className="mt-3 text-sm text-gray-500">{hints}</p>}
          {hintsLink && (
            <Link
              {...hintsLink?.linkProps}
              locale={
                hintsLink?.linkProps.locale === false
                  ? undefined
                  : hintsLink?.linkProps.locale
              }
              passHref
              onClick={hintsLink?.linkProps.onClick}
              className="flex font-medium text-emerald-600 hover:bg-gray-50 mt-3 md:py-2 md:px-3 md:text-sm"
            >
              {hintsLink.label}
            </Link>
          )}
        </div>
      </div>
      <div
        className={classNames(
          'relative h-64 w-full sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2',
          secondarySectionClassName || '',
        )}
      >
        {videoUrl != null && (
          <VideoInlinePlayer
            videoUrl={videoUrl}
            description="Watch our video to learn more"
          >
            <ImageRender
              imageSrc={imageSrc}
              imageAlt={imageAlt}
              displayImageWithBlurBackground={displayImageWithBlurBackground}
              imageContain={imageContain}
            />
          </VideoInlinePlayer>
        )}
        {videoUrl == null && (
          <ImageRender
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            displayImageWithBlurBackground={displayImageWithBlurBackground}
            imageContain={imageContain}
          />
        )}
      </div>
    </div>
  )
}

function ImageRender({
  displayImageWithBlurBackground = false,
  imageContain = false,
  ...imageProps
}: Pick<
  ISplitWithNavBarProps,
  'imageSrc' | 'imageAlt' | 'displayImageWithBlurBackground' | 'imageContain'
>) {
  if (displayImageWithBlurBackground) {
    return <ImageWithBlurBackground {...imageProps} />
  }

  return (
    <Image
      className={`absolute inset-0 h-full w-full ${
        imageContain ? 'object-contain' : 'object-cover'
      }`}
      width={1080}
      height={720}
      priority
      src={imageProps.imageSrc}
      alt={imageProps.imageAlt || 'Hero Image'}
    />
  )
}

function ImageWithBlurBackground({
  imageSrc,
  imageAlt,
}: Pick<ISplitWithNavBarProps, 'imageSrc' | 'imageAlt'>) {
  return (
    <div>
      <Image
        width={1080}
        height={720}
        className="absolute inset-0 h-full w-full object-cover blur-lg "
        priority
        src={imageSrc}
        alt={imageAlt || 'Hero Image'}
      />
      <Image
        width={1080}
        height={720}
        className="absolute inset-0 h-full w-full object-contain "
        priority
        src={imageSrc}
        alt={imageAlt || 'Hero Image'}
      />
    </div>
  )
}

export const example: ISplitWithNavBarProps = {
  title: 'Data to enrich your',
  highlightTitle: 'online business',
  description:
    'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
  imageAlt: '',
  imageSrc:
    'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80',
}

export interface ISplitWithNavBarProps {
  title: string
  highlightTitle?: string
  TitleComponent?: ReactNode
  description: React.ReactNode
  imageSrc: string
  imageAlt: string
  displayImageWithBlurBackground?: boolean
  imageContain?: boolean

  buttons?: {
    primaryButton?:
      | {
          label: string
          linkProps: Pick<
            React.AllHTMLAttributes<HTMLAnchorElement>,
            'onClick'
          > &
            LinkProps
        }
      | React.ReactNode
    secondaryButton?: {
      label: string
      linkProps: Pick<React.AllHTMLAttributes<HTMLAnchorElement>, 'onClick'> &
        LinkProps
    }
  }

  hints?: string
  hintsLink?: {
    label: string
    linkProps: Pick<React.AllHTMLAttributes<HTMLAnchorElement>, 'onClick'> &
      LinkProps
  }

  videoUrl?: string

  // customized className passed to the first(top/left) section
  primarySectionClassName?: string
  // customized className passed to the first(top/left) section
  secondarySectionClassName?: string

  PrefetchLink?: ILinkComponent
}

export default SplitWithNavBar
