import clsx from 'clsx'
import Image from 'next/image'
import { LocaleType, SectionContainer, SectionTitle } from '../index'
import { Fragment } from 'react'

type TItem = {
  alt: string
  src: string
  link: string
}

const titleTextInfo = {
  en: 'Press Mentions',
  de: 'Erwähnungen in der Presse',
  fr: 'Mentions dans la presse',
}

// Logo cloud
const logoCloudImages: TItem[] = [
  {
    src: '/assets/images/geme-terra-2/press/europa-press.png',
    alt: 'Europa Press',
    link: 'https://www.europapress.es/comunicados/internacional-00907/noticia-comunicado-revolucionando-sostenibilidad-hogar-geme-presenta-futuro-compostaje-ifa-berlin-2024-20240830060937.html',
  },
  {
    src: '/assets/images/geme-terra-2/press/adnkronos.svg',
    alt: 'Adn Kronos',
    link: 'https://www.adnkronos.com/immediapress/rivoluzionare-la-sostenibilita-domestica-geme-presenta-il-futuro-del-compostaggio-alledizione-2024-di-ifa-a-berlino_6MKcoIpt8YP0E5h7SoRmIg',
  },
  {
    src: '/assets/images/geme-terra-2/press/bolsamania.png',
    alt: 'Bolsamania',
    link: 'https://www.bolsamania.com/nota-de-prensa/mercados/revolucionando-la-sostenibilidad-del-hogar-geme-presenta-el-futuro-del-compostaje-en-ifa-berlin-2024--17375550.html',
  },
  {
    src: '/assets/images/geme-terra-2/press/wallstreet-online-horizontal.svg',
    alt: 'Reform',
    link: 'https://www.wallstreet-online.de/nachricht/18438137-geme-revolutioniert-nachhaltigkeit-haushalt-stellt-ifa-berlin-2024-zukunft-kompostierung',
  },
  {
    src: '/assets/images/geme-terra-2/press/yahoo-finance.png',
    alt: 'Yahoo Finance',
    link: 'https://consent.yahoo.com/v2/collectConsent?sessionId=4_cc-session_2208ea75-58aa-459e-ac89-0cf35164b34c',
  },
  {
    src: '/assets/images/geme-terra-2/press/advfn.png',
    alt: 'ADVFN',
    link: 'https://www.advfn.com/stock-market/stock-news/94437900/revolutionizing-home-sustainability-geme-debuts-th',
  },
  {
    src: '/assets/images/geme-terra-2/press/IFA.svg',
    alt: 'IFA',
    link: 'https://daily.ifa-berlin.com/daily/geme-smart-composter/',
  },
  {
    src: '/assets/images/geme-terra-2/press/housedigest.svg',
    alt: 'Housedigest',
    link: 'https://www.housedigest.com/1660656/ifa-2024-these-home-garden-innovations-offer-a-high-tech-twist/',
  },
  {
    src: '/assets/images/geme-terra-2/press/digitaltrends.png',
    alt: 'Digitaltrends',
    link: 'https://www.digitaltrends.com/home/ifa-2024-best-smart-home/',
  },
]

export function LogoCloud({
  locale,
  canRedirect,
}: {
  locale: LocaleType
  canRedirect?: boolean // 是否能点击跳转到文章地址
}) {
  const title = titleTextInfo[locale]
  return (
    <SectionContainer compact>
      <SectionTitle>{title}</SectionTitle>

      <LogoCloudComponent canRedirect={canRedirect} />
    </SectionContainer>
  )
}

export function LogoCloudComponent({
  canRedirect,
  className,
}: {
  canRedirect?: boolean
  className?: string
}) {
  return (
    <div
      className={clsx(
        'mt-4 md:mt-6 grid items-center grid-cols-3 md:grid-cols-5',
        'gap-4 gap-y-6 sm:gap-8 lg:gap-10 lg:gap-y-14',
        className,
      )}
    >
      {logoCloudImages.map((item, index) => (
        <Fragment key={index}>
          {canRedirect && (
            <a
              href={item.link}
              target="_blank"
              className={clsx(index === 2 ? 'md:col-span-2' : '')}
            >
              <ImageComponents item={item} />
            </a>
          )}

          {!canRedirect && (
            <ImageComponents
              item={item}
              className={clsx(index === 2 ? 'md:col-span-2' : '')}
            />
          )}
        </Fragment>
      ))}
    </div>
  )
}

function ImageComponents({
  item,
  className,
}: {
  item: TItem
  className?: string
}) {
  return (
    <Image
      alt={item.alt}
      src={item.src}
      width={312}
      height={96}
      className={clsx(
        'min-h-8 max-h-8 md:max-h-12 w-full object-contain',
        className,
      )}
    />
  )
}
