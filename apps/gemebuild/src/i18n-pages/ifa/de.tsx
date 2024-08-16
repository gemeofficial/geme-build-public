/* eslint-disable react/no-unescaped-entities */
import {
  IFAHeroSection,
  IIFAHeroSectionProps,
  ISubscribeGemeV2Props,
  IWinnersNamesTickerProps,
  SubscribeGemeV2,
} from 'ui'

import { ILinkComponent } from '../../contexts/link-context'
import { winnersNames } from './winnersNames'
import VideoList, { IVideoList } from 'ui/src/ifa/VideoList'
import { FC } from 'react'

// Hero Section  De
const IFAHeroSectionProps: IIFAHeroSectionProps = {
  bgImageUrl: '/assets/images/ifa/hero-bg.png',
  prizeImage: '/assets/images/ifa/prize.jpg',
  gemeLogo: '/assets/images/ifa/white-logo.png',
  ifaLogo: '/assets/images/ifa/ifa-berlin-seeklogo.png',
  noticeTitle: (
    <>
      <p className="leading-tight">
        Glänzen mit GEME <br />
        <span className="text-[#ea3c58]">Auf der IFA Berlin 2024</span>
      </p>
      <span className="text-2xl md:text-3xl 3xl:text-4xl">
        Teilen Sie Ihre GEME-Geschichte,
        <br />
        gewinnen Sie einen GEME-Komposter!
      </span>
    </>
  ),
  ifaExhibitionDate: 'GEME auf der IFA Berlin, 6.-10. September 2024',
  prizeDesc: (
    <>
      <span className="text-lg md:text-xl xl:text-3xl">
        2 große Verlosungen sind im Gange! <br />
      </span>
      {/* <span className="text-sm md:text-base 2xl:text-lg">
        Um den Auftritt von GEME auf der IFA Berlin zu markieren.
      </span> */}
    </>
  ),
  activityTitle: 'Aktivität',
  activityDescription: (
    <>
      <strong>Wöchentliche Gewinne: </strong>
      <p>
        Vom 19. August bis 6. September gewinnen Sie jeden Montag, Mittwoch und
        Freitag ein $59.9 Kobold-Nachfüllpack.
      </p>
      <br />
      <strong>Hauptpreis: </strong>
      <p>
        Ein glücklicher Gewinner aus allen Teilnehmern wird am 14. September
        einen GEME-Komposter gewinnen.
      </p>
    </>
  ),
  buttonText: 'Reichen Sie Ihr Video ein!',
  countdownTitle: 'Countdown zum nächsten Ziehung :',
  winningProbabilityTitle:
    'Aktuelle Gewinnwahrscheinlichkeit des Kobold-Nachfüllpacks:',
  prizeImageTitle: 'Belohnungen',
  sampleVideoTitle: 'Video-Einreichungsideen',
  descriptionText: (
    <>
      <ul>
        <li className="list-disc">
          1/N steht für Ihre Gewinnwahrscheinlichkeit bei jeder Ziehung.
        </li>
        <li className="list-disc">
          Wir werden jeden Montag, Mittwoch und Freitag Gewinner ziehen.
        </li>
        <li className="list-disc">
          Die Gewinnwahrscheinlichkeit wird nach jeder Ziehung aktualisiert.
        </li>
      </ul>
    </>
  ),
  locale: 'de',
}

// 视频列表   De
const videoListProps: IVideoList = {
  title: 'Videoliste',
  description:
    'Hier sind einige der von unseren preisgekrönten Nutzern hochgeladenen Videos und wie sie GEME in ihrem täglichen Leben verwenden.',
  linkText: 'mehr laden',
  fromText: 'Aus',
  useTimeText: 'Nutzungsdauer',
  emptyTexy:
    'Die Videoliste wird nach dieser Ziehung angezeigt, bitte haben Sie etwas Geduld.',
  videoList: [
    {
      // poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-1.mp4',
      from: 'MN',
      useTime: '9 Monate',
    },
    {
      // poster: '/assets/images/home-v2311/hero-blurred.webp',
      src: 'https://www-geme-bio-us.s3.us-west-1.amazonaws.com/user-videos/ifa-page-user-video-2.mp4',
      from: 'OH',
      useTime: '10 Monate',
    },
  ],
}

// 中奖名单  De
const winnersNamesTickerProps: IWinnersNamesTickerProps = {
  title: 'Geschichte Gewinner',
  linkText: 'mehr anzeigen',
  winnersNames,
}

// 订阅模块 De
const subscribeGemeV2Props: ISubscribeGemeV2Props = {
  title: 'Lernen Sie GEME II kennen',
  description: <>Interessiert? Treten Sie der Warteliste bei!</>,
  emailPlaceholder: 'Geben Sie Ihre E-Mail ein',
  submitButtonLabel: 'Benachrichtigen Sie mich',
  productSectionTitle: 'Vorschau',
  imageList: [
    {
      src: '/assets/images/geme-v2-product/geme-v2-1-color.png',
      alt: 'Geme II Produktbild 1',
      title: 'Erschwinglich',
      desc: 'Ordentlich und schlank, aber dennoch leistungsstark',
    },
    {
      src: '/assets/images/geme-v2-product/geme-v2-2.png',
      alt: 'Geme II Produktbild 2',
      title: 'Intelligent',
      desc: 'Das beste Erlebnis für Lebensmittelabfälle, das Sie nie gedacht hätten',
    },
    {
      src: '/assets/images/geme-v2-product/geme-4r.jpeg',
      alt: 'Geme II Produktbild 3',
      title: 'Fürsorge & Liebe',
      desc: 'Nicht nur ein Produkt, sondern eine vernetzte nachhaltige Gemeinschaft',
    },
  ],
}

export interface IIFAPageProps {
  PrefetchLink?: ILinkComponent
  SubscribeComponent?: FC<{
    inputPlaceholder: string
    submitButtonLabel: string
  }>
}

function IFAPageDe({ PrefetchLink, SubscribeComponent }: IIFAPageProps) {
  return (
    <>
      <IFAHeroSection {...IFAHeroSectionProps} PrefetchLink={PrefetchLink} />
      <VideoList
        videoListProps={videoListProps}
        winnersNamesTickerProps={winnersNamesTickerProps}
        PrefetchLink={PrefetchLink}
      />
      <SubscribeGemeV2
        {...subscribeGemeV2Props}
        SubscribeComponent={SubscribeComponent}
      />
    </>
  )
}

export { IFAPageDe }
